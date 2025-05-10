let arr=[1,2,4,5,6];
let arr1=[10,12,26,15];
//arr.push(arr1);
//console.log(arr);
let arr2=arr.concat(arr1);
console.log(arr2);
// sprid 
let arr3=[...arr,...arr1,...arr2];
console.log(arr3);
let a=[1,2,[3,4,5,[6,3,7],5],9];
console.log(a.flat(Infinity));
let name="dheeraj";
console.log(Array.from(name));
console.log(name);
let score1=100;
let score2=100;
let score3=100;
console.log(Array.of(score1,score2,score3));

