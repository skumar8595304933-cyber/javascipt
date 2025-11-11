
// let a1=performance.now()
// for(let i=0;i<=100;i++){
//   let newElement=document.createElement('p');
//   newElement.textContent="this is para" + 1;
  
//   document.body.appendChild(newElement)
// }
// let a2=performance.now()
// console.log("speed take by code a1:",(a1))
// console.log("speed take by code a2:",(a2))


// //

// let myDiv=document.createElement('div');
// function paraStatus(event){
//   console.log('i have clicked on para'+ event.target.textContent);
// };
// myDiv.addEventListener('click',paraStatus);

// for(let i=1; i<=100;i++){
//   let newElement=document.createElement('p');
//   newElement.textContent="this is para" + i;
//  myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv)

// ********************************************************************dom+model
//promise

// let merapromise= new Promise(function(resolve,reject){
//    console.log("run first resolve")
//    setTimeout(function(){
//       console.log("setimeout started");
//    },5000);
//    resolve(30000)
// })
//  let output=merapromise.then(()=>{
//    let waadaa2=new Promise(function(resolve,reject){
//       resolve("waada 2 resolved");
//    })
//    return waadaa2;
// }) 
// output.then(function(value){

//   console.log(value)
// })



//


// async function utility() {
//    let  delhimausam= new Promise((resolve,rejecet)=>{
//       setTimeout(() => {
//          resolve('delhi me bhot garmi hai');
//       }, 50000); 
//    });
//    let hydmausam=new Promise((resolve,rejecet)=>{
//       setTimeout(()=>{
//          resolve("hydrabad is cool")
//       },6000);
//    });
//    let dm=await delhimausam;
//    let hm=await hydmausam;

//    return [dm,hm];
// }


///////////////////////////////fetch api/////////////



async function utility() {
   const api=await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let output=await api.json();
   console.log(output)
}

utility()













