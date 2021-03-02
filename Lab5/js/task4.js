let number1 = prompt("Введіть перше число: ");
let number2 = prompt("Введіть друге число: ");

const gcd = (a, b) => {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

let lcm = number1 / gcd(number1, number2) * number2;

console.log("4. Знайти НСК двох двоцифрових натуральних чисел.");
console.log(number1, number2);
console.log("НСК: ", lcm);