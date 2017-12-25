const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url

  if (url === '/') {
    const data = fs.readFileSync('./index.html')
    res.write(data)
    res.end()
  } else if (url === '/upload') {
    req.on('data', (data) => {
      console.log(data)
      res.write(data)
      res.end()
    })
  }
})

server.listen(8080)