function sum(name, user, ...args) {
  console.log(`Hello! ${name} ${user} Apka bill hai`);
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  console.log(sum);
}
sum("Malik", "Asif", 20, 30, 40);
sum("Saim!", " Malik", 20, 30, 40, 50);
