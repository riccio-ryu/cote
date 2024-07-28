let [N, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r*/g, ""));
N = parseInt(N);

// console.log(N, input);

let arr = [];

const calc = (str, num) => {
  switch (str) {
    case "add":
      if (!arr.includes(num)) arr.push(num);
      break;
    case "remove":
      if (arr.includes(num)) {
        arr = arr.filter((a) => a !== num);
      }
      break;
    case "check":
      if (arr.includes(num)) console.log(1);
      else console.log(0);
      break;
    case "toggle":
      if (arr.includes(num)) arr = arr.filter((a) => a !== num);
      else arr.push(num);
      break;
    case "all":
      arr = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ];
      break;
    case "empty":
      arr = [];
      break;

    default:
      break;
  }
};

for (const key of input) {
  let [str, num] = key.split(" ");
  num = Number(num);
  calc(str, num);
}
