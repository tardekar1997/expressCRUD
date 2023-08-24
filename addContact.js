const express = require('express');
const routers = express.Router();

const dbConnection=require('./dbConn');

routers.post('/',(req, res) =>{
    const {name, phonNo} = req.body;

        const insertNameQ = 'insert into names (name) values (?)';
        dbConnection.query(insertNameQ,[name],(nameErr,nameRes)=>{
            if (nameErr) {
                console.error('error inserting name :',nameErr);
        }else {
                console.log('name added :',nameRes);
                const insertphonNoQ = 'insert into phones (namesId, phonNo) values (?, ?)';
                const namesid1 = nameRes.insertId; // Capture the generated namesid

                dbConnection.query(insertphonNoQ, [namesid1, phonNo],
                     (phonerr,phonres)=>{
                        if (phonerr){
                            console.error('phon nuber dding failed :',phonerr);
                        }
                        else {
                            console.log('Contact added successfully:', nameRes, phonres);
                        }
                        });
                    } 
                });       
        });
        module.exports=routers;
