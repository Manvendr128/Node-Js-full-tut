const http = require("http");
const fs = require("fs");
const requesthandler = (req,res)=>{
  console.log(req.url,req.method);
  // step-1
  console.log("step-1");

  if(req.url==='/'){
    //step-2
    console.log("step-2");
    res.setHeader("Content-Type","text/html");
    res.write(
      `<html>
        <head>
          <title>Form Submit Details</title>
        </head>
        <body>
          <h2>
            Enter Your Details Here:
          </h2>
          <form action="/submit-details" method="POST">
          <input type="text" name="username" placeholder="First Name"></input>
          <br></br>
          <input type="radio" id="male" name="gender" value="male"></input>
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="female"></input>
          <label for="male">Female</label>
          <br></br>
          <input type="submit"></input>
          

          </form>
        </body>
      </html>`
    );
    return res.end();
  }
  else if(req.url.toLowerCase()==='/submit-details'&& req.method=="POST"){
    //step-3
    console.log("step-3");
    // data transfer inta the form of chunks
    const body = [];
    req.on('data',chunk=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end',()=>{
      // step-5
      console.log("step-5");
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      const params = new URLSearchParams(fullbody);
      const bodyobject = Object.fromEntries(params);
      console.log(bodyobject);
      fs.writeFileSync('usewr.txt',JSON.stringify(bodyobject));
    });
    //step -4
    console.log("step-4");
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title></title></head>');
    res.write('<body><h1>"You have Submit your details."</h1></body>');
    res.write('</html>');
    return res.end();
  
  }
  res.setHeader("Content-Type","text/html");
  res.write(
    `<html>
      <head>
        <title>Form Details</title>
        <body>
          <h2>Like/Share/Subscribe</h2>
        </body>
      </head>
    </html>`
  )
  return res.end();
};
module.exports = requesthandler;

// const port = 3001;
// server.listen(port,()=>{
//   console.log(`server is running on http://localhost:${port}`);
// });