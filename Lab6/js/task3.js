console.log("Напишіть гру «Вгадай число».\n" +
    "При завантаженні сторінки генерується випадкове число від 0 до 10. " +
    "Користувачу надається три спроби вгадати число. \n" +
    "При кожній перевірці видається підказка: більше чи менше. " +
    "При вгадуванні або завершенні числа спроб видається оповіщення. \n" +
    "Кількість спроб виводиться на екран. Результат для цієї задачі виводиться за допомогою команди alert()."
);

let randomNumber = +getRandomNumber(0, 10);
console.log(randomNumber);

let win = false;
for (let i = 1; i <= 3; i++) {
    let attemptNumber = prompt(`Спроба №${i}: `);
    if (isValidAttempt(attemptNumber)) {
        attemptNumber = +attemptNumber;
        if (attemptNumber == randomNumber) {
            alert(`Чудово!\nЧисло вгадане з ${i} спроби!`
            );
            win = true;
            break;
        }
        else if (attemptNumber < randomNumber && i < 3) {
            alert("Спробуйте ще раз! Згенероване число БІЛЬШЕ!\n" +
                `${3 - i == 2 ? "Залишилось 2 спроби!" : "Залишилась 1 спроба!"}`
            );
        }
        else if (attemptNumber > randomNumber && i < 3) {
            alert("Спробуйте ще раз! Згенероване число МЕНШЕ!\n" +
                `${3 - i == 2 ? "Залишилось 2 спроби!" : "Залишилась 1 спроба!"}`
            );
        }
    }
    else {
        alert("Введені дані некоректні! Спробуйте ще раз!\n" +
            `${3 - i == 2 ? "Залишилось 2 спроби!" : "Залишилась 1 спроба!"}`
        );
    }
}
if (!win) {
    alert(`На жаль, ви не відгадали згенероване число ${randomNumber}...`);
    console.log("Програш");
} else {
    console.log("Перемога");
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isValidAttempt(attemptNumber) {
    if (!attemptNumber || !isNumber(+attemptNumber))
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