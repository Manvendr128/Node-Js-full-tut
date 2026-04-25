const http = require("http");
const handler = require('./one');
const server = http.createServer(handler);
const port = 3000;
server.listen(port,()=>{
  console.log(`server is runnig on http://localhost:3000`);
});
