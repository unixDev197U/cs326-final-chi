async function postData(route: string, data: object) {
  const resp = await fetch("https://polar-gorge-31936.herokuapp.com/" + route, {
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
  return resp;
}

$(document).ready(async () => {
  if ($("#profileSummary")) {
    let profile = await (
      await postData("profileData", { user: "eberger@umass.edu" })
    ).json();
    $("#age").html(profile.age);
    $("#weight").html(profile.weight);
    $("#height").html(profile.height);
    $("#gender").html(profile.gender);
  }
});
