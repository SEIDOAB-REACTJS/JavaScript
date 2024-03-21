//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  

import musicService from'./music-group-service.js';

(async () => {

  //Initialize the service
  const _service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);

  //Read Database info async
  let data = await _service.readInfoAsync();
  console.log(data);

  document.querySelector('#count-groups').innerText = `${data.nrSeededMusicGroups + data.nrUnseededMusicGroups} music groups`;
  document.querySelector('#count-albums').innerText = `${data.nrSeededAlbums + data.nrUnseededAlbums} albums`;
  document.querySelector('#count-artists').innerText = `${data.nrSeededArtists + data.nrUnseededArtists} artists`;
})();

