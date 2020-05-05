import { getData, postData, putData, deleteData } from "./data";


$("#edit").click(() => {});

$(document).ready(async () => {
  // Create dummy profile
  // I dumbed down the exercise objects because they
  // need to be fleshed out later.
  // Also, check ./schema/Profile.js for more information
  // on how to create new profiles
  const dummy_profile = await postData("/profiles/", {
    name: "Emery Berger",
    age: 100,
    weight: 50,
    height: "5'5",
    sex: "Male",
    exercises: [
      {
        name: "Push Ups",
        rep: 10,
        date: new Date(Date.now())
      },
      {
        name: "Chest Press",
        rep: 10,
        date: new Date(Date.now())
      },
      {
        name: "Pull Ups",
        rep: 10,
        date: new Date(Date.now())
      }
    ]
  });

  // When the new profile is inserted into mongodb, it creates
  // a unique field _id
  let profile = await getData("/profiles/" + dummy_profile.data._id);
  if ($("#profileSummary")) {
    $("#age").html(profile.data.age);
    $("#weight").html(profile.data.weight);
    $("#height").html(profile.data.height);
    $("#gender").html(profile.data.sex); //The id is currently set to gender?
  }
  if ($("#exerciseHistory ul")) {
    profile.data.exercises.forEach(
      (exercise: {
        name: string,
        rep: number,
        date: Date,
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
