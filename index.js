const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;
console.log(http);
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
	// res.statusCode = 200;
	// res.setHeader('content-type','text/plain');
	res.end("Welcome to http server");// will display in UI
});

server.listen(port,hostName,()=>{
	console.log(`server is running at http://${hostName}:${port}/`)
})
