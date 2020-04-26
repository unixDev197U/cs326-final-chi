import { postData } from "./postdata";

$("sub_button").click(async function () {
  const resp = await (
    await postData("/app/login", {
      uid: $("email"),
      pass: $("password1"),
    })
  ).json();
  return resp;
});