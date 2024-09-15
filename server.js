const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware to handle form data (application/x-www-form-urlencoded)
server.use(bodyParser.urlencoded({ extended: true }));

// Middleware to handle JSON data
server.use(bodyParser.json());

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Use default router
server.use(router);

// Start the server
server.listen(3000, () => {
  console.log('JSON Server is running');
});
