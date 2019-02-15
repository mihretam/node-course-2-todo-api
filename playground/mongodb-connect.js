//load in the library and connect to the database

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected to MongoDB server");  

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.collection('Users').insertOne({
        name: "Mihreta",
        age: 21,
        location: "Tuzla"
    }, (err, result) => {
        if(err) {
          return console.log("Unable to insert user", err);
        } 
        
        console.log(JSON.stringify(result.ops, undefined, 2));
     });


    db.close();
});