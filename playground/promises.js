

//var asyncAdd = setTimeout((x,y)=>{ return x+y; }, 1000)
function asyncAdd (x,y) { return x+y;}

function someFunc(x,y) {

     var res=asyncAdd(x,y);

  var promise = new Promise( (resolve, reject) => {
  if(res > 0) {
    resolve("Positive number"); 
}
  else {
    reject("Negative or a zero");
  } 
  });




  return promise;
}

var result=someFunc(5,7).then( (succesMessage) => {
    console.log(`Great, ${succesMessage}!`);
}, (failMessage) => {
    console.log(`Yikes, ${failMessage}.`);
});

console.log(result);

var {name} = { origin: "master", 
name: "teddy"};

console.log(name);