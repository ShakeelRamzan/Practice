const users = [
  { name: "Ali", email: "ali@yahoo.com", isActive: true },
  { name: "Sara", email: "sara@gmail.com", isActive: false },
  { name: "Hassan", email: "hassan@outlook.com", isActive: true },
  { name: "Ayesha", email: "ayesha@gmail.com", isActive: true },
  { name: "Bilal", email: "bilal@gmail.com", isActive: false },
  { name: "Zain", email: "zain@hotmail.com", isActive: true },
  { name: "Fatima", email: "fatima@gmail.com", isActive: true },
  { name: "Usman", email: "usman@yahoo.com", isActive: false },
  { name: "Nida", email: "nida@gmail.com", isActive: false },
  { name: "Ahmed", email: "ahmed@gmail.com", isActive: true },
];
console.log("\nThats Find Method");

const lastactive = users.find(
  (user) => user.isActive && user.email.endsWith("gmail.com")
);
console.log(lastactive);

// .....................................................................
console.log("\n\nThats Filter Method");
const lstactive = users.filter(
  (user) => user.isActive && user.email.endsWith("gmail.com")
);
console.log(lstactive);
