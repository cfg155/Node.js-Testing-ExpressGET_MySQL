const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('hi kel')
})

app.listen(3000,()=>console.log('Connected to PORT 3000'))