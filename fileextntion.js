let arryOfFile = ["index.html", "app.js", "style.css"];
let extOfFile = arryOfFile.map((orarr) => {
  return orarr.split(".")[1];
});
console.log(extOfFile);
