
    //Get Elements
    let list  = document.querySelector(`#itemList`);
    let btn = document.querySelector(`#btnColor`);
    let btnAdd = document.querySelector(`#btnAdd`);
    let btnClear = document.querySelector(`#btnClear`);

    //Add event listeners
    btn.addEventListener(`click`, btnClick);
    btnAdd.addEventListener(`click`, btnClickAdd);
    btnClear.addEventListener(`click`, btnClickClear);

    //Declare event handlers
    function btnClick (e)
    {
        list.classList.toggle(`list1`);
    }

    function btnClickAdd (e)
    {
        /*
        public class csPerson
        { 
            public string name {get; set;}
            public string city {get; set;}
        }

        var o = new csPerson(){name = "Martin", city = "Stockholm"};
        o.email = "martin@lenart.se";

        */
        let o = {name: "Martin", city:"Stockholm"};
        o.email = "martin@lenart.se";

        for (let index = 0; index < 5; index++) {

            let li = document.createElement(`li`);
            li.innerText = `${o.name} ${o.city} ${o.email} ${index}`;                
            list.appendChild(li);
        }
    }

    function btnClickClear (e)
    {
        while (list.firstElementChild !== null)
        {
            list.removeChild(list.firstElementChild);
        }   
    }
