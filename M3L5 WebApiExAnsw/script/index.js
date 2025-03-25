//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  

import musicService from'./music-group-service.js';

(async () => {

  //Initialize the service
  const _service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);

  //Read Database info async
  let data = await _service.readInfoAsync();
  console.log(data);

  document.querySelector('#count-groups').innerText = `${data.db.nrSeededMusicGroups + data.db.nrUnseededMusicGroups} music groups`;
  document.querySelector('#count-albums').innerText = `${data.db.nrSeededAlbums + data.db.nrUnseededAlbums} albums`;
  document.querySelector('#count-artists').innerText = `${data.db.nrSeededArtists + data.db.nrUnseededArtists} artists`;

  const artistList = document.querySelector('#artists');
  let _data = await _service.readArtistsAsync(0);
  console.log(_data);
  for (const item of _data.pageItems) {

    const li = document.createElement("li");
    li.innerText = `${item.firstName} ${item.lastName}`;
    artistList.appendChild(li);
  }
  

  const albumList = document.querySelector('#albums');
  _data = await _service.readAlbumsAsync(0, true, "love");
  console.log(_data);

  for (const item of _data.pageItems) {

    const li = document.createElement("li");
    li.innerText = `${item.name}`;
    albumList.appendChild(li);
  }


  _data = await _service.readAlbumAsync(_data.pageItems[0].albumId, false);
  console.log(_data);
  const albumDetail = document.querySelector('#albumDetail');
  albumDetail.innerText =  `${_data.name} was made by the group ${_data.musicGroup.name}.`;


})();


/* Exercise

1. Fill in the WebApi info with correct values from the WebApi, Music groups, Albums, Artists, read from  _service.readInfoAsync()
2. Make a list of page0 of the albums containing the word "love" - fill in as <li> in tag <ul id="albums"></ul>
3. Make a list of page0 of artists, with pagesize 10 - fill in as <li> in tag <ul id="artists"></ul>
4. Read all the details of the 1st album above (ex 3)
   <Album name> was made by the group <Musicgroup Name>
   fill it in the tag <p id="albumDetail"></p>
*/


