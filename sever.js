const express = require('express');
var mysql      = require('mysql');
var cors = require('cors')
app =express()
app.use(cors())
app.use(express.json())
 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Dream@123',
  database : 'form'
});
connection.connect();
// ======================get================================
// app.get('/',(req,res)=>{
//     connection.query('SELECT * from contact', function (error, results) {
//   if (error) {
//      console.log(error);
//   }
//   res.json(results)
//   });
//   })
  // ========================insert================================
app.post('/insert',(req,res)=>{
    connection.query('insert into contact (contactname,email,message) values(?,?,?)',[req.body.contactname,req.body.email,req.body.message],function (error, results) {
       if (error) {
           console.log(error);
       }
       res.json(results)
     });
  })
  // =====================update====================================
app.put('/update',(req,res)=>{
    connection.query('update contact set contactname=?,email=?,message=? where id=?',[req.body.contactname,req.body.email,req.body.message,req.body.id],function (error, results) {
       if (error) {
           console.log(error);
       }
       res.json(results)
     });
  })
  // ==================delete=======================
  app.put('/delete',(req,res)=>{
    connection.query('update contact set is_active=? where id=?',[req.body.is_active,req.body.id],function (error, results) {
      if (error) {
          console.log(error);
      }
      res.json(results)
  })  
});
// ================get=================
app.get('/get',(req,res)=>{
  connection.query('select * from contact where is_active=1 ',function (error, results) {
    if (error) {
        console.log(error);
    }
    res.json(results)
})  
});


//========================== port listening===================
app.listen(3000,()=>{

    console.log("listening port 3000")
    
    }) 