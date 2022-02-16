const arr = [1, 2, 3, 4, 5];

const newArr = arr.reduce((acc, pre) => {
  if (pre % 2 === 0) {
    acc.push(pre * 2);
  }
  return acc;
}, []);
console.log(newArr);

const res = arr.filter((a) => a % 2 === 0);

console.log(res);
