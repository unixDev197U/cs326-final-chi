"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operations_1 = require("./operations");
$(document).ready(function () {
    $("#logo_index").click(() => {
        window.location.replace(window.location.origin);
    });
    $("#sub_button").click(async () => {
        if ($('#password1').val() !== $('#password1').val()) {
            alert("Passwords don't match");
        }
        else {
            const register = {
                name: $('#name').val(),
                email: $('#email').val(),
                password: $('#password1').val(),
                sex: $('#person_sex').val(),
                dob: $('#date-picker-example').val()
            };
            let check = await operations_1.registerProfile(register);
            if (check.success === true) {
                window.location.replace(window.location.origin + '/profile.html');
            }
            else {
                alert(check.error);
            }
        }
    });
});
