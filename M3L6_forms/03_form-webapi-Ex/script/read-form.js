//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode
import musicService from'./music-group-f-service.js';

const groupName = document.querySelector('#groupName');
const established = document.querySelector('#established');

//Initialize the service
const _service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);


(async () => {

  //Read first page of groups
  let data = await _service.readMusicGroupsAsync(0);  //choose between 0..10

  //Complete code here to read first music group and set default data to the form

})();

/* Exercises
1. Write code to set default GroupName and Established year from one music group

Hint: You can see how to access and update the WepAip using the Service at
      ./M3L5/2d-fetch-musicService
*/
