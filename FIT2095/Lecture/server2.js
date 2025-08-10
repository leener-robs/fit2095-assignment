const http  = req("http");
http.createServer(function (req, res) {
    console.log(req.url);

    let baseURL = "http://" + request.headers.host + "/";
    let url = new URL(request.url, baseURL);
    let params = url.searchParams;

    console.log(params);

    let responseStr = "Hi: " + params.get("name") + ", you are " 
    + params.get("age") + " years old, and you live in " 
    + params.get(city);
    res.end(responseStr);
}).listen(8080);