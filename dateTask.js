const dateStrings = [
  "2025-01-10",
  "2025-02-15",
  "2025-03-20",
  "2025-04-25",
  "2025-05-30",
];

const JS_Date_ob = dateStrings.map((dte) => {
  return {
    date: new Date(),
  };
});
console.log(JS_Date_ob);
