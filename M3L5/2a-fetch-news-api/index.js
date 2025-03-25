//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

const subscriptionKey = "256970bad92b4d5398613d17fcba4a7f";
const endpoint = "https://api.bing.microsoft.com/v7.0/news";

//url usage example
//${endpoint}?mkt=en-us&category=${category}

async function myFetch(url) {
  try {

    
    let res = await fetch(url, {
      headers: { 'content-type': 'application/json',  'Ocp-Apim-Subscription-Key': subscriptionKey}
    });
    
    if (res.ok) {

      console.log("Request successful");

      //get the data from server
      let data = await res.json();
      return data;
    }
    else {

      //typcially you would log an error instead
      console.log(`Failed to recieved data from server: ${res.status} - ${res.statusText}`);
      alert(`Failed to recieved data from server: ${res.status} - ${res.statusText}`);
    }
  }
  catch (err) {

    //typcially you would log an error instead
    console.log(`Failed to recieved data from server: ${err.message}`);
    alert(`Failed to recieved data from server: ${err.message}`);
  }
}

//Lets use myFetch. As it is an async method and I cannot have await at top level, I need to make trick.
//See analogy on making in C# main async
//I make main as an asych arrow function with immediate execution of syntax, (async() => {})();

(async () => {

  //Here I write all the code to be executed at script top level, c# main level
  const newsList = document.getElementById('results');
  const newsCategories = ['business', 'entertainment', 'world', 'sports', 'technology'];

  for (const category of newsCategories) {

    const uri = `${endpoint}?mkt=en-us&category=${category}`;
    const news = await myFetch(uri);

    console.log(news);

    //Create a header of the news category
    const newsCat = document.createElement('h2');
    newsCat.innerHTML = category;
    newsList.appendChild(newsCat);

    //create a categoryList
    const categoryList = document.createElement('ul');
    news.value.forEach(article => {
      const listItem = document.createElement('li');
      listItem.innerText = article.description;
      categoryList.appendChild(listItem);
    });
    newsList.appendChild(categoryList);
  }
})();
