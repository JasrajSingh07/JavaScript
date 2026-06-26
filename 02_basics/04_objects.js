const tinder = new Object()


tinder.id="123ab"
tinder.name="sam"
tinder.isLoggedIn=false
// console.log(tinder);

const regularUser = {
    email:"some@thing",
    fullname:{
        userfullname: {
            firstname: "jasraj",
            lastname:"singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"} 
// const obj3 ={obj1 ,obj2}
// const obj3 =Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj1);



// console.log(obj3 );


const users =[
    {
        id:1,
        email:"abc@abc"
    },
    {
        id:2,
        email:"def@abc"
    }

]

// console.log(users[1].email);

// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('isLoggedIn'));



 const course = {
    coursename:"nodejs",
    price: "999",
    courseInstructor:"hitesh"
 }

// course.courseInstructor

const {courseInstructor: instrct} = course

console.log(instrct);
// {
//     "name":"jasraj",
//     "coursename":"js node",
//     "price":"free"
// }

[
    {},
    {},
    {}
]

