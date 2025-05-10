// We can declare objects in two ways:
// 1. Using object literals
// 2. Using a constructor (e.g., singleton pattern)

// Object literal example
let mysym = Symbol("key1");

let user = {
    name: "dheeraj jaiswal",
    [mysym]: "keyValue",
    id: 10,
    email: "dheeraj@123"
};

// Accessing properties
console.log(user.email);        
console.log(user["email"]);      
console.log(typeof user[mysym]); 

// Updating a property
user.email = "dheeru@123";
console.log(user);             


//Object.freeze(user);


user.id = 20;                   
console.log(user.id);    

user.greeting=function()
{
    console.log(`hello user id ${this.id}`);
}
console.log(user.greeting());