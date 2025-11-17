const fruits = ["apple", "orange", "lemon", "banana"];
const [first, ...rest] = fruits;
console.log(first, rest);
const spfruits = rest.find((fruit) => fruit === "banana");
console.log(spfruits);
const person = {
  name: "Hassan",
  lname: "Murtaza",
  job: "Web Developer",
};
const { job, ...resto } = person;
console.log(job, resto);

const getAverage = (name, ...score) => {
  console.log(name);
  console.log(score);
  const average =
    score.reduce((total, item) => {
      return (total += item);
    }, 0) / score.length;
  console.log(average);
};
getAverage(person.name, 89.99, 91, 100);
