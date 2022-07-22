var http = require("http");
http.createServer(function (request, response) {
 // Send the HTTP header 
 // HTTP Status: 200 : OK
 // Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/plain'});
 
 // Send the response body as "Hello World"
 response.end('Hello World\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

const os=require('os'); 
console.log("os.freemem(): \n",os.freemem()); 
console.log("os.homedir(): \n",os.homedir()); 
console.log("os.hostname(): \n",os.hostname()); 
console.log("os.endianness(): \n",os.endianness()); 
console.log("os.loadavg(): \n",os.loadavg()); 
console.log("os.platform(): \n",os.platform()); 
console.log("os.release(): \n",os.release()); 
console.log("os.tmpdir(): \n",os.tmpdir()); 
console.log("os.totalmem(): \n",os.totalmem()); 
console.log("os.type(): \n",os.type()); 
console.log("os.uptime(): \n",os.uptime()); 
console.log(__dirname); 
console.log(__filename);