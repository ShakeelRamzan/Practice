if (true) {
  var a = 1;
  var b = 5;
  var c = a + b;
}
console.log(c);
// ..........................
// if (true) {
//   let a = 1;
//   let b = 5;
//   let c = a + b;
// }
// console.log(c);
//  const or let dono mein same error ay ga C is not define kio ke yeh scope block hai or yeh sirf {} is ke andar e kam kre ga

if (true) {
  let a = 1;
  let b = 5;
  let c = a + b;
  console.log(c);
}

// ............................................................
if (true) {
  const a = 1;
  const b = 5;
  const c = a + b;
  console.log(c);
}
