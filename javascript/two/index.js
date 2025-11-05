// let obj1={
//     name:"suraj",
//     class:"ECE",
//     rollno:"007"
// };

// function add(obj){
//     return obj.year="2025";
// }
// add(obj1)
// console.log(obj)

// let obj2=[]
// function arr(add){
//      return add[0,1,3]=12;
// }
//  arr(obj2)
//  console.log(obj2)


// function addSquares(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }
// console.log(addSquares(2,2))



// function add(a,b){
//   function sqr(x){
//      return x*x;
//   }
//   return sqr(a)*sqr(b);
// }
// console.log(add(2,2))


// let obj={
//   name:"sagar",
//   class:"IT",
//    function(){
//     return `${this.name} ${this.class}`;
//    }
// }
// console.log()


//arrgument
// function add(a,b){
//   let c=a+b;
//   console.log(arguments)
//   return console.log("c:",c)
// }
// add(1,2,3,4,5)


//give the arr parameter :rest operator
//  let c= function(a,...add){
//   console.log(...add)
// }
// c(2,4,6,7,89)
// console.log(typeof c)

//default parameter
// function dad(a,b,c=10){
//   console.log(a+b+c)
// }
// dad(10,20)


let obj = {
  fname: "suraj",
  lname: "kumar",
  
  get fullname() {
    return `${this.fname} ${this.lname}`;
  },

  set fullname(value) {
    if (typeof value !== 'string') {
      throw new Error("you have not sent string");
    }
    let parts = value.split(" ");
    this.fname = parts[0];
    this.lname = parts[1];
  }
};

try {
  obj.fullname = true; // this will throw an error
}catch (error) {
  alert(error); // shows "you have not sent string"
}
finally{
  console.log("i will run every time")
}

console.log(obj.fullname); // Output: suraj kumar
