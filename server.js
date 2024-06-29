const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // The name of the database file to save the data (optional)
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3030, () => {
    console.log(`Json Server is Running : ${3030}`); // Set the desired port to run
});
