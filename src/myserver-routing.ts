import { request } from "http";

let http = require("http");
let url = require("url");
let express = require("express");
let profile = require('./profile-object');
let path = require('path');

export class MyServer {
  private theDatabase: any;

  // Server stuff: use express instead of http.createServer
  private server = express();
  private router = express.Router();

  constructor(db: any) {
    this.theDatabase = db;
    // from https://enable-cors.org/server_expressjs.html
    this.router.use((request: any, response: any, next: any) => {
      response.header("Content-Type", "application/json");
      response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Headers", "*");
      next();
    });
    // Serve static pages from a particular path.
    this.server.use("/", express.static(path.join(__dirname, "/../static")));
    // NEW: handle POST in JSON format
    this.server.use(express.json());

    this.router.post("/profileData", this.profileDataHandler.bind(this));

    this.router.post("/createExercise", this.createExerciseHandler.bind(this));
    //// HANDLE ERRORS WITH A WILDCARD (*)
    this.router.post("/*", async (request: any, response: any) => {
      //this.router.get("/users/:userId/*", async (request: any, response: any) => {
      response.send(JSON.stringify({ result: "command-not-found" }));
    });
    this.server.use("/app", this.router);
  }

  private async profileDataHandler(request: any, response: any): Promise<void> {
    if (request.body.uid) {
      //If person exists
      let data = {
        age: profile.age,
        weight: profile.weight,
        height: profile.height,
        sex: profile.sex,
        exercises: profile.exercises,
      };
      response.write(JSON.stringify(data));
      response.end();
    }
  }

  private async createExerciseHandler(request: any, response: any): Promise<void> {
    if (request.body.uid) {
      //If person exists
      let data = {
        age: profile.age,
        weight: profile.weight,
        height: profile.height,
        sex: profile.sex,
        exercises: profile.exercises,
      };
      response.write(JSON.stringify(data));
      response.end();
    }
  }

  public listen(port: any): void {
    this.server.listen(port);
  }
}
