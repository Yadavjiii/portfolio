/*********************************************************************

let product =[
    {
        name:"ankush",
        lname:"saxena"
    },
    {
        name:"prateek",
        lname:"yadav"
    }
]
function count(value,index,array)
{
    console.log(value,index,array);
}
// function kap(callFun)
// {
//     for(let i = 0; i<product.length;i++)
//     {
//         let value = product[i]                     //map function reduce these steps
//         let index = i
//         let array = product
//         callFun(value,index,array)
//     }
// }
// kap(count)
product.map(count)

/******************************************************************************************/




// let users = [
//     {
//         name : "ganesh",
//         sname : "shankar",
//         age :30
//     },
//     {
//         name : "kartikey",
//         sname : "shankar",
//         age :35
//     },
//     {
//         name : "ashoksundari",
//         sname : "shankar",
//         age :25
//     },
// ]
// let age = users.map(function(value){
//     return value.age >=30
// })

// console.log(age);


// let users = [
//     {
//         name : "ganesh",
//         sname : "shankar",
//         age :30
//     },
//     {
//         name : "kartikey",
//         sname : "shankar",
//         age :35
//     },
//     {
//         name : "ashoksundari",
//         sname : "shankar",
//         age :25
//     },
// ]
// let age = users.filter(function(value,index,array){
//     return value.age >=30
    
// })
// console.log(age);