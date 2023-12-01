const express = require('express')
const path = require('path')
const app = express()

app.get('/', function (req, res) {
  const filepath = path.join(__dirname, '../app/page.js')
  res.sendFile(filepath)
})

app.listen(3001)