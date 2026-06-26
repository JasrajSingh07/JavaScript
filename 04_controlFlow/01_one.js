// // if
// const isUserLoggedIn =true
// const temperature =41

// if(temperature<50){
//     console.log("less than 50");
    
// }
// else {
//     console.log("greater than 50");
// }
// if(isUserLoggedIn){

// }
 
// if(3!=2){

// }

// <, >, <=, >=, ==, !=, ===

// if(2!=="2"){
//     console.log("execute it");
    
// }

// const score =300

// if(score>100){
//     const power ="fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)


// const balance =1000
// // if (balance>500) console.log("test");

// if (balance<500) {
//     console.log("less than 500");
    
// } else if (balance<750) {
//     console.log("less than 750");

// } else if (balance<900) {
//     console.log("less than 900");
    
// }else console.log("less than 1200");


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle =false
const loggedInFromEmail= true
if (userLoggedIn && debitCard ) {
    console.log("allowed to shop");    
}

if(loggedInFromEmail||loggedInFromGoogle) console.log("user logged in ");
  