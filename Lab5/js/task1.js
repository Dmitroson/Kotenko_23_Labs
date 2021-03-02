let inputNumber = prompt("Введіть п'ятицифрове число: ");
let firstDigit = inputNumber[0];
let lastDigit = inputNumber[4];

console.log("1. Знайти остачу від ділення першої цифри на останню у заданому 5-ти цифровому натуральному числі.");
console.log(firstDigit, lastDigit);
console.log(firstDigit % lastDigit);

confirm("Ви хочете перейти до розв’язку наступної задачі?");