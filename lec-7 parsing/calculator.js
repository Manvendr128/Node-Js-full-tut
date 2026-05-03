const http = require('http');
const reqhandler = require('./handler')
const server = http.createServer(reqhandler);
const port = 3000;
server.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
})