let points = 50;
let winner = false;
if(points > 40) {
  let winner = true;
}

console.log(winner); // false
/////////////////////////////////////////

var points = 50;
var winner = false;
if(points > 40) {
  var winner = true;
}

console.log(winner);// true

/////////////////////////////////////////



function myFn() {
    var foo = 1;
    foo = 30;
    let foo = 101;
  
    console.log(foo);  // foo already declared 
  }
  
  myFn();

  ////////////////////////////////////////
  function myFn() {
    var foo = 1;
    foo = 30;
    var foo = 101;
  
    console.log(foo);  // 101
  }
  
  myFn();
///////////////////////////////////////////////////////

  function myFn() {
    let foo = 1;
    foo = 30;
    let foo = 101;
  
    console.log(foo);  // foo already declared
  }
  
  myFn();

  //////////////////////////////////////////////
  const myBoolean = true;

if (myBoolean) {
  const turtles = [
    'leonardo',
    'donatello',
    'michaelangelo',
    'raphael'
  ];
  // turtles = turtles.concat('Shredder');  // 🙅‍♀️ this would throw an error

  console.log(turtles);
}

console.log(turtles);


/////////////////////////////////////

const stu = {
    name:'danush'
}

stu['name'] = 'danu';// refrence can change
console.log(stu)
