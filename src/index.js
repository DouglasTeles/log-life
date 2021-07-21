const express = require("express");
const api = express();
require("dotenv").config();
const cors = require('cors')
const routes = require("./routes");


api.use(cors())

api.use(express.json());
require("./app/database");


api.use(routes);



api.listen(3333, (req, res) => {
  console.log("API running");
});
