# Robust Synchronous HTTP Server for Neelam's Digital Canvas
param (
    [int]$Port = 8080,
    [string]$DocRoot = $PSScriptRoot
)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")

try {
    $listener.Start()
    Write-Host "NEELAM'S DIGITAL CANVAS SERVER IS LIVE ON LOCALHOST!" -ForegroundColor Green
    Write-Host "URL: http://localhost:$Port/" -ForegroundColor Yellow
} catch {
    Write-Host "Error starting listener: $_"
    exit 1
}

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".mjs"   = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
    ".mp4"   = "video/mp4"
    ".pdf"   = "application/pdf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $response.KeepAlive = $false

        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")

        $rawPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        $path = $rawPath.TrimStart("/").TrimStart("\")
        if ([string]::IsNullOrWhiteSpace($path)) {
            $path = "index.html"
        }

        $filePath = [System.IO.Path]::Combine($DocRoot, $path)

        if ([System.IO.File]::Exists($filePath)) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $mime = $mimeTypes[$ext]
            }

            $response.ContentType = $mime
            $fileInfo = New-Object System.IO.FileInfo($filePath)
            $response.ContentLength64 = $fileInfo.Length
            $response.StatusCode = 200

            if ($request.HttpMethod -ne "HEAD") {
                $fs = [System.IO.File]::OpenRead($filePath)
                try {
                    $fs.CopyTo($response.OutputStream)
                } finally {
                    $fs.Dispose()
                }
            }
        } else {
            $indexPath = [System.IO.Path]::Combine($DocRoot, "index.html")
            if ([System.IO.File]::Exists($indexPath) -and -not $path.Contains(".")) {
                $response.ContentType = "text/html; charset=utf-8"
                $fileInfo = New-Object System.IO.FileInfo($indexPath)
                $response.ContentLength64 = $fileInfo.Length
                $response.StatusCode = 200
                if ($request.HttpMethod -ne "HEAD") {
                    $fs = [System.IO.File]::OpenRead($indexPath)
                    try {
                        $fs.CopyTo($response.OutputStream)
                    } finally {
                        $fs.Dispose()
                    }
                }
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentType = "text/plain"
                $response.ContentLength64 = $errBytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
            }
        }
        $response.Close()
    } catch {
        # ignore client disconnects
    }
}

$listener.Stop()
$listener.Close()
