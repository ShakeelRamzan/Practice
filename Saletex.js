let saleTex = [100, 200, 300, 400];

let finlPrice = saleTex.map((sltex) => {
  return (sltex += (sltex / 100) * 17);
});
console.log(finlPrice);
