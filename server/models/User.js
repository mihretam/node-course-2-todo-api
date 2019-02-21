const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');


var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
        validator: validator.isEmail,            
        message: '{VALUE} is not a valid mail!' 
    }},
    password: {
    type: String,
    required: true,
    minlength: 6
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]

});

var User = mongoose.model('User', UserSchema);

UserSchema.methods.generateAuthToken = function () {
  console.log("uso");
  
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  console.log('token', token);
  
  user.tokens = user.tokens.concat([{access, token}]);
  
  console.log(user.tokens[0]);
  
  return user.save().then( () => {
    
    return token;
  }); 
};

UserSchema.methods.testMethod = function () {
  console.log("test fja");
};
module.exports = {User, UserSchema};

// validate: {
//     validator: (value) => {
//     return validator.isEmail(value);
//     },
//     message: `${value} is not a valid mail!` 
// } another way 