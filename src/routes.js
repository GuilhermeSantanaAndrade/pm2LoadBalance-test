const routes = require("express").Router();
const controllerTeste = require("./controllers/controllerTeste");

routes.get("/teste", controllerTeste.teste);

module.exports.routes = routes;
