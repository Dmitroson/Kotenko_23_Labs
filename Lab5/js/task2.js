console.log("2. На площині задано чотирикутник координатами своїх вершин. Визначити найбільшу з його сторін (її довжину).");

let A = inputCoordinates("Введіть координати першої точки: ");
let B = inputCoordinates("Введіть координати другої точки: ");
let C = inputCoordinates("Введіть координати третьої точки: ");
let D = inputCoordinates("Введіть координати четвертої точки: ");

if (isValidInputData([A, B, C, D])) {
    let a = calculateDistance(A, B);
    let b = calculateDistance(B, C);
    let c = calculateDistance(C, D);
    let d = calculateDistance(D, A);

    let largestSide = Math.max(a, b, c, d);
    console.log(A, B, C, D);
    console.log("Довжина найбільшої сторони чотирикутника: ", largestSide);
} else {
    console.log('Некоректні дані');
}


confirm("Ви хочете перейти до розв’язку наступної задачі?");

function inputCoordinates(message) {
    let coords = prompt(message).split(' ');
    return {
        x: coords[0],
        y: coords[1]
    };
}

function calculateDistance(point1, point2) {
    let distance = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    return distance;
}

function isValidInputData(inputData) {
    for (let element of inputData) {
        if (!isValidElement(element))
            return false;
    }
    return true;

    function isValidElement(element) {
        if (!isNumber(+element.x) || !isNumber(+element.y))
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