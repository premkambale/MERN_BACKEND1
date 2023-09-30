// This is main file for router where all routes will be exported;
const express = require('express');
const router = express.Router();


const authRoutes = require('./auth.routes');
const taskRoutes = require('./task.routes');
const userRoutes = require('./user.routes');
const productRoutes = require('./products.routes');
const routes = [
  { path: '/users', route: authRoutes },
  { path: '/tasks', route: taskRoutes },
  { path: '/users', route: userRoutes },
  { path: '/products', route: productRoutes },

]

routes.map((item) => {
  router.use(item.path, item.route);
})


// module exports router
module.exports = router;