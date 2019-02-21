const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {ObjectID} = require('mongodb');

var id = '5c66af609eb26a442c8bd01011';

if(!ObjectID.isValid(id)) {
    return console.log("Invalid Object ID");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// }); //returns array of documents, if no document is found it returns empty array

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// }); //returns document if found, if not returns null

Todo.findById(id).then((todo) => {
    if(!todo) //if id is valid but not found in the database
     return console.log('Id not found');
    console.log('Todo', todo);
}).catch( (e) => console.log(e)); //if the id is invalid
