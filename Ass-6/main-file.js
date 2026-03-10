const http = require ('http')
const fs = require ('fs')
const path = require('path')

const PORT = 3000;

const webServer = http.createServer((req,res) =>{

    const {url} = req;

    if(url === '/' || url === '/home'){
        fs.readFile("./assets/home.html" , (err , data) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

    else if(url === '/about'){
        fs.readFile("./assets/about.html", (err , data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

    else if(url === '/contact'){
        fs.readFile("./assets/contact.html", (err , data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

    else if(url.startsWith('/css/')){

        fs.readFile("./assets" + url, (err,data) => {
            if(err){
                res.writeHead(404);
                res.write('file not found');
                res.end();
            } else {
                res.writeHead(200, {'content-type': 'text/css'});
                res.write(data);
                res.end();
            }
        })
        console.log(url);
    }

    else{
        fs.readFile("./assets/404.html", (err , data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
})

webServer.listen(PORT, () =>{
    console.log(`Server Start: http://localhost:${PORT}`)
})