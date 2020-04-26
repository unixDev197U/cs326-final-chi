import { postData } from "./postdata";

$("#edit").click(() => {});

$(document).ready(async () => {
  let profile = 
    await postData("localhost:8080/profileData", { //Change to heroku url
      uid: "eberger@umass.edu",
    });
  console.log(profile);
  if ($("#profileSummary")) {
    console.log("profile summary");
    $("#age").html(profile.age);
    $("#weight").html(profile.weight);
    $("#height").html(profile.height);
    $("#gender").html(profile.gender);
  }
  if ($("#exerciseHistory ul")) {
    profile.exercises.forEach(
      (exercise: {
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
      }) => {
        $("#exerciseHistory ul").append(
          '<li class="list-group-item"><span>' +
            exercise.name +
            " - " +
            exercise.rep +
            " reps" +
            '</span><span title="Delete Exercise" class="float-right"><img src="./open-iconic/svg/x.svg" /></span><span class="float-right mx-3">' +
            exercise.date +
            "</span></li>"
        );
      }
    );
  }
});
