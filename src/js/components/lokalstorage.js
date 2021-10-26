localStorage.setItem(
  "user",
  JSON.stringify({ name: "Oleh", age: 28, sex: "male" })
);

const userData = localStorage.getItem("user");
const parcedData = JSON.parse(userData);
// console.log(parcedData);
