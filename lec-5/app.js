const http = require("http");
const handler = require('./one');
const server = http.createServer(handler);
const port = 3001;
server.listen(port,()=>{
  console.log(`server is runnig on http://localhost:3001`);
});
