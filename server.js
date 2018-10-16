var express = require('express');
var bodyParser = require('body-parser');
var api = require('./serverApis.js/usersApi')
const app = express();
// const dbConnect = require('./dataAccess/userModel.js')
// const Sequelize = require('sequelize')
// const { User, ChildrenParents} = require('./dataAccess/userModel')
const SERVER_PORT = (8100);

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', api);

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});