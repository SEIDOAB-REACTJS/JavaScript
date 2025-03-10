'use strict';

let o = {firstname: 'Martin', lastname: "Lenart", age: '60', address: {city: 'Stockholm'}};

console.log('reference copy');
let p = o;
p.age = 40;
p.favoritecolor = 'blue';
p.address.city = 'Malmoe';
console.log(o);
console.log(p);

//shallow copy, both persons moved to Stockholm
console.log('shallow copy');
let q = {...o};
q.firstname = 'Harry';
q.age = 60;
q.address.city = 'Stockholm';

console.log(o, o.address.city);
console.log(q, q.address.city);


//deep copy, alla properties are copied, including address
console.log('deep copy');
let r = {...o, address:{...o.address}};

r.address.city = "Gothenburg";
console.log(o, o.address.city);
console.log(r, r.address.city);


//simpler way to make deep copy that works at all levels
let tmp = JSON.stringify(o)
let s = JSON.parse(tmp);

s.address.city = "Gothenburg";
console.log(o, o.address.city);
console.log(s, s.address.city);
