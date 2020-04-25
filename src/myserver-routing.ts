let http = require("http");
let url = require("url");
let express = require("express");

let profile: {
  uid: string;
  password: string;
  age: number;
  weight: number;
  height: number;
  sex: string;
  exercises: {
    name: string;
    group: {
      chest: number;
      back: number;
      arms: number;
      legs: number;
      abs: number;
    };
    rep: number;
    date: Date;
  }[];
  //picture: ImageBitmap;
};
profile = {
  uid: "eberger@umass.edu",
  password: "password",
  age: 30,
  weight: 160,
  height: 68,
  sex: "Male",
  exercises: [
    {
      name: "Chest Press",
      group: {
        chest: 1,
        back: 0,
        arms: 1,
        legs: 0,
        abs: 0,
      },
      rep: 10,
      date: new Date("2020-04-08T15:06:00"),
    },
    {
      name: "Pull Ups",
      group: {
        chest: 0,
        back: 1,
        arms: 1,
        legs: 0,
        abs: 0,
      },
      rep: 10,
      date: new Date("2020-04-08T15:17:00"),
    },
  ],
};

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
    this.server.use("/", express.static(__dirname + "/../static"));
    // NEW: handle POST in JSON format
    this.server.use(express.json());

    //// HANDLE ERRORS WITH A WILDCARD (*)
    this.router.post(
      "/users/:userId/*",
      async (request: any, response: any) => {
        //this.router.get("/users/:userId/*", async (request: any, response: any) => {
        response.send(JSON.stringify({ result: "command-not-found" }));
      }
    );
  }

  public listen(port: any): void {
    this.server.listen(port);
  }
}
