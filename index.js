const express = require('express')
const app = express()
const port = 3100
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.options('/greet', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.send('Hello greet!')
})
app.get('/greet', (req, res) => {
  res.send('hey')
})
app.post('/greet', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.send(`Hello,${req.body.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
