const obj=new Object();// this is singleton object
//const obj1={}; // this is not singleton object
obj.id=10;
obj.name="dheeraj";
obj.isLogedIn=true;
//console.log(obj);
const student={
    name:{
     first:"dheeraj",
     last:"jaiswal"
    }
};
console.log(student.name.first)
// merge two object 
const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"a",5:"b",6:"c"};
//const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};
console.log(obj3);

const course={
    corseid:101,
    corsename:"this is javascript course",
    courseInstuctor:"dheeraj"
};
const {courseInstuctor:instuctor} =course
console.log(instuctor);
