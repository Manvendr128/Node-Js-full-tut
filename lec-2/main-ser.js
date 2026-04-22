const http = require("http");
const server = http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  res.setHeader("Content-Type","text/html");
  res.write(
    `<html>
      <head>
        <title>Error Page</title>
        <body>
          <h1>Page Error 404 exist</h1>
        </body>
      </head>
    </html>`
  )
  res.end();

});

server.listen(4000,()=>{
  console.log(`server is runing on http://localhost:4000`);
});