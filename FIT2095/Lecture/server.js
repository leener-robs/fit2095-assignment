const http = require("http");

//request, response
http.createServer((req, res) => {
    console.log(request.url);
    res.write("Hello");
    res.end();
}).listen(8080);