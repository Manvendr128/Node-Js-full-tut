const http = require("http");
const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url.toLowerCase()==='/home'){
    res.write("you are now home page");
    return res.end();
  }
  else if(req.url.toLowerCase()==='/Kids'){
    res.write("you are Kids page.")
    return res.end();
  }
  else if(req.url.toLowerCase()==='/carts'){
    res.write("you are carts page.")
    return res.end();
  }
  else if(req.url.toLowerCase()==='/men'){
    res.write("you are now men page");
    return res.end();
  }
  else if(req.url.toLowerCase()==='/women'){
    res.write("you are now women page");
    return res.end();
  }
  res.write(
    `<html>
      <head>
        <title>
          Myntra Shooping Website
        </title>
      </head>
      <body>
        <h1>
          This Our E-Commerce Website
          <br>
          <a href="/home">Home</a><br>
          <a href="/kids">Kids</a><br>
          <a href="/carts">Carts</a><br>
          <a href="/men">Men</a><br>
          <a href="/women">Women</a><br>
        </h1>
      </body>
    </html>`
  );
  res.end();

})

const port = 3001;
server.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
});