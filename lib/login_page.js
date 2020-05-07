"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operations_1 = require("./operations");
$(document).ready(async function () {
    $("#logo_index").click(() => {
        window.location.replace(window.location.origin);
    });
    const profile = await operations_1.getProfile();
    if (profile.success === true) {
        window.location.replace(window.location.origin + '/profile.html');
    }
    $("#sub_button").click(async () => {
        const login = {
            email: $('#email').val(),
            password: $('#password1').val()
        };
        let check = await operations_1.loginProfile(login);
        if (check.success === true) {
            window.location.replace(window.location.origin + '/profile.html');
        }
        else {
            alert(check.error);
        }
    });
});
