// // for
// for (let i = 0; i < 10; i++) {
//     if (i==5) {
//         console.log("5 is the best number");
        
//     }
//     console.log(i);
// }

// console.log(i);

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value:${i}`);
    
//     for (let j = 0; j <=10; j++) {
//         // console.log(`inner loop value: ${j} and outer loop value:${i}`);
//         console.log(i+'*'+j+'='+ i*j);
        
//     }
    
// }


// const arr=["flash","batman","spiderman","superman"]
// console.log(arr.length);

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }

// BREAK AND CONTINUE

for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log("detected 5 and didnt printed");
        continue
        
    }
    console.log(`value of i is ${i}`);
    
    
}

// for (let i = 1; i <=20; i++) {
//     if(i==5){
//         console.log("detected 5");
//         break
        
//     }
//     console.log(`value of i is ${i}`);
    
    
// }