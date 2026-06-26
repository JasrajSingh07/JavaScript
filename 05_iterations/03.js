// for of


const arr= [10,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings="hello world!"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }

// MAPS

const map = new Map()
map.set('IN',"Ondia")
map.set('US',"United states")
map.set('FR',"France")
map.set('IN',"Ondia")
console.log(map)

for (const element of map) {
    console.log(element);
}
// for (const [key,value] of map) {
//     console.log(key,':',value);
// }

const myobj={
     'game1':'NFS',
     'game2':'spiderman'
}

// for (const [key,value] of myobj) {
//     // console.log(key,':',value)//not iterable
    
// }