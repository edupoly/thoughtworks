self.onmessage = () => {
  let sum = 0;
  let a = 1,
    b = 500000000;
  for (var i = a; i <= b; i++) {
    sum += i;
  }

  self.postMessage(sum);
};
