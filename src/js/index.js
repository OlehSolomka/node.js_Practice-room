// import validatePassword from "./components/validate-password";
// import apiService from "./components/api-service";
// import { fetchAllUsers as allUsers} from "./components/api-service";

// import * as apiService from "./components/api-service"
// console.log(apiService);

// import { addUser } from "./components/api-service";

// addUser('Oleh')

import users from "./components/arr.json";
import createUsersTmp from "./components/qqq.hbs";

const containerRef = document.querySelector(".container");

const userMarkup = createUserMarkup(users);
containerRef.insertAdjacentHTML("beforeend", userMarkup);

function createUserMarkup(users) {
  return createUsersTmp(users);
}
console.log(containerRef);
