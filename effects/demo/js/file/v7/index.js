const http = require('http')
const fs = require('fs')
const StringDecoder = require('string_decoder').StringDecoder
const decoder = new StringDecoder()

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url


  if (url === '/') {
    const data = fs.readFileSync('./index.html')
    res.write(data)
    res.end()
  } else if (url === '/upload') {
    req.on('data', function (data) {
      console.log(JSON.parse(JSON.stringify(data)).data)
      decoder.write(new Buffer(JSON.parse(JSON.stringify(data)).data))

    })
  }
})

server.listen(8080)