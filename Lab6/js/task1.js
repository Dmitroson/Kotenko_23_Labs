console.log("1. З клавіатури вводиться текстовий рядок. Скласти скрипт, який замінює всі великі літери, на відповідні малі.");

let inputText = prompt("Введіть текстовий рядок: ");
if (isValidInputData(inputText)) {
    console.log(inputText);

    let resultText = inputText.toLowerCase();
    console.log(resultText);
} else {
    console.log("Некоректні дані!");
}

confirm("Ви хочете перейти до розв’язку наступної задачі?");

function isValidInputData(inputData) {
    if (!inputData)
        return false;
    return true;
}