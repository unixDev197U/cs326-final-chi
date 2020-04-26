"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let http = require("http");
let url = require("url");
let express = require("express");
let profile = require('./profile-object');
let path = require('path');
let faker = require('faker');
class MyServer {
    constructor(db) {
        // Server stuff: use express instead of http.createServer
        this.server = express();
        this.router = express.Router();
        this.theDatabase = db;
        // from https://enable-cors.org/server_expressjs.html
        this.router.use((request, response, next) => {
            response.header("Content-Type", "application/json");
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Headers", "*");
            next();
        });
        // Serve static pages from a particular path.
        this.server.use(express.static(path.join(__dirname, "/../static")));
        // NEW: handle POST in JSON format
        this.server.use(express.json());
        // Ideally this should be something like /:uid/profileData
        // When we call profileDataHandler, we can query the database
        // with request.params.uid
        this.router.post("/profileData", this.profileDataHandler.bind(this));
        //// HANDLE ERRORS WITH A WILDCARD (*)
        this.router.post("/*", (request, response) => __awaiter(this, void 0, void 0, function* () {
            //this.router.get("/users/:userId/*", async (request: any, response: any) => {
            response.send(JSON.stringify({ result: "command-not-found" }));
        }));
        this.server.use("/", this.router);
    }
    profileDataHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.body.uid) {
                //If person exists
                let data = {
                    age: profile.age,
                    weight: profile.weight,
                    height: profile.height,
                    sex: profile.sex,
                    exercises: profile.exercises,
                };
                response.json(data);
            }
            else {
                response.status(400).json({ msg: `No profile with the id of ${request.body.uid}` });
            }
        });
    }
    listen(port) {
        this.server.listen(port);
    }
}
exports.MyServer = MyServer;
