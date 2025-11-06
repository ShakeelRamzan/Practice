// const arr = [10, 20, 30, 40, 50, 60];

// const values = arr.forEach((item) => console.log(item));
// console.log(values);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const value = arr.filter((x) => x % 2 !== 0);

// console.log(value);

const books = [
  { title: "book1", genre: "Function", publish: 1981 },
  { title: "book2", genre: "Function", publish: 1931 },
  { title: "book3", genre: "Math", publish: 1941 },
  { title: "book4", genre: "History", publish: 1971 },
  { title: "book5", genre: "Function", publish: 1991 },
  { title: "book6", genre: "History", publish: 1951 },
  { title: "book7", genre: "Function", publish: 1961 },
];

const allpublish = books.map((bk) => {
  return bk.publish;
});
console.log(allpublish);
const alltitle = books.map((bk) => {
  return bk.title;
});
console.log(alltitle);
const allgenre = books.map((bk) => {
  return bk.genre;
});
console.log(allgenre);
