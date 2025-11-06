const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = (req) => {
  if (!req) {
    console.log("Your Name is Required");
    return;
  }

  req = req.trim();
  const namereg = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/i;

  if (!namereg.test(req)) {
    console.log("Please Enter Your Name without Numbers or Symbols");
    return;
  }

  console.log("Name accepted ✅");
};

rl.question("Enter your name: ", (uname) => {
  name(uname);
  rl.close();
});
