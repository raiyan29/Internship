



 const express =require('express');
 var bodyParser = require('body-parser');
 var mongoose = require("mongoose");
  const url ='mongodb://localhost/raiyan'

  mongoose.connect(url,{useNewUrlParser:true})


  const app= express();
  var urlencodedParser=bodyParser.urlencoded({extended:false});
  const con= mongoose.connection;

  con.on('open',function(){
    console.log('Connected....')
  })
  
  app.get('/',function(req,res){
              
           res.render('index')
  });
  app.get('/sign-up',function(req,res){
    res.send(req.query)
});
  app.post('/form-done',urlencodedParser,function(req,res){

                res.render('form-done')
  });
  var port=process.env.PORT||9000;
      
  app.listen(port,function(req,res){

          console.log('Running....on'+port)
  });

  app.set('view engine','ejs');

  app.use(express.static('public'));
  
   