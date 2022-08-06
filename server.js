// Setup empty JS object to act as endpoint for all routes
projectData = {};
/* Dependencies */
// Require Express for  runing  server and routes
const express = require("express");

// makkinf an instance of app
const app = express();

// requring cors( cross origin allowance )
const cors = require("cors");

//giving rpemmission to  Cors Requests
app.use(cors());

const bodyParser = require("body-parser");

/* Middleware*/
//using  body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// penetratin the frontend folder
app.use(express.static("website"));

// Setingup the Server.
const port = 3030;
const hostName = "localHost";

//listening to the port
const server = app.listen(port, () => {
  console.log(`Server is running on ${hostName}: ${port}`);
});

// GET route  that returns the projectData
app.get("/allData", (request, response) => {
  response.send(projectData);
});

// POST route that adds incoming data to projectData
app.post("/postingPath", (request, response) => {
  projectData = request.body;
  console.log(projectData);
  response.send(projectData);
});
