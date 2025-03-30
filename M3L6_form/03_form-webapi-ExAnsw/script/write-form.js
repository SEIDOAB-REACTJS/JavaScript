
//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode
import musicService from'./music-group-f-service.js';

//https://developer.mozilla.org/en-US/docs/Web/API/FormData

const formValidate = document.querySelector('#formValidate');
const groupId = document.querySelector('#groupId');
const groupName = document.querySelector('#groupName');
const genre = document.querySelector('#genre');
const established = document.querySelector('#established');

//Initialize the service
const _service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);

formValidate.addEventListener('submit', async event => {
  event.preventDefault();
 
    let data = await _service.readMusicGroupDtoAsync(groupId.value)

    //this allows me to check all values individually
    let [gn, e] = [groupName.value, established.value];

    data.name = gn;
    data.establishedYear = e;

    data = await _service.updateMusicGroupAsync(groupId.value, data)
});

(async () => {

  //Read first page of groups
  let data = await _service.readMusicGroupsAsync(0);

  //Read first group in the page
  data = await _service.readMusicGroupAsync(data.pageItems[0].musicGroupId);

  //set the values
  [groupId.value, groupName.value, established.value] = [data.musicGroupId, data.name, data.establishedYear];

})();
