// for (let val of [10, 20, 30]) {
//   console.log(val);
// }

// try {
//   let a = JSON.parse("{bad json}");
// } catch (err) {
//   console.log("Error:", err.message);
// } finally {
//   console.log("Always runs");
// }

function checkAge(age) {
  if (age > 18) {
    throw new Error("You must be 18+");
  }
  return "Allowed";
}

try {
  console.log(checkAge(15));
} catch (e) {
  console.log(e.message);
}

let fun = (a) => {
  if (a > 5) {
    throw new Error("A less than 5");
  }
  return "A greater then 5";
};
try {
  console.log(fun(5));
} catch (err) {
  console.log(err.message);
}

let sum = (a, b) => {
  let tsum = a + b;
  if (tsum > 20) {
    throw new Error(`Sum: is ka sum 20 se zyada hai`);
  }
  return `sum = ${tsum}`;
};
try {
  console.log(sum(11, 10));
} catch (er) {
  console.log(er.message);
}

let ttsum = (a, b) => {
  let sum = a+b
  if (sum !== 20) {
    throw new Error("In ka 20 ha");
  }
  return `sum = ${sum}`;
  {
  console.log(ttsum(11, 10));
} catch (aer) {
  console.log(aer.message);
}
};

