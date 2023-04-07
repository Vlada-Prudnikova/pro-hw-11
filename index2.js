// second
function doMath(x, znak, y) {
  switch (znak) {
    case "+":
      result = x + y;
      console.log(result);
      break;
    case "-":
      result = x - y;
      console.log(result);
      break;
    case "*":
      result = x * y;
      console.log(result);
      break;
    case "/":
      result = x / y;
      console.log(result);
      break;
    case "%":
      result = x % y;
      console.log(result);
      break;
    case "^":
      result = x ** y;
      console.log(result);
      break;
    default:
      result = "mistake ";
      console.log(result);
      break;
  }
  console.log(result);
}
let result = " ";
let x = prompt("Введите x");
let y = prompt("Введите y");
x = parseFloat(x);
y = parseFloat(y);
let znak = prompt("Введите знак");
doMath(x, znak, y);
alert(result);

//first

let array = [1, "3", 5, "world", 4, 90, "hello"];
let calc = function (arr) {
  let sum = 0;
  let j = 0;
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    }
    sum += arr[i];
    j++;
  }
  value = sum / j;
  return value;
};
calc(array);
console.log(calc(array));

// third

function build() {
  mainArray = prompt("length of maim array");
  innerArray = prompt("length of inner array");
  let usersArray = [];
  for (let i = 0; i < mainArray.length; i++) {
    usersArray.push([]);
    for (let j = 0; j < innerArray.length; j++) {
      usersArray[i][j] = prompt("add a new element");
    }
  }
  return usersArray;
}
build();

//fourth
let string = "hello world";
function removeElements(string) {
  string = string.replace(/['ld']/g, "");
  return string;
}
console.log(removeElements(string));
