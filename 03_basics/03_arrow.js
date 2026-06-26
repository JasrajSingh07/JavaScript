const user = {
    username:"jasraj",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }
}

// user.welcomeMessage()

// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username= "JASRAJ"
//     console.log(this.username``);
    
// }

// chai()

const chai = ()=>{
    let username="jasraj"
    console.log(this);
    

}


// chai()

// const addTwo = (num1,num2) =>  num1+num2
// const addTwo = (num1,num2) =>  (num1+num2)
const addTwo = (num1,num2) =>  ({username:"jasraj"})



console.log(addTwo(1,2));
  

