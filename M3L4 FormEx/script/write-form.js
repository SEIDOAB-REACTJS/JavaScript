
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

    //Complete code here to update the data with form data (GroupName and Established year) and write update to WebApi

  });

(async () => {

  //Read first page of groups
  let data = await _service.readMusicGroupsAsync(0);  //choose between 0..10

  //Complete code here to read first music group and set default data to the form

  //Set groupId.value to the musicGroupId of the selected group, then you can always read it back later

})();


/* Exercises
1. Write code to set default GroupName and Established year from one music group
2. Write code to update the music group data on the webapi
3. Review the code in ./M3L4 FormEx/script/seido/validate.js   
   - can you explain what it does on a general level
   - try removing the script tag for validate.js and see what happens

Hint: You can see how to access and update the WepAip using the Service at
      ./M3L5/2d-fetch-musicService
*/
