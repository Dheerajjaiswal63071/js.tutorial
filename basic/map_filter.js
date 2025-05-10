/*map() and filter() are both array methods in JavaScript that create new arrays based on the original array, but they serve different purposes:
map():
1-Transforms each element in the array.
2-Applies a function to every element in the original array and returns a new array containing the results.
3-The new array has the same length as the original array. 
4-Ideal for modifying or extracting data from each element.
filter():
1-Selects elements based on a condition.
2-Applies a function to each element and returns a new array containing only the elements for which the function returns true.
3-The new array typically has a length less than or equal to the original array.
4-Ideal for creating a subset of the array based on specific criteria.
Key Differences:
Feature
map()
filter()
Purpose
1-Transform each element
1-Select elements based on a condition
Output
2-New array with the same length
2-New array with elements that pass the test
Use Case
3-Modifying or extracting data from elements
3-Creating a subset of the array*/

const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using filter to get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce method
/*The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.*/
const num = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(num); // Output: 15

const bill=[
    {
        item:"rice",
        price:200
    },
      {
        item:"gram",
        price:202
    },
      {
        item:"dal",
        price:400
    }
]
const totalbill=bill.reduce((acc,item)=>acc+item.price,0);
console.log(totalbill);

