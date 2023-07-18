const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our homepage')
    return
  }
  if (req.url === '/about') {
    res.end('this is about page')
    return
  }
  res.end(`
 <h1>Oops!</h1> 
 <p>we cant find the page you are looking for</p>
 <a href="/">back home</a>
 `)
})
server.listen(5000)
