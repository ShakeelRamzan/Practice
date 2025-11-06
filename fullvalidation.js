const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ---------- VALIDATION FUNCTIONS ----------

// ✅ Name Validation
const validateName = (req) => {
  if (!req) return "Name is required";
  req = req.trim();
  const namereg = /^[A-Za-z]+([ '-][A-Za-z]+)*$/; // only letters, spaces, hyphens
  if (!namereg.test(req))
    return "Name must contain only alphabets (no numbers or symbols)";
  return null;
};

// ✅ Email Validation
const validateEmail = (req) => {
  if (!req) return "Email is required";
  req = req.trim().toLowerCase();
  const mailreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!mailreg.test(req)) return "Invalid email format";

  const allowedDomains = ["gmail.com", "yopmail.com"];
  const domain = req.split("@")[1];
  if (!allowedDomains.includes(domain))
    return "Please use a valid Gmail or Yopmail address";
  return null;
};

//  Password Validation
const validatePassword = (req) => {
  if (!req) return "Password is required";
  const passreg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passreg.test(req))
    return "Password must be 8+ chars, include upper/lowercase, a number, and a special symbol";
  return null;
};

// ---------- FORM FLOW ----------
const askUser = () => {
  rl.question("Enter your name: ", (nameInput) => {
    const nameError = validateName(nameInput);
    if (nameError) {
      console.log(" " + nameError);
      return askUser(); // restart form if invalid
    }

    rl.question("Enter your email: ", (emailInput) => {
      const emailError = validateEmail(emailInput);
      if (emailError) {
        console.log(" " + emailError);
        return askUser(); // restart form if invalid
      }

      rl.question("Enter your password: ", (passInput) => {
        const passError = validatePassword(passInput);
        if (passError) {
          console.log(" " + passError);
          return askUser(); // restart form if invalid
        }

        console.log("\n All inputs are valid!");
        console.log("Name:", nameInput);
        console.log("Email:", emailInput);
        console.log("Password:", "*".repeat(passInput.length)); // hide actual password
        rl.close();
      });
    });
  });
};

askUser();
