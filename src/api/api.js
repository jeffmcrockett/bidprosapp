import { handleResponse, handleError, getHeaders } from "./apiUtils";


const url = "https://jeffmcrockett.github.io/bidprosapi/events";

export function getEvents() {
  return fetch(url)
  .then(handleResponse)
  .catch(handleError);
}

// export function getRandomQuestion() {
//   return fetch(url + "/random").then(handleResponse).catch(handleError);
// }

// export function postQuestion(question) { //fetching url and making a POST command  
//   return fetch(url, {
//     method: "POST", // POST for create
//     headers: getHeaders(),
//     body: JSON.stringify(question),
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }


// export function deleteQuestion(id) {
//   return fetch(url + "/" + id, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }