const express = require('express')
const app = express()
const port = 3000
const messages = require('./services/service')


app.get('/user', (req, res) => {
  res.send(messages.userObject())
})

app.get('/login', (req, res) => {
  res.send (messages.login(req.query.username))
})

app.get('/greeting', (req, res) => {
  res.send(messages.greetingObject(req.query.name, req.query.location))
})

app.get('/message', (req, res) => {
  res.send(messages.messageObject(req.query.msg))
})

app.get('/', (req, res) => {
  res.send(messages.helloWorld())
})

app.listen(port, () => console.log('Example app listening'))
