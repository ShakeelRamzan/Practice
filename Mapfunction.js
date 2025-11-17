const products = [
  { name: "Mouse", price: 800, discount: 25 },
  { name: "Keyboard", price: 1200, discount: 15 },
  { name: "Headphones", price: 950, discount: 30 },
  { name: "Monitor", price: 15000, discount: 10 },
  { name: "USB Cable", price: 400, discount: 5 },
  { name: "Charger", price: 850, discount: 22 },
  { name: "Webcam", price: 3000, discount: 35 },
  { name: "Pen Drive", price: 600, discount: 18 },
  { name: "Speakers", price: 900, discount: 28 },
  { name: "Laptop Stand", price: 1300, discount: 20 },
];

const toalPrice = products.reduce((acc, rate) => acc + rate.price, 0);
const itemList = products.map((item) => ({
  item: item.name,
  rate: item.price,
}));
itemList.push({
  item: "Total",
  rate: toalPrice,
});
console.table(itemList);
