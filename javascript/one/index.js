// function srj(a,b){
//   return sum={
//     num1:a,
//     num2:b,
    
//   }
// }

// let fun=srj(2,4);
// fun.add="color";
// delete fun.num1

// console.log(fun);
 
//
// ***************************************
//refrence
// let a={value:10};
// let b=a;
// a.value++;
//  console.log(a.value)
//  console.log(b.value)
 

 //copy
//  let a=10;
//  let  b=a;
//  a++;
//  console.log(a)
//  console.log(b)
// *****************************************
//for in
// let obj={
//     len1:30,
//     len2:40,
//     len3:60
// };
// // for(let key in obj){
// //     console.log(key,obj[key])
// // }

// //for of
// for(let key of Object.entries(obj)){
//     console.log(key)
// }

//*********************************************** */

// let a={name:suraj}
// let b=a;
// console.log(b)

//*********************************
//cloninig

//first clone:
// let src={
//     a:10,
//     b:20,
//     c:30,
//     d:400
// }
// let des={};
// for(let key in src){
//     des[key]=src[key];    
// }
// console.log(des) 

//sec clone

// let src={
//     a:123,
//     b:304,
//     c:450
// }
// let src1={value:"suraj"}

// let des=Object.assign(src,src1)
// console.log(des)

// *********************************************function


//*declerative function
// function sum(){
//     return console.log("declerative function")
// }
// sum()


// *named function
// let a=function num(a,b){
//     return console.log(a+b);
// }

//*annomias function
let a=function(a,b){
    console.log(a+b);
    for(let value of arguments){
        console.log("=",value)
    };
}
a(2,4,3,4,5);
