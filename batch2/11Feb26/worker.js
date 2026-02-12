self.onmessage = (e) => {
  const { a, b } = e.data;
  let sum = 0;
  for (i = a; i <= b; i++) {
    sum += i;
  }
  console.log("hammayyah ::");
  self.postMessage(sum.toString());
};

// // worker.js
// self.onmessage = function (e) {
//   const { a, b } = e.data;
//   let sum = 0n; // Using BigInt for accuracy

//   // The heavy loop stays here, off the main thread
//   for (let i = BigInt(a); i <= BigInt(b); i++) {
//     sum += i;
//   }

//   // Send the result back to the main script
//   self.postMessage(sum.toString());
// };
