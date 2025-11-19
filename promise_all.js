let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the frist promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the second promise has Faild");
    reject("Failde");
  }, 2 * 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});
var total = 0;
Promise.all([p1, p2, p3])
  .then((result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`Result: ${result}`);
    console.log(`Total Result: ${total}`);
  })
  .catch((error) => {
    console.log(`Result: ${error}`);
  });
