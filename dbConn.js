const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database : 'crud_express'
})

conn.connect((error)=>{
    if(error){
        console.error('connection failed: ' + error);
    }
    else {
        console.log('connected successfully to database');
    }
});

module.exports =conn;