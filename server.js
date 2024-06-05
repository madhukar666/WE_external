
const http  = require('http')
const fs = require('fs')

const PORT = 3000

const server = http.createServer((req,res)=>{

    res.writeHead(200,'OK',{'content-type' :"text/html"})
    const html = fs.readFileSync('index.html').toString()
    res.write(html)
    res.end()
})

server.listen(PORT,'localhost',()=>console.log(`Listening on PORT : ${PORT}`))