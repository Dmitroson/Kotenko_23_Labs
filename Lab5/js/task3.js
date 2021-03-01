let number = +prompt("Введіть число: ");
let startNumber = number;

let simpleMultipliers = [];
let currentSimpleMultiplier = 2;
while (number !== 1) {
    if (number % currentSimpleMultiplier === 0) {
        number /= currentSimpleMultiplier;
        simpleMultipliers = [...simpleMultipliers, currentSimpleMultiplier];
        currentSimpleMultiplier = 2;
    } else {
        currentSimpleMultiplier++;
    }
}

console.log("3. Скласти програму розкладу числа на прості множники.");
console.log(`Розклад числа ${startNumber} на прості множники: `, formatOutput(simpleMultipliers));

function formatOutput(multipliers) {
    let skip = true;
    let output = '';
    for (let multiplier of multipliers) {
        if (skip) {
            skip = false;
            output += multiplier;
        } else {
            output += ` * ${multiplier}`;
        }
    }
    return output;
}