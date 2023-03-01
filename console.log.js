//These examples were taken from Ram Maheshwari's Linkedin Posts

const axios = require('axios');
//Print JS Object as a table
const users = [
  {
    id: 681949,
    name: 'Annetta',
    email: 'Heaven1@mydearmail.com',
    gender: 'male',
    status: 'active',
  },
  {
    id: 681951,
    name: 'Rowena',
    email: 'Abe1@mydearmail.com',
    gender: 'female',
    status: 'inactive',
  },
];

console.table(users);

//Prints values and properties
const user = {
  id: 681953,
  name: {
    firstName: 'Cristian',
    lastName: 'Slater',
  },
  email: 'Francesca1@mydearmail.com',
  roles: ['Manager', 'Supervisor'],
  gender: 'male',
  status: 'inactive',
  isEmployee: true,
};

console.dir(user);

//Time to get an url
console.time('fetched');
axios
  .get('https://www.linkedin.com/feed/')
  .then(() => console.timeEnd('fetched'));

//Assert
const addition = (x, y) => {
  return x + y;
};

const result = addition(3, 5);
console.assert(result === 9, 'Expected Result is', 9);
console.assert(1 === 1, 'yes'); //This doesn't print anything as the expression evaluated to true

//Count the number of times code was executed
for (let i = 0; i < 5; i++) {
  console.count('Iteration');
  // do something else
}

function test(msg) {
  console.count(msg);
  //console.log(msg);
}

test('hello');
test(1);
test(true);
test({ name: 'sam', email: 'sam@sam.com' });
test(null);
test('hello');
test('hello');

//Clear the console
//console.clear();

//Group messages
console.group('1');
console.log('1.1');
console.log('1.2');
console.group('1.3');
console.log('1.3.1');
console.log('1.3.2');
console.groupEnd();
console.groupEnd(); //END the group twice to so that it doesn't start a new group under 1.3
console.group('2');
console.log('2.1');
console.log('2.2.1');
console.groupEnd();
