const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '1234bca';
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
      console.log(hash)
  });
});

 var hashedPassword = '$2a$10$xKf7jUN5E8kQKxYGJEG1YO86XLqFSok6ZFng33IptqZYLRdvyHLHa';

bcrypt.compare(password, hashedPassword, (err, res) => {console.log(res)});
















// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc'); // 123abc is the secret salt to hash

// var decoded = jwt.verify(token, '123abc'); //we only get the data back if the token and the secret were unchanged

// console.log(decoded);

// var message = "I am user num3";
// var hash = SHA256(message).toString();

// console.log(`Message ${message}`);
// console.log(`HASH : ${hash}`); 

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(token.hash === resultHash) {
//     console.log("Data was not changed");
// } else {
//     console.log("Data was changed");
// }