'use strict'; 

let _currentPage = 0;
let _maxNrpages = 20;

const albumlist = document.querySelector("#albums");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

//Add event listeners
btnPrev.addEventListener("click", clickPrev);
btnNext.addEventListener("click", clickNext);

//Declare event handlers
async function clickPrev (e){

    if (_currentPage > 0 ) {
        _currentPage--;
        await renderAlbums(_currentPage);
    }
}

async function clickNext (e){
    if (_currentPage < _maxNrpages-1) {
        _currentPage++;
        await renderAlbums(_currentPage);
    }
}

//Helpers
async function renderAlbums(currentPage) {

  const url = `https://appmusicwebapinet8.azurewebsites.net/api/csAlbums/Read?flat=true&pageNr=${currentPage}&pageSize=10`;
  let data = await myFetch(url);

  while (albumlist.firstElementChild !== null) {
      albumlist.removeChild(albumlist.firstElementChild);
  }

  data.pageItems.forEach(item => {

      const li = document.createElement("li");
      li.innerText = item.name;
      albumlist.appendChild(li);
  });
}

async function myFetch(url) {
    try {
  
      let res = await fetch(url);
      if (res.ok) {
  
        console.log("Request successful");
  
        //get the data from server
        let data = await res.json();
        return data;
      }
      else {
  
        //typcially you would log an error instead
        console.log(`Failed to recieved data from server: ${res.status}`);
        alert(`Failed to recieved data from server: ${res.status}`);
      }
    }
    catch (err) {
  
      //typcially you would log an error instead
      console.log(`Failed to recieved data from server: ${err.message}`);
      alert(`Failed to recieved data from server: ${err.message}`);
    }
  }

//Page init
(async () => {

    const url = `https://appmusicwebapinet8.azurewebsites.net/api/csAdmin/Info`;
    let info = await myFetch(url);
    console.log(info);

    await renderAlbums(_currentPage);

}) ();



