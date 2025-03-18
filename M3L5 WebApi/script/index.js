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
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    artistList.appendChild(li);
  }
  

  const albumList = document.querySelector('#albums');
  _data = await _service.readAlbumsAsync(0, true, "love");
  console.log(_data);

  //set page size to read all albums in one go
  const nrItems = _data.dbItemsCount;
  _data = await _service.readAlbumsAsync(0, true, "love", nrItems);

  for (const item of _data.pageItems) {

    const li = document.createElement("li");
    li.innerHTML = `${item.name}`;
    albumList.appendChild(li);
  }


  _data = await _service.readAlbumAsync(_data.pageItems[0].albumId, false);
  console.log(_data);
  const albumDetail = document.querySelector('#albumDetail');
  albumDetail.innerHTML =  `${_data.name} by group ${_data.musicGroup.name} has sold ${_data.copiesSold} albums`;


})();


/* Exercise

1. Make a list of the first 10 artists
2. Make a list of the all the albums containing the work "love";
3. Read all the details of the 1st album above (ex 2)
*/


