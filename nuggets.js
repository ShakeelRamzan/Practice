const menu = [
  { name: "pancakes", category: "Breakfast" },
  { name: "burgur", category: "lunch" },
  { name: "steal", category: "diner" },
  { name: "bacon", category: "Breakfast" },
  { name: "eggs", category: "Breakfast" },
  { name: "pasta", category: "lunch" },
  { name: "soup", category: "diner" },
];
const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories);


const result = document.querySelector()

// const persons = [
//   { name: "Ali Ahmed", age: 15, class: "9th", grade: "A" },
//   { name: "Sara Khan", age: 14, class: "8th", grade: "B" },
//   { name: "Hassan Raza", age: 16, class: "10th", grade: "A+" },
//   { name: "Fatima Noor", age: 13, class: "7th", grade: "A" },
//   { name: "Bilal Iqbal", age: 17, class: "11th", grade: "B+" },
//   { name: "Zain Ali", age: 12, class: "6th", grade: "A" },
//   { name: "Maryam Tariq", age: 18, class: "12th", grade: "A+" },
//   { name: "Usman Qureshi", age: 15, class: "9th", grade: "C" },
//   { name: "Hira Fatima", age: 14, class: "8th", grade: "B+" },
//   { name: "Ahmad Nawaz", age: 16, class: "10th", grade: "A" },
// ];
// const getAges = (person) => person.age * 2;
// const ages = persons.map(getAges);
// console.table(ages);

// const newPeople = persons.map((item) => {
//   return {
//     firstName: item.name.toUpperCase(),
//     oldAge: item.age + 20,
//   };
// });
// console.log(newPeople);

// const names = persons.map((person) => `<h2>${person.name}</h2>`);

// const result = document.querySelector("#result");

// result.innerHTML = names.join("");
