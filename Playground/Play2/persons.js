let person = {fn: 'Martin', ph: '123456'};

let persons =[{...person}, {...person}, {...person}];

persons[0].ph = "789101112";
console.log(persons);
console.log(persons);
