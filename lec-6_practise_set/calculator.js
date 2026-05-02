const http = require('http');
const server = http.createServer((req,res)=>{
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
  else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
    const body = [];
    req.on('data',chunk=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end',()=>{
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      const params = new URLSearchParams(fullbody);
      const bodyobject = Object.fromEntries(params);
      console.log(bodyobject);
      const result = Number(bodyobject.first) + Number(bodyobject.second);
      res.setHeader('content-type','text/html');
    res.write(
      `<html>
        <head>
          <title></title>
        </head>
        <body>
        <h1>
          your result is ${result}
        </h1>  
        </body>
      </html>`
    )
    return res.end();
  })
}

});

const port = 3000;
server.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
})