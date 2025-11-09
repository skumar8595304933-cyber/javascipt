
let a1=performance.now()
for(let i=0;i<=100;i++){
  let newElement=document.createElement('p');
  newElement.textContent="this is para" + 1;
  
  document.body.appendChild(newElement)
}
let a2=performance.now()
console.log("speed take by code a1:",(a1))
console.log("speed take by code a2:",(a2))


//

let myDiv=document.createElement('div');
function paraStatus(event){
  console.log('i have clicked on para'+ event.target.textContent);
};
myDiv.addEventListener('click',paraStatus);

for(let i=1; i<=100;i++){
  let newElement=document.createElement('p');
  newElement.textContent="this is para" + i;
 myDiv.appendChild(newElement)
}
document.body.appendChild(myDiv)