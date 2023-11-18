const number = 1234.765;

const anotherNum = number.toPrecision(5);
// toprecision() method will fixed the certain value of a number;

console.log(anotherNum);

//++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++

const randomNum = (Math.floor(Math.random()*10))+1;

console.log(randomNum);

//When max and min value present we can use following syntax.

const min = 10 ;
const max = 100 ;

const generatingNewNumberUsingMaxMin = (Math.floor(Math.random()*(max - min +1))) + min;

console.log(generatingNewNumberUsingMaxMin);