'use strict';


let tablebody = document.querySelector("#tablebody");

//js content
let books = [
    {title: "Frankenstein1", author:"Mary-Ann Shelly1", year: 1851, sold: 151},
    {title: "Frankenstein2", author:"Mary-Ann Shelly2", year: 1852, sold: 152},
    {title: "Frankenstein3", author:"Mary-Ann Shelly3", year: 1853, sold: 153}
];


for (const book of books) {
    let row = document.createElement("div");
    row.classList.add("trFluid");

    let group2 = document.createElement("div");
    group2.classList.add("trFluid_Grouping2");
    row.appendChild(group2);

    let group1a = document.createElement("div");
    group1a.classList.add("trFluid_Grouping1");
    group2.appendChild(group1a);

    let cont1 = document.createElement("div");
    cont1.classList.add("tdFluent");
    cont1.innerText=book.title;
    group1a.appendChild(cont1);


    let group1b = document.createElement("div");
    group1b.classList.add("trFluid_Grouping1");
    group2.appendChild(group1b);

    let cont2 = document.createElement("div");
    cont2.classList.add("tdFluent");
    cont2.innerText=book.author;
    group1b.appendChild(cont2);

    let cont3 = document.createElement("div");
    cont3.classList.add("tdFluent");
    cont3.innerText=book.year;
    group1b.appendChild(cont3);

    let cont4 = document.createElement("div");
    cont4.classList.add("tdFluent");
    cont4.innerText=book.sold;
    group1b.appendChild(cont4);


    tablebody.appendChild(row);
}
