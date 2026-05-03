const sum = (req,res)=>{
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

module.exports = sum;