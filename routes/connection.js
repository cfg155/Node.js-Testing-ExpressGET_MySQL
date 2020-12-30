const mysql = require('mysql')

const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'datadummy'
})

connection.connect((err)=>{
    if(err) throw err
    else {
        console.log('MySQL Connected')
    }
})

module.exports = connection