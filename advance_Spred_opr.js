let sum = (name, ...args) => {
  console.log(`Hello! ${name}`);

  return args.reduce((acc, num) => acc + num, 0);
};
console.log("You Total Bill: ", sum("Malik", 10, 20, 30, 40));

// .................................................

let spreadOprt = (name, ...sargs) => {
  //   return sargs.reduce((tsum, num) => tsum + num, 0);
  let tsum = 0;
  for (let i in sargs) {
    tsum += sargs[i];
  }
  return tsum;
};
let arr = [10, 20, 30, 40];
console.log("You sp Bill: ", spreadOprt("Malik", ...arr));
