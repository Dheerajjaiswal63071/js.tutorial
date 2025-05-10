//The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//Any value (both objects and primitive values) may be used as either a key or a value.
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2

/*const map=new Map();
map.set("IN","india");
map.set("USA","united state of america");
map.set("FR","france");
map.set("RS","rusia");

for(const [key,value] of map)
{
 console.log(key+"->"+value);
}*/

/*const arr=[1,2,3,4];
for(const i in arr)
{
    console.log(arr[i]);
}*/
 const obj={
    1:"dheeraj",
    2:"rahul",
    3:"adarsh",
    4:"hari"
 }
for(const key in obj)
{
    console.log(obj[key]);
}
