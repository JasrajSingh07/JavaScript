const mynums=[1,2,3]

// const sum=mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)


const sum=mynums.reduce((acc,curr)=>acc+curr,0)
console.log(sum)


const shoppingcart=[
    {
        itemname:"js course",
        price:299
    },
    {
        itemname:"python course",
        price:399
    },
    {
        itemname:"java course",
        price:499
    }
]

const total = shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(total)