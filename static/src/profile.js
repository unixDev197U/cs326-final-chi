(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
// I copy/pasted the original postData function and just changed the method (because lazy)
// However, ideally we should have a single function with the method type as
// an additional parameter. For example: myFetch(route: string, data: any, method: string)
// Also, remember that each function will be returning a json that has a "data" field.
// Look at the ./handlers/profiles.js for more information
Object.defineProperty(exports, "__esModule", { value: true });
// Used for getting profile information
async function getData(route) {
    const resp = await fetch(window.location.origin + route, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
    });
    return resp.json();
}
exports.getData = getData;
// Used to create new profiles
async function postData(route, data) {
    const resp = await fetch(window.location.origin + route, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(data),
    });
    return resp.json();
}
exports.postData = postData;
// Used to update profiles
async function putData(route, data) {
    const resp = await fetch(window.location.origin + route, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(data),
    });
    return resp.json();
}
exports.putData = putData;
// Used to delete profiles
async function deleteData(route, data) {
    const resp = await fetch(window.location.origin + route, {
        method: "DEL",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(data),
    });
    return resp.json();
}
exports.deleteData = deleteData;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
$("#edit").click(() => { });
$(document).ready(async () => {
    // Create dummy profile
    // I dumbed down the exercise objects because they
    // need to be fleshed out later.
    const dummy_profile = await data_1.postData("/profiles/", {
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
    let profile = await data_1.getData("/profiles/" + dummy_profile.data._id);
    if ($("#profileSummary")) {
        $("#age").html(profile.data.age);
        $("#weight").html(profile.data.weight);
        $("#height").html(profile.data.height);
        $("#gender").html(profile.data.sex); //The id is currently set to gender?
    }
    if ($("#exerciseHistory ul")) {
        profile.data.exercises.forEach((exercise) => {
            $("#exerciseHistory ul").append('<li class="list-group-item"><span>' +
                exercise.name +
                " - " +
                exercise.rep +
                " reps" +
                '</span><span title="Delete Exercise" class="float-right"><img src="./open-iconic/svg/x.svg" /></span><span class="float-right mx-3">' +
                exercise.date +
                "</span></li>");
        });
    }
});

},{"./data":1}]},{},[2]);
