"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operations_1 = require("./operations");
$(document).ready(async () => {
    let profile = await operations_1.getProfile();
    if (!profile.success) {
        window.location.replace(window.location.origin); // Send them to front page if they're not logged in
    }
    $("#delete_profile").click(async () => {
        await operations_1.deleteProfile();
        window.location.replace(window.location.origin);
    });
    $("#edit_profile").click(async () => {
        const dob_val = $('#edit_dob').val();
        const weight_val = $('#edit_weight').val();
        const height_val = $('#edit_height').val();
        const sex_val = $('#edit_sex').val();
        const result = await operations_1.editProfile({
            dob: dob_val || $('#dob').text(),
            weight: weight_val || parseInt($('#weight').text()),
            height: height_val || $('#height').text(),
            sex: sex_val || $('#sex').text()
        });
        if (result.success === false) {
            alert(result.error);
        }
        window.location.reload();
    });
    $("#delete_exercise").click(async () => {
        await operations_1.deleteExercise({
            name: $('#delete_name').val(),
            rep: $('#delete_rep').val()
        });
        window.location.reload();
    });
    $("#add_exercise").click(async () => {
        const result = await operations_1.addExercise({
            name: $('#add_name').val(),
            rep: $("#add_rep").val(),
            date: new Date(Date.now())
        });
        if (result.success === false) {
            alert(result.error);
        }
        window.location.reload();
    });
    $("#recommend_exercise").click(async () => {
        const result = await operations_1.recommendExercise();
        if (result === null) {
            $("#insert_recommended ul").append('<li class="list-group-item">You have no exercise history</li>');
        }
        else {
            $("#insert_recommended").append('<li class="list-group-item"><span>Name: ' + result.name + " Rep Count: " + result.rep + '</span>');
        }
    });
    $("#remove_recommended").click(() => {
        $("#insert_recommended").remove();
        window.location.reload();
    });
    $("#logo_index").click(() => {
        window.location.replace(window.location.origin);
    });
    $("#logout").click(async () => {
        await operations_1.logoutProfile();
        window.location.replace(window.location.origin);
    });
    $('#userWelcome').text(profile.data.name);
    if ($("#profileSummary")) {
        $("#dob").html(profile.data.dob);
        $("#weight").html(profile.data.weight);
        $("#height").html(profile.data.height);
        $("#sex").html(profile.data.sex);
    }
    if ($("#exerciseHistory ul")) {
        const exercise = profile.data.exercises.forEach((exercise) => {
            $("#exerciseHistory ul").append('<li class="list-group-item"><span>' +
                exercise.name +
                " - " +
                exercise.rep +
                " reps" +
                '</span><span title="Delete Exercise" class="float-right"></span><span class="float-right mx-3">' +
                exercise.date +
                "</span></li>");
        });
    }
});
