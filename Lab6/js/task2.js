console.log("2. Обчислити степінь натурального числа рекурсивно.");

let number = prompt("Введіть натуральне число");
if (isValidInputData(number)) {
    console.log(number);

    number = +number;

} else {
    console.log("Некоректні дані!");
}

confirm("Ви хочете перейти до розв’язку наступної задачі?");

function isValidInputData(inputData) {
    if (!inputData || !isNumber(+inputData))
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