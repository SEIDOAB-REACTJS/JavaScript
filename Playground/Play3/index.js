'use strict';

let myObj = {name: "Martin", phone: "123 12345"};
myObj.city = "Stockholm";

let pTag = document.querySelector("#greeting");
pTag.innerHTML = `<h1>Hello ${myObj.name}</h1><h2>Phonenr: ${myObj.phone}</h2>`;

let phoneTag = document.createElement("h3");
phoneTag.innerText = myObj.city;
pTag.appendChild(phoneTag);


let persons = ["Martin", "Christoffer", "Alexandra", "Jacob", "Alfons"];
let ulTag = document.querySelector("#namelist");

for (const element of persons) {
    
    let liTag = document.createElement("li");
    liTag.innerText = element;
    ulTag.appendChild(liTag);
}


const pTag1 = document.querySelector('p');
const pTags = document.querySelectorAll('main p');

for (const tag of pTags) {
    tag.classList.add("bg-color");
}
console.log(myObj);