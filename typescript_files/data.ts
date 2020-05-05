// I copy/pasted the original postData function and just changed the method (because lazy)
// However, ideally we should have a single function with the method type as
// an additional parameter. For example: myFetch(route: string, data: any, method: string)
// Also, remember that each function will be returning a json that has a "data" field.
// Look at the ./handlers/profiles.js for more information

// Used for getting profile information
export async function getData(route: string) {
    const resp = await fetch(window.location.origin + route, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    return resp.json();
}

// Used to create new profiles
export async function postData(route: string, data: any) {
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

// Used to update profiles
export async function putData(route: string, data: any) {
    const resp = await fetch(window.location.origin + route, {
      method: "PUT",
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

// Used to delete profiles
export async function deleteData(route: string, data: any) {
    const resp = await fetch(window.location.origin + route, {
      method: "DEL",
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