const http = require("http");
const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
    res.write("you are now home page");
    return res.end();
  }
  else if(req.url==='/products'){
    res.write("you are now products page.")
    return res.end();
  }
  res.write("Like/share/subscribe");
  res.end();

})

const port = 3001;
server.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
});