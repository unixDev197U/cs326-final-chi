export async function postData(url: string, data: any) {
  const resp = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    },
    redirect: "follow",
    body: JSON.stringify(data),
  });
  return resp.json();
}
