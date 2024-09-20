const http = require('http')
http.createServer((request,response)=>{

    response.writeHead(200,{'Content-type': 'text/html'})
    response.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Head</h1>
    <p>Hello </p>
</body>
</html>
        `)
    response.end()
})

server.listen(6000, ()=>{
    console.log("Sever is running at'http://localhost.6000")
})