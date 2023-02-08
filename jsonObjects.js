const user = {
  id: 1,
  name: 'Elmira',
  gender: 'Female',
  email: 'epratley0@usa.gov',
  status: 'active',
};

//extract values from json objects or arrays and assign to variables
const { id, name, gender, email, status } = user;
console.log(id, '\n', name, gender, email, status);

//usage of template literals than string concatenation
console.log(`This is ${name}'s status: ${status}`);

const details = {
  id: 2,
  isPrimary: true,
  isSecondary: null,
};

const combined = {
  ...user,
  ...details,
  ...{ new: 'old' },
};

console.log(combined);
