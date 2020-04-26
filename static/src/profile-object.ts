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

  module.exports = profile;