const orders = [
  { id: 101, total: 2500, status: "completed" },
  { id: 102, total: 8000, status: "pending" },
  { id: 103, total: 4500, status: "cancelled" },
  { id: 104, total: 12000, status: "completed" },
  { id: 105, total: 6000, status: "pending" },
  { id: 106, total: 3000, status: "processing" },
  { id: 107, total: 10000, status: "pending" },
  { id: 108, total: 4000, status: "completed" },
  { id: 109, total: 9000, status: "pending" },
  { id: 110, total: 2000, status: "processing" },
];
console.log("\n\n This is find Method");

let pendOrder = orders.find(
  (order) => order.status === "cancelled" && order.total < 5000
);
console.log(pendOrder);
// ..............................................................
console.log("\n\n This is filter Method");

let pndOrder = orders.filter(
  (order) => order.status === "pending" && order.total < 9000
);
console.log(pndOrder);
