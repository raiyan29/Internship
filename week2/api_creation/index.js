

var express = require('express');

var port=process.env.PORT||9000;
var app=express();
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static('public'));
app.listen(port);
app.get('/api/mydb'
,function(req,res){
           res.send(mydb);
})
app.get('/api/mydb/:id'
,function(req,res){
         const myd= mydb.find(c=> c.id === parseInt(req.params.id))
           if(!myd){

            res.status(404).send("The person u r looking for doesnt exist");
           }
           res.send(myd);
})
app.post('/api/mydb',function(req,res){

     if(!req.body.name||req.body.name.length < 3){

                res.status(400).send("Name is required and shud be minimum 3 characters")
                return
     }

         const myd ={
             id: mydb.length +1,
             name:req.body.name

         };
         mydb.push(myd);
         res.send(myd);
})

  app.put('/api/mydb/:id',function(req,res){

    const myd= mydb.find(c=> c.id === parseInt(req.params.id))
    if(!myd){

     res.status(404).send("The person u r looking for doesnt exist");
     return;
    }
    if(!req.body.name||req.body.name.length < 3){

        res.status(400).send("Name is required and shud be minimum 3 characters")
        return
}
       myd.name=req.body.name;
       res.send(mydb);

         
  })
  app.delete('/api/mydb/:id',function(req,res){
    const myd= mydb.find(c=> c.id === parseInt(req.params.id))
    if(!myd){

     res.status(404).send("The person u r looking for doesnt exist");
     return;
    }
        const index = mydb.indexOf(myd);
               mydb.splice(index,1);
               res.send(mydb);


  })

  let mydb=[
        
    {
        id:1,name:'Raiyan',age:22,gender:"Male",Designation:"Clerk"
    },
    {
        id:2,name:'Dhruv',age:30,gender:"Male",Designation:"CTO"
    },
    {
        id:3,name:'Rai',age:32,gender:"Male",Designation:"peon"
    }

  ];

app.get('/',function(req,res){
         
         res.render('index')


})



