import { loginProfile, getProfile } from "./operations";

$(document).ready(async function() {
    $("#logo_index").click(() => {
        window.location.replace(window.location.origin);
    });

    const profile = await getProfile();
    if (profile.success === true){
        window.location.replace(window.location.origin + '/profile.html');
    }

    $("#sub_button").click(async () => {
        const login = {
            email: $('#email').val(),
            password: $('#password1').val()
        }
        let check: any = await loginProfile(login);
        if (check.success === true) {
            window.location.replace(window.location.origin + '/profile.html');
        } else {
            alert(check.error);
        }
    });
});