// const coding=["js","ruby","java","py","cpp"]

// const values = coding.forEach( (item)=>{
//     // console.log(item);
//     return item;
// });
// // for each never returns anything, it always returns undefined. So the values variable will be undefined.
// console.log(values);


const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newnums=mynums.filter( (item)=> item>4)
// filter returns a new array with the items that satisfy the condition. In this case, it will return a new array with the numbers greater than 4.
// console.log(newnums);

// const mmynums2=mynums.filter( (item)=>{
//     return item>4
// })

// console.log(mmynums2);


// const newnums=[]

// mynums.forEach( (item)=>{
//     if(item>4){
//         newnums.push(item)
//     }
// })
// console.log(newnums);

const books=[
    {
        title:"book1",
        genre:"fiction",
        publish:1999,
        rating:8.5
    },
    {
        title:"book2",
        genre:"non-fiction",
        publish:2005,
        rating:9.0
    },
    {
        title:"book3",
        genre:"fiction",
        publish:2010,
        rating:7.5
    }
]

const userbooks = books.filter( (bk)=> bk.genre=="fiction" )

const userbooks2 = books.filter( (bk1)=>{
    return bk1.publish>=2000
})
// console.log(userbooks);
console.log(userbooks2);