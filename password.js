const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const paswd = (req) => {
  if (!req) {
    console.log("Password is Requird");
    return;
  }
  req.trim();
  const paswdreq =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!paswdreq.test(req)) {
    console.log(
      " Password must be 8+ chars with upper, lower, number, and special symbol"
    );
  } else {
    console.log(" Strong password");
  }
};
rl.question("Enter your password: ", (pswd) => {
  paswd(pswd);
  rl.close();
});
