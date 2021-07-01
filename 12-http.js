const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page') 
    }
    // res.write();
    if(req.url === '/about'){
        res.end('About this page...')
    }

   res.end('<H1>Uknown url path</h1><a href="/">Back home</a>')
})


server.listen(5000)