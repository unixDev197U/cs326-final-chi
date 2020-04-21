"use strict";

import { Database } from "./mongo-database";
import { MyServer } from "./myserver-routing";

const theDatabase = new Database("final-chi");
const theServer = new MyServer(theDatabase);

let port = process.env.PORT || 8080;
theServer.listen(port);
