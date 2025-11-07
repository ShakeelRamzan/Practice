const students = [
  { name: "Ali", marks: 92 },
  { name: "Sara", marks: 85 },
  { name: "Usman", marks: 73 },
  { name: "Ayesha", marks: 67 },
  { name: "Bilal", marks: 58 },
  { name: "Zainab", marks: 80 },
  { name: "Hassan", marks: 90 },
  { name: "Fatima", marks: 76 },
  { name: "Ahmed", marks: 64 },
  { name: "Nida", marks: 49 },
];
let stuWithGrade = students.map((stu) => {
  let grade;
  if (stu.marks >= 90) grade = "A";
  else if (stu.marks >= 80) grade = "B";
  else if (stu.marks >= 70) grade = "C";
  else if (stu.marks >= 60) grade = "D";
  else grade = "F";

  return {
    name: stu.name,
    marks: stu.marks,
    grade,
  };
});
console.table(stuWithGrade);
