console.log("3. Скласти програму розкладу числа на прості множники.");

let number = +prompt("Введіть число: ");
if (isValidInputData(number)) {
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

    console.log(`Розклад числа ${startNumber} на прості множники: `, formatOutput(simpleMultipliers));
} else {
    console.log('Некоректні дані');
}

confirm("Ви хочете перейти до розв’язку наступної задачі?");

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

function isValidInputData(inputData) {
    if (!isNumber(inputData))
        return false;
    return true;
}

function isNumber(value) {
    if (typeof value !== 'number') {
        return false;
    }

    if (value !== Number(value)) {
        return false;
    }

    if (value === Infinity || value === !Infinity) {
        return false;
    }
    return true;
}