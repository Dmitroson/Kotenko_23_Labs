let A = inputCoordinates("Введіть координати першої точки: ");
let B = inputCoordinates("Введіть координати другої точки: ");
let C = inputCoordinates("Введіть координати третьої точки: ");
let D = inputCoordinates("Введіть координати четвертої точки: ");

let a = calculateDistance(A, B);
let b = calculateDistance(B, C);
let c = calculateDistance(C, D);
let d = calculateDistance(D, A);

let largestSide = Math.max(a, b, c, d);

console.log("2. На площині задано чотирикутник координатами своїх вершин. Визначити найбільшу з його сторін (її довжину).");
console.log("Довжина найбільшої сторони чотирикутника: ", largestSide);
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