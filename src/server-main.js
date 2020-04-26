"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_database_1 = require("./mongo-database");
const myserver_routing_1 = require("./myserver-routing");
const theDatabase = new mongo_database_1.Database("final-chi");
const theServer = new myserver_routing_1.MyServer(theDatabase);
let port = process.env.PORT || 8080;
theServer.listen(port);
