// recursion approach

const recursionFact = (num) => {
  if (num <= 1) {
    return 1;
  }

  return num * recursionFact(num - 1);
};
console.log(recursionFact(4));
