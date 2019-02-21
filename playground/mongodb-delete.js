
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected to MongoDB server");  

   db.collection('Todos').deleteMany({text: "Eat breakfast"}).then( (result) => {
       console.log(result);
   });   

   db.collection('Users').deleteMany({name: "Mihreta"}).then ( (result) => {
       console.log(JSON.stringify(result, undefined, 2));
   });
  
    //   db.collection('Users').findOneAndDelete({_id: new ObjectID("5c65858e4d24d52c9cd352b8")}).then( (result) => {
    //   console.log(result);
    //});
    
    // db.close();
}
);
