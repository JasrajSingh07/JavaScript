function sayMyName(){
    console.log("j");
    console.log("a");
    console.log("s");
    console.log("r");
    console.log("a");
    console.log("j");
    
}

// sayMyName()

function addTwoNums(num1,num2){
    // let result =num1+num2
    // return result;    
    return(num1+num2)
}

const result=addTwoNums(3,5)
// console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("jasraj"));
// console.log(loginUserMessage());
 

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,300));

const user = {
    username: "jasraj",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"sam",
    price:39

})


const myNewArr =[200,300,400]

function returnSecondVal(getArr){
    return getArr[1]
}

// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([199,299,300]));
