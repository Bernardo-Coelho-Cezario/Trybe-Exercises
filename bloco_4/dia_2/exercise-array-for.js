let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let sum = 0
let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
  result += numbers[index2];
}
console.log(result);

let average = result / numbers.length;

console.log(average);

if (average > 20) {
  console.log("Valor maior que 20")
} else {
  console.log("Valor menor ou igual a 20")
}

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}
console.log(higherNumber);