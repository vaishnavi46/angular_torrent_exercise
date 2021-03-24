const express = require('express');
const app = express()
const mongoose = require('mongoose');
const config=require('./config/database');
const path=require('path');

mongoose.Promise=global.Promise;
mongoose.connect(config.uri, (err)=>{
      if(err)
      {
            console.log('could not connected to db:',err);
      }
      else
      {
            console.log('connected to db:'+config.db);
      }
});

app.use(express.static(__dirname+'/mean-client/dist/mean-client'));
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname+'/mean-client/dist/mean-client/index.html')); 
  });
  
  app.listen(5005,()=>{
        console.log('Listening on port 5005');
  });