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
