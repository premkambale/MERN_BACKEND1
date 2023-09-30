 // This file is to connect database and server configuration

// mongoose is library for mongodb and node allows you to define schemas and queries and manage the relationship between datas
const mongoose = require('mongoose');
const app = require('./app');

// dotenv to configure env file into project
const dotenv = require('dotenv/config');
const port = process.env.PORT || 3000;
const con_url = process.env.DB_CONNECTION;
const colors = require('colors');

var server;
mongoose
  .connect(con_url)
  .then((res) => {
    console.log('mongodb connected sucessfully========>'.green);

    server = app.listen(port, () => { });
    if (port) {
      console.log(`server started on port========> ${port}`.green);
    }
    else {
      console.log('failed to start server'.red);
    }
  })
  .catch((eror) => console.error('connection failed'.red, { message: eror.message }))
 


// exit handler for all termination process and errors
const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server Closed'.yellow);
      process.exit(1);
    })
  }
  else{
    process.exit(1);
  }
}

const commonErrorHandler = (error) => {
  console.log(error);
  exitHandler();
}

// call above functions which are to handle unexpected errors
process.on('uncaughtException', commonErrorHandler);
process.on('unhandledRejection', commonErrorHandler);


