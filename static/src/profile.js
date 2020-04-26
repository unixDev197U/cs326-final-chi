(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postdata_1 = require("./postdata");
$("#edit").click(() => { });
$(document).ready(async () => {
    let uid = "eberger@umass.edu";
    let profile = await await postdata_1.postData("/app/" + uid + "/profileData", {
        session: "uniqueUserSessionToken",
    });
    if ($("#profileSummary")) {
        $("#age").html(profile.age);
        $("#weight").html(profile.weight);
        $("#height").html(profile.height);
        $("#gender").html(profile.sex); //The id is currently set to gender?
    }
    if ($("#exerciseHistory ul")) {
        profile.exercises.forEach((exercise) => {
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

},{"./postdata":1}]},{},[2]);
