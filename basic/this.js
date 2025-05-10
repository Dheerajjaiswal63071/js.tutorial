//The ‘this keyword’ in JavaScript refers to the object to which it belongs.
//  Its value is determined by how a function is called, making it a dynamic reference. 
// The ‘this’ keyword is a powerful and fundamental concept used to access properties and methods of an object,
//  allowing for more flexible and reusable code.

const user={
    name:'dheeraj',
    pass:"123@",
    message: function(){
      console.log(`welcome ${this.name}`);
      console.log(this);
    }
}
user.message();
console.log(this);
function one(){
    console.log(this);
}
one();
const a=()=>{
    console.log(this);
}
a();
