const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');

Todo.remove({}).then((result)=> {
  console.log(result);
}); //we get the number of items removed

Todo.findOneAndRemove().then((result)=> {
    console.log(result);
}); //we get the item that was removed as a result , just like findByIdAndRemove


