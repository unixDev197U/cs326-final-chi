import { registerProfile } from "./operations";

$(document).ready(function() {
    $("#logo_index").click(() => {
        window.location.replace(window.location.origin);
    });

    $("#sub_button").click(async () => {
        if ($('#password1').val() !== $('#password1').val()) {
            alert("Passwords don't match");
        } else {
            const register = {
                name: $('#name').val(),
                email: $('#email').val(),
                password: $('#password1').val(),
                sex: $('#person_sex').val(),
                dob: $('#date-picker-example').val()
            }
            let check: any = await registerProfile(register);
            if (check.success === true) {
                window.location.replace(window.location.origin + '/profile.html');
            } else {
                alert(check.error);
            }
        }
    });
});