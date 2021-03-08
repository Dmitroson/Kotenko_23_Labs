console.log("4. Знайти НСК двох двоцифрових натуральних чисел.");

let number1 = prompt("Введіть перше число: ");
let number2 = prompt("Введіть друге число: ");

if (isValidInputData([number1, number2])) {
    const gcd = (a, b) => {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    };

    let lcm = number1 / gcd(number1, number2) * number2;

    console.log(number1, number2);
    console.log("НСК: ", lcm);
} else {
    console.log('Некоректні дані');
}

function isValidInputData(inputData) {
    for (let element of inputData) {
        if (!isValidElement(+element))
            return false;
    }
    return true;

    function isValidElement(element) {
        if (!isNumber(element))
            return false;
        return true;
    }
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