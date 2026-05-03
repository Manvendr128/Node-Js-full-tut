// const http = require('http');
const sum = require('./sum')
const reqhandler = (req,res)=>{
  if(req.url==='/'){
    console.log(req.url,req.method)
    res.setHeader('content-type','text/html');
    res.write(
      `<html>
        <head>
          <title>Home Page Calculator</title>
        </head>
        <body>
          <h1>welcome to the home page of calculator</h1>
          <h4>Here is link to go for calculator</h4>
          <a href="/calculator">Caculator</a>
        </body>
      </html>`
    )
    return res.end();
  }
  else if(req.url==='/calculator'){
    res.setHeader('content-type','text/html');
    res.write(
      `<html>
        <head>
          <title>Home Page Calculator</title>
        </head>
        <body>
          <h4>Submit Your Vlaues Here</h4>
          <form action="/calculate-result" method='POST'>
          <input type="text" placeholder='Enter First Value' name = "first"></input>
          <input type='text' placeholder='Enter Second Value' name="second"></input>
          <br></br>
          <input type='submit'></input>
          </form>
        </body>
      </html>`
    )
    return res.end();
  }
else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST')
    return sum(req,res);
}
module.exports = reqhandler