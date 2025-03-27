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

//Start the server by opening a terminal in /case-study-server and type node simple-json.js

//required node library
const path = require('path');
const fs = require('fs');

const express = require('express');
const formidable = require('formidable');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

//Midleware in express.js to read json body
app.use(express.json());


//location of the json files
const appDir = './app_data';

app.get('/api/download', (req, res) => {

  response = readJSON('json_data.json');
  res.send(response);
});

app.post('/api/upload', (req, res) => {
  
    console.log("recieved");
    const b = req.body;

    writeJSON('json_data.json', b);
    console.log(b);
  //respons with the json file
  res.json(b);
});


//Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


//helper functions to read and write JSON
function writeJSON(fname, obj) {
  const appDataDir = path.normalize(path.join(__dirname, appDir));

  if (!fs.existsSync(appDataDir))
    fs.mkdirSync(appDataDir);

  fs.writeFileSync(path.join(appDataDir, fname), JSON.stringify(obj));
}

function readJSON(fname) {
  const appDataDir = path.normalize(path.join(__dirname, appDir));
  obj = JSON.parse(fs.readFileSync(path.join(appDataDir, fname), 'utf8'));
  return obj;
}