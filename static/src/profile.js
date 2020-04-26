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
const postdata_1 = require("./postdata");
$("#edit").click(() => { });
$(document).ready(() => __awaiter(void 0, void 0, void 0, function* () {
    let profile = yield postdata_1.postData("localhost:8080/profileData", {
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
}));
