const express = require('express')
const app = express()
const port = 8888 

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World! This is a statidc server, try another URL /yourhtmlpage.html in the public folder')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
