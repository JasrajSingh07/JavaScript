// Singleton
// Object.create()


// object literals

const mySym = Symbol("keys1")
const JsUser = {
    name:"Jasraj",
    "full name":"Jasraj Singh",
    [mySym]:"mykey1",
    age: 21,
    location:"mansa",
    isLoggedIn: false
}

// console.log(JsUser.age);
// console.log(JsUser["full name"]);
// console.log(JsUser["age"]);
// console.log(typeof JsUser[mySym]);


JsUser.age=22
// Object.freeze(JsUser)
JsUser.age=43
// console.log(JsUser);
 

JsUser.greeting = function(){
    console.log("hello js user");
    
}

JsUser.greeting2 = function(){
    console.log(`hello js user ${this["full name"]}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

