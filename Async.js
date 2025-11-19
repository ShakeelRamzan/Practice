let test = async () => "hello";
test().then((result) => {
  console.log(result);
});

let test2 = async () => {
  console.log("2: Message");
  await console.log("3: Message");
  console.log("4: Message");
};

console.log("1: Message");
test2();
console.log("5: Message");
