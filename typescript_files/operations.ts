// Used for getting the current logged in user's profile information
export async function getProfile() {
  const resp = await fetch(window.location.origin + '/profiles/me', {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
  });
  return resp.json();
}

// User for editing the personal information on a profile
// Date of Birth, weight, height, sex
export async function editProfile(data: any) {
  let profile: any = await getProfile();
  Object.keys(data).forEach(key => {
    profile.data[key] = data[key]
  });
  const resp = await fetch(window.location.origin + '/profiles/update', {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    body: JSON.stringify(profile.data)
  });
  return resp.json();
}

// Used to register new profiles
export async function registerProfile(data: any) {
  const resp = await fetch(window.location.origin + '/profiles/register', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    body: JSON.stringify(data)
  });
  return resp.json();
}

// Used to login to profile
export async function loginProfile(data: any) {
  const resp = await fetch(window.location.origin + '/profiles/login', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    body: JSON.stringify(data)
  });
  return resp.json();
}

// Used to logout of current profile
export async function logoutProfile() {
  const resp = await fetch(window.location.origin + '/profiles/logout', {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
  });
  return resp.json();
}

// Used to add exercises to current logged in user
export async function addExercise(data: any) {
  const profile = await getProfile();
  profile.data.exercises.push(data);
  const resp = await fetch(window.location.origin + '/profiles/update', {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    body: JSON.stringify(profile.data)
  });
  return resp.json();
}

// Used to delete a logged in user's exercise
// You pass in the exercise name and reps. Ex: { name: "Push Ups", rep: 25 }
export async function deleteExercise(data: any) {
  const profile = await getProfile();
  const exercises = profile.data.exercises
  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i].name === data.name && exercises[i].rep === parseInt(data.rep)) {
      exercises.splice(i, i+1);
      break;
    }
  }
  profile.data.exercises = exercises;
  const resp = await fetch(window.location.origin + '/profiles/update', {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    body: JSON.stringify(profile.data)
  });
  return resp.json();
}

// Used to recommend exercises to the currently logged in user
// For now it just recommends random exercises
export async function recommendExercise() {
  const profile = await getProfile();
  if (!profile.data.exercises) {
    return null
  } else {
    return profile.data.exercises[Math.floor(Math.random() * profile.data.exercises.length)];
  }
}

// Used to delete a logged in user's profile
export async function deleteProfile() {
  const resp = await fetch(window.location.origin + '/profiles/delete', {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow"
  });
  return resp.json();
}