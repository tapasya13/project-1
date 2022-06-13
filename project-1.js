// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after multiplying it by ten
  // code here
  return num*10;
};

const subtractFive = (num) => {
  // return num after subtracting five
   console.log(num-5);
};
subtractFive(10);


const areSameLength = (str1, str2) => {
  // return true if the two strings have the same length
  if(str1.length===str2.length) {
    return true;
  }else{
      return false;
    };
    
  };
  let a = areSameLength("qwerty","qwerty");
  console.log(a);


function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if(x===y){
    return true;
  } else{
    return false;
  };
};
let b = areSameLength("mini","mni");
console.log(b);

const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  if(num<90){
    return true
  } else{
    return false;
  }
};
let c=lessThanNinety(50);
console.log("lessThanNinety " +c);
//lessThanNinety(100);

function greaterThanFifty(num) {
   //return true if num is greater than fifty
   //otherwise return false
  if(num>50){
    console.log(true);
  } else{
    console.log(false);
  };
};
greaterThanFifty(90);





const add = (x, y) => {
   //add x and y together and return the value
  console.log(x,y)
};
add(10+20);

const subtract = (x, y) => {
  // subtract y from x and return the value
  console.log(x,y)
};
subtract(20-10);


const divide = (x, y) => {
  // divide x by y and return the value
  console.log(x,y)
};
divide(10/10);

const multiply = (x, y) => {
  // multiply x by y and return the value
  console.log(x,y)
};
multiply(10*1);

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
   console.log(x,y)
};
getRemainder(5%10);

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  if(num%2===0){
    return true;
  }else{
    return false;
  }
  
};

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  if (num !=0) {
    return true;
  }else{
    return false;
  }
};

const square = (num) => {
  // square num and return the new value
  console.log(num*num)
};
square(4);

const cube = (num) => {
  // cube num and return the new value
  // code here
};

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  // code here
};

const roundNumber = (num) => {
  // round num and return it
  // code here
};

const roundUp = (num) => {
  // round num up and return it
  // code here
};

const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
};

const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
};

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
};

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  // code here
};

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  // code here
};

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  // code here
};

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
