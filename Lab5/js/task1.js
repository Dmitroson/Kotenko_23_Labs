console.log("1. Знайти остачу від ділення першої цифри на останню у заданому 5-ти цифровому натуральному числі.");

let inputNumber = prompt("Введіть п'ятицифрове число: ");
if (isValidInputData(inputNumber)) {
    let firstDigit = inputNumber[0];
    let lastDigit = inputNumber[4];

    console.log(inputNumber);
    console.log(firstDigit % lastDigit);
} else {
    console.log('Некоректні дані');
}

confirm("Ви хочете перейти до розв’язку наступної задачі?");

function isValidInputData(inputData) {
    if (inputData.length != 5 || !isNumber(+inputData))
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