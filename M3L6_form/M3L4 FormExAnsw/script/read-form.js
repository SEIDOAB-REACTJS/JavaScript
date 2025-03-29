//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode
import musicService from'./music-group-f-service.js';

const groupName = document.querySelector('#groupName');
const established = document.querySelector('#established');

//Initialize the service
const _service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);


(async () => {

    //Read first page of groups
    let data = await _service.readMusicGroupsAsync(0);

    //Read first group in the page
    data = await _service.readMusicGroupAsync(data.pageItems[0].musicGroupId);

    //set the values
    [groupName.value, established.value] = [data.name, data.establishedYear];

})();
