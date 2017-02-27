/**
 * Created by Monty on 2017/2/26.
 */



const http = require('http');

let serv = http.createServer(function (req, res) {
    console.log(req);
    console.log(res);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<div>hello node.js</div>');
});

serv.listen('3001');