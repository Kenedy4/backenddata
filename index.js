// Importing json-server library into this project
const jsonServer = require("json-server");
const server = jsonServer.create(); // Create a new server
const router = jsonServer.router("db.json"); // Create a router using the JSON file
const middlewares = jsonServer.defaults(); // Add default middlewares
const port = process.env.PORT || 8080;
server.use(middlewares);
server.use(router);
server.listen(port);
// , () => {
//   console.log(`JSON Server is running on port ${port}`);
// });
