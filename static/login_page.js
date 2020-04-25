$("sub_button").click(async function postData(route: string, data: object) {
	const resp = await fetch("https://polar-gorge-31936.herokuapp.com/" + login_page, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
	body: JSON.stringify(
		{uid:$("email"),
		pass:$("password1")})
  });
  return resp;
});