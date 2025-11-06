const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const email = (req) => {
  if (!req) {
    console.log("Email is required");
    return;
  }

  req = req.trim().toLowerCase();

  const mailreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!mailreg.test(req)) {
    console.log("Invalid email format");
    return;
  }

  const adomin = ["gmail.com", "yopmail.com"];
  const mdomin = req.split("@")[1];

  if (!adomin.includes(mdomin)) {
    console.log("Please use a valid Gmail or Yopmail account.");
    return;
  }

  console.log("Email accepted ✅");
};

rl.question("Enter your email: ", (mail) => {
  email(mail);
  rl.close(); // ✅ close important hai
});
