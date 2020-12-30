const express = require('express')
const route = express.Router()

// getConnection
const connection = require('./connection')

route.route('/')
    .get((req,res) => {
        let sql = 'SELECT * FROM personal_data'
        connection.query(sql,(err,rows) => {
            if(err) throw err
            else {
                res.json(rows)
            }
        })
    })

module.exports = route