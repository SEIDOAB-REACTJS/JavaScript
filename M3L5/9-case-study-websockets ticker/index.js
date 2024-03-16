//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers

//to see how to implement server  i C#
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_server   
//https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-6.0

//to see how to implement server  i java
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java

//Connection is now established
const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = event => {

  //recieved a new message
  const msg = JSON.parse(event.data);
  
  document.getElementById('wsCommand').innerHTML = msg.command;
  document.getElementById('wsTick').innerHTML = msg.tick;
};

function wsHello (event)  {
  socket.send(JSON.stringify({command:`hello`}));
};

function wsStart (event)  {
  socket.send(JSON.stringify({command:`start`}));
};

function wsStop (event)  {
  socket.send(JSON.stringify({command:`stop`}));
};


const btnHello = document.getElementById('sayHello');
const btnStart = document.getElementById('startTick');
const btnStop = document.getElementById('stopTick');

btnHello.addEventListener('click', wsHello);
btnStart.addEventListener('click', wsStart);
btnStop.addEventListener('click', wsStop);
