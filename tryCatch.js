try {
  let x = y + 10; // y defined nahi hai → error
  console.log("This line will not run");
} catch (error) {
  console.log("Error caught:", error.message);
}

console.log("Program still running...");
