# Robust Localhost HTTP Server for Neelam's Digital Canvas
param (
    [int]$Port = 8080,
    [string]$DocRoot = $PSScriptRoot
)

$listener = New-Object System.Net.HttpListener
$prefix1 = "http://localhost:" + $Port + "/"
$prefix2 = "http://127.0.0.1:" + $Port + "/"
$listener.Prefixes.Add($prefix1)
try {
    $listener.Prefixes.Add($prefix2)
} catch {}

try {
    $listener.Start()
    Write-Host "NEELAM'S DIGITAL CANVAS IS LIVE ON LOCALHOST!" -ForegroundColor Green
    Write-Host "URL: $prefix1" -ForegroundColor Yellow
} catch {
    $Port = 8080
    $prefix1 = "http://localhost:" + $Port + "/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix1)
    $listener.Start()
    Write-Host "URL: $prefix1" -ForegroundColor Yellow
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
    ".mp4"  = "video/mp4"
    ".pdf"  = "application/pdf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath
        $path = $rawPath.TrimStart("/").TrimStart("\")
        if ([string]::IsNullOrWhiteSpace($path)) {
            $path = "index.html"
        }

        $filePath = Join-Path $DocRoot $path

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $mime = $mimeTypes[$ext]
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200

            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
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
        $response.Close()
    } catch {
        # Catch and continue so server never crashes on bad request
    }
}

$listener.Stop()
$listener.Close()
