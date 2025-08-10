const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    console.log("Request received for: ", req.url);
    if (req.url === "/gettext") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, World!\n");
        return;
    } else if (req.url === "/getfile") {
        fs.readFile("./test.html", (error, content) => {
            if (error) {
                console.error("Error reading file:", error);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error\n");
            } else {
                res.writeHead(200, { "Content-Type": "text.html" });
                res.end(content);
            }
        });
    } else if (req.url.startsWith("/double")) {
        console.log("Double request received", req.url);
        const url = new URL(req.url, `http://${req.headers.host}`);
        console.log("Parsed URL:", url);

        const query = url.searchParams;
        const myNumber = parseInt(query.get("myNumber"));

        res.writeHead(200, { "Content-Type": "text/plain"});
        res.end(`Double of ${myNumber} is ${result}\n`);
        return;

        console.log(query,get("myNumber"));
        console.log("Query parameters: query");

        res.end("This is the double request handler.\n");
        return;
    } else if (req.url === "/getjoke"){
        const randomJoke = joke();
        console.log("random joke:", randomJoke);
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(randomJoke.text);
        return;
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found\n");
        return;
    }
});

server.listen(8081, () => {
    console.log("Server is listening on port 8081");
});