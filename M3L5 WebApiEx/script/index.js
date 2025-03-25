//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  

import musicService from'./music-group-service.js';

(async () => {

  //Initialize the service
  const _service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);

  //Read Database info async
  let data = await _service.readInfoAsync();

  //Some querySelectors (not all though) to help out
  const artistList = document.querySelector('#artists');
  const albumList = document.querySelector('#albums');
  const albumDetail = document.querySelector('#albumDetail');


})();


/* Exercise

1. Fill in the WebApi info with correct values from the WebApi, Music groups, Albums, Artists, read from  _service.readInfoAsync()
2. Make a list of page0 of the albums containing the word "love" - fill in as <li> in tag <ul id="albums"></ul>
3. Make a list of page0 of artists, with pagesize 10 - fill in as <li> in tag <ul id="artists"></ul>
4. Read all the details of the 1st album above (ex 3)
   <Album name> was made by the group <Musicgroup Name>
   fill it in the tag <p id="albumDetail"></p>
*/


