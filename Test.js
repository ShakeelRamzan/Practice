// Array of objects — 10 employees ka data
const employees = [
  { name: "Ali", salary: 50000, overtime: 5 },
  { name: "Ahmed", salary: 55000, overtime: 3 },
  { name: "Sara", salary: 60000, overtime: 8 },
  { name: "Hassan", salary: 45000, overtime: 2 },
  { name: "Zainab", salary: 70000, overtime: 6 },
  { name: "Usman", salary: 52000, overtime: 4 },
  { name: "Fatima", salary: 48000, overtime: 7 },
  { name: "Bilal", salary: 65000, overtime: 5 },
  { name: "Ayesha", salary: 59000, overtime: 9 },
  { name: "Hamza", salary: 62000, overtime: 3 },
];
let listname_salry = employees.map((employ) => {
  return {
    name: employ.name,
    salary: employ.overtime >= 4 ? employ.salary + 500 : employ.salary,
  };
});

console.table(listname_salry);
