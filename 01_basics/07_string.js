const name ="jasraj"
const repoCount= 50

// console.log(name+repoCount+"Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh_hc')

// console.log(gameName[0])
// console.log(name[0])
// console.log(name.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString=gameName.substring(0,4)
// console.log(newString);

const anotherString= gameName.slice(-8,4)//can also give negative values as well
// start = len-8 i.e 9-8=1
// end= 4(non inclusive)
// doesnt reverse
// console.log(anotherString);

const newStringOne = "   hitesh    "

// console.log(newStringOne);
// console.log(newStringOne.trim());

const url= "https://hitesh.com/hitesh%20choud"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'));

console.log(gameName.split('_'));




