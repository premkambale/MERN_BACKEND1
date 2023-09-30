// app file contain the Routes

// express is to provide set of features and middlewares like (express.json(), express.Router(); express.session()) etc.
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// routes that are exported in Routes/index.js;
const routes = require('./Routes');



// json() to convert HTTP Request body to JSON;
app.use(bodyParser.json());

// cors() allows Cross-Origin-Resourse-Sharing so that the resourse from this server can be shared or gain from another domain.
app.use(cors());

// use() methid to use all the routes that are created;
app.use('/', routes);

// export app
module.exports = app;