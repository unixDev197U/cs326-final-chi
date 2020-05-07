"use strict";
// I copy/pasted the original postData function and just changed the method (because lazy)
// However, ideally we should have a single function with the method type as
// an additional parameter. For example: myFetch(route: string, data: any, method: string)
// Also, remember that each function will be returning a json that has a "data" field.
// Look at the ./handlers/profiles.js for more information
Object.defineProperty(exports, "__esModule", { value: true });
// Used for getting profile information
async function getData(route) {
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
exports.getData = getData;
// Used to create new profiles
async function postData(route, data) {
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
exports.postData = postData;
// Used to update profiles
async function putData(route, data) {
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
exports.putData = putData;
// Used to delete profiles
async function deleteData(route, data) {
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
exports.deleteData = deleteData;
