var http = require('http')
var a =100;
var b = 200;
var c = a+b;
var msg;
if(c> 30){
    msg = "Sum is more than 30"
}else{
    msg = "Sum is equal or less than 30"
}

http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'})
    res.write(`A value is ${a} <br>`)
    res.write(`B value is ${b} <br>`)
    res.write(`Sum value is ${a+b} <br>`)
    res.end(`${msg}`)
}).listen(4000);

console.log(`The server is running on http://127.0.0.1:4000`)