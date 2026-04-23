const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
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
    // res.setHeader("Content-Type","text/html");
    // res.write(
    //   `<html>
    //     <head>
    //       <title>Submitted</title>
    //     </head>
    //     <body>
    //       <h2>
    //       Now You Have Submitted Your Details.
    //       </h2>
    //     </body>
    //   </html>`
    // )
    
// write aur redirect ek nhi kr skte yaa to write krlo yaa redirect krlo dono kaam ek sath nhi hunge

  fs.writeFileSync("user.txt","monu attri");
  res.statusCode = 302;
  res.setHeader('location','/');
  return res.end();
  }
  //Save data in file
  // fs.writeFileSync("user.txt","monu attri");
  // res.statusCode = 302;
  // res.setHeader('location','/');
  // return res.end();
});

const port = 3001;
server.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
});