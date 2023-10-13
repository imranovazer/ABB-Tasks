import http from "http";
// const http = require('http')
var PORT = 3000;
let count = 0;

// console.log(process.argv);

process.argv.forEach((arg) => {
    if (arg.startsWith("--port=")) {
        const portArgument = arg.split("=")[1];
        if (!isNaN(portArgument)) {
            PORT = parseInt(portArgument);
        }
    }
});

const server = http.createServer((req, res) => {
    count = count + 1;
    const resBody = {
        message: "Request handled successfully",
        requestCount: count,
    };
    const send = JSON.stringify(resBody);
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(send);
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
