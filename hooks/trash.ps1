# Recycle-Bin deletion helper (Windows equivalent of macOS /usr/bin/trash).
# Usage: powershell -ExecutionPolicy Bypass -File trash.ps1 <path> [<path> ...]
# Moves files/directories to the Recycle Bin (recoverable) instead of
# permanent deletion. Companion to destructive-guard.js, which blocks
# permanent-deletion commands and points here.
#
# Fails closed on Dropbox/OneDrive cloud placeholders (online-only files):
# Windows Recycle Bin APIs reject those reparse points. Make them available
# offline first, then retry.
param(
  [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
  [string[]]$Paths
)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName Microsoft.VisualBasic

# Offline (0x1000), RecallOnOpen (0x40000), RecallOnDataAccess (0x400000)
$CloudMask = 0x00001000 -bor 0x00040000 -bor 0x00400000

function Test-CloudPlaceholder {
  param($Item)
  return (([int]$Item.Attributes) -band $CloudMask) -ne 0
}

foreach ($p in $Paths) {
  $full = (Resolve-Path -LiteralPath $p).Path
  $item = Get-Item -LiteralPath $full -Force

  if ($item.PSIsContainer) {
    $placeholders = @(
      @($item) + @(Get-ChildItem -LiteralPath $full -Recurse -Force) |
        Where-Object { Test-CloudPlaceholder $_ }
    )
    if ($placeholders.Count -gt 0) {
      throw ("REFUSED (fail closed): '$full' contains $($placeholders.Count) " +
        "cloud-placeholder item(s) the Recycle Bin API would reject. " +
        "Make the folder available offline (Dropbox: 'Make available " +
        "offline'), then retry. Nothing was deleted.")
    }
    [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteDirectory(
      $full, 'OnlyErrorDialogs', 'SendToRecycleBin')
  } else {
    if (Test-CloudPlaceholder $item) {
      throw ("REFUSED (fail closed): '$full' is a cloud placeholder " +
        "(online-only). Make it available offline, then retry. " +
        "Nothing was deleted.")
    }
    [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteFile(
      $full, 'OnlyErrorDialogs', 'SendToRecycleBin')
  }
  Write-Output "Recycled: $full"
}
