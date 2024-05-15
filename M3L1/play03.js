'use strict';

let o = {firstname: 'Martin', lastname: "Lenart", age: '60', address: {city: 'Stockholm'}};

console.log('reference copy');
let p = o;
o.age = 40;
o.favoritecolor = 'blue';
o.address.city = 'Malmoe';
console.log(p);
console.log(o);

//shallow copy
console.log('shallow copy');
let q = {...o};
o.firstname = 'Harry';
o.age = 60;
o.address.city = 'Stockholm';

console.log(q, q.address.city);
console.log(o, o.address.city);

//deep copy
console.log('deep copy');
let r = {...o, address:{...o.address}};

r.address.city = "Gothenburg";
console.log(r, r.address.city);
console.log(o, o.address.city);

//simpler way to make deep copy that works at all levels
let tmp = JSON.stringify(o)
let s = JSON.parse(tmp);

s.address.city = "Gothenburg";
console.log(s, s.address.city);
console.log(o, o.address.city);