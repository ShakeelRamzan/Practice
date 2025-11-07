const students = [
  { name: "Ali", marks: 92, attendance: 85 },
  { name: "Sara", marks: 76, attendance: 70 },
  { name: "Hassan", marks: 88, attendance: 55 },
  { name: "Ayesha", marks: 64, attendance: 90 },
  { name: "Bilal", marks: 81, attendance: 78 },
  { name: "Fatima", marks: 95, attendance: 95 },
  { name: "Usman", marks: 84, attendance: 40 },
  { name: "Zain", marks: 73, attendance: 65 },
  { name: "Nida", marks: 90, attendance: 58 },
  { name: "Ahmed", marks: 79, attendance: 82 },
];
console.log("\n\n This is Find method");

let finstu = students.find((stu) => stu.marks > 80 && stu.attendance < 60);
console.log(finstu);
// .................................................................
console.log("\n\n This is Filtr method");
let filterstu = students.filter((stu) => stu.marks > 80 && stu.attendance < 60);
console.log(filterstu);
