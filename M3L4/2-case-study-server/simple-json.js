//super simple server using expressjs

//Install expressjs for running a small server

//https://expressjs.com/en/starter/hello-world.html
//https://expressjs.com/en/starter/installing.html

//in your webapplication project's server directory open a terminal
//install package.json using 'npm init -y'
//install validator using npm install express
//Now you should have two json files, and a node modules directory: node_modules, package-lock.json, package.json

//install cors
//https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/

//install formidable
//https://www.npmjs.com/package/formidable


//Start the server by opening a terminal in /case-study-server and type node simple-json.js

//required node library
const path = require('path');
const fs = require('fs');

//from the downloaded npm
const express = require('express');
const cors = require('cors');

//init express
const app = express();
const port = 3000;
//init cors
app.use(cors({
    origin: '*'
}));

app.get('/api/download', (req, res) => {

  response = readJSON('json_data.json');
  res.send(response);
});

app.post('/api/upload', (req, res) => {

    const b = req.body;

    writeJSON('json_data.json', b);

  //respons with the json file
  res.json(b);
});


//Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


//helper functions to read and write JSON
function writeJSON(fname, obj) {
  const appDataDir = path.join(__dirname, `app_data`);
  fs.writeFileSync(path.resolve(appDataDir, fname), JSON.stringify(obj));
}

function readJSON(fname) {
  const appDataDir = path.join(__dirname, `app_data`);
  obj = JSON.parse(fs.readFileSync(path.resolve(appDataDir, fname), 'utf8'));
  return obj;
}