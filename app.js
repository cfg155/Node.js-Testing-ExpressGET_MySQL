const express = require('express')
const app = express()

const path = require('path')

app.use('/',express.static(path.join(__dirname,'public')))

// Get Data
const getData = require('./routes/getData')
app.use('/getData',getData)

app.listen(3000,()=>console.log('Connected to PORT 3000'))