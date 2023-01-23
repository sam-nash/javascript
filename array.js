const numbers = [1, 2, 3, 4, 5]; //initialise an array with numbers
console.log("The numbers array initially contains : " + numbers);
numbers.push(6); //push one item to an array
console.log(
  "The numbers array now contains the newly added number : " + numbers
);
numbers.push(7, 8); //push multiple items to an array
console.log(
  "The numbers array now contains the newly added numberS : " + numbers
);

console.log("The length of an array is : " + numbers.length);
console.log(
  "The last element of the array is : " + numbers[numbers.length - 1]
);
console.log(numbers.slice(0, 4));
console.log(numbers.map((n) => n * 2));
console.log(numbers.filter((n) => n % 2 === 0));
console.log(numbers.find((n) => n % 2 === 0));
console.log(numbers.reduce((a, n) => a + n, 0));
