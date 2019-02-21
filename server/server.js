require('./config/config.js'); 

var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');


var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');


var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    Todo.find().then( (todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
});


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

todo.save().then((doc) => {

    res.send(doc);
}, (e) => {
    res.status(400).send(e);
});
});


app.post('/users', (req, res) => {
  
   var body = _.pick(req.body, ['email', 'password']);
   var user = new User(body);

   user.save().then( () => {
       console.log("Usao u blok");
     user.testMethod();
     return user.generateAuthToken();
    
   }).then( (token) => {

       res.header('x-auth', token).send(user);
       
   }).catch((e) => {
   res.status(400).send(e);
       
   });

});


app.get('/todos/:id', (req, res) => {
   var id = req.params.id;

   if(!ObjectID.isValid(id)) {
       res.status(404).send();
   }

   Todo.findById(id).then( (todo) => {
       if(!todo) {
           res.status(404).send();
       }

       res.send({todo});
   }).catch( (err) => { res.status(400).send(); })
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then( (doc) => {
        if(!doc) {
            res.status(404).send();
        }

        res.status(200).send(doc);
    }).catch( (err) => {
          res.status(404).send();
     })
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
      }
      else {
          body.completed = false;
          body.completedAt = null;
      }

    Todo.findByIdAndUpdate(id, {$set : body}, {new: true}).then( (todo) => {
        if(!todo)
          return res.status(404).send();

        res.send({todo});
    }).catch( (err) => {
        res.status(400).send();
    });


})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = {app};




// var newTodo = new Todo({
//     text: "Cook dinner"
// });

// newTodo.save().then( (document) => {
//     console.log("Saved document", document);
// }, (err) => {
//     console.log("Unable to save document", err);
// });




