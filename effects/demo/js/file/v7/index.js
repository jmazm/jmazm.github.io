const http = require('http')
const fs = require('fs')
const formidable = require('./multipart_parser.js')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url

  if (url === '/') {

  } else if (url === '/upload') {
    new formidable(req, (fields, files) => {
      // 跨域
      res.setHeader('Access-Control-Allow-Origin', '*')

      if (files.files) {
        fs.writeFile('./newPic.png', files.files.data, (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
      
      res.write(JSON.stringify({
        fields: fields,
        files: files
      }))

      res.end()
    })
  }
})

server.listen(3000)