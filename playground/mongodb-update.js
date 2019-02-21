
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected to MongoDB server");  

    db.collection('Todos').findOneAndUpdate(
     { _id: new ObjectID("5c65545a42f6452b2482b574")}, 
    { $set: {
        completed: true
    } }, 
    {
        returnOriginal: false
    }).then( (result) => { 
        console.log(result);
    });

    
    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID("5c6585939f00532af0b52158")}, 
        {  $set: {
             name: "Mihreta"
             },
           $inc: {
               age: 1
           }
    
       }, 
       {
           returnOriginal: false
       }).then( (result) => { 
           console.log(result);
       });
  
    
//    db.close();
}
);
