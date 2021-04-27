let block1 = document.querySelector('.first-block');
let block2 = document.querySelector('.second-block');
let block3 = document.querySelector('.third-block');
let block4 = document.querySelector('.fourth-block');
let block5 = document.querySelector('.fifth-block');
let block6 = document.querySelector('.sixth-block');

let task2Button = document.querySelector('#task2');
let task3Button = document.querySelector('#task3');
let task4Button = document.querySelector('#task4');

const task4CookieResult = "task4Result";

(function () {
    let cookie = getCookie(task4CookieResult);
    if (!cookie)
        return;

    if (confirm(`Delete cookie 'task4Result: ${getCookie(task4CookieResult)}'?`))
        setCookie(task4CookieResult, null);
})();

function task2() {
    let textBlock1 = block1.querySelector('.text');
    let textBlock6 = block6.querySelector('.text');

    let tempText = textBlock1.textContent;
    textBlock1.textContent = textBlock6.textContent;
    textBlock6.textContent = tempText;
}

function task3() {
    let element = document.querySelector('.third-block');
    element.innerHTML = "";

    generateForm('.third-block', 2, "Enter diagonal");

    let submitButton = document.querySelector('#submitTaskButton');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (!element.querySelector('#result')) {
            let inputFields = element.querySelectorAll('form input[type=text]');
            let values = [];
            for (let input of inputFields) {
                values = [...values, +input.value];
            }
            let result = values.reduce((a, b) => a * b) * 0.5;

            let resultElement = document.createElement('div');
            resultElement.id = "result";
            resultElement.innerText = "Rhombus area: " + result;
            element.appendChild(resultElement);
        }
    });
}

function task4() {
    let element = document.querySelector('.third-block');
    element.innerHTML = "";

    generateForm('.third-block', 3, "Enter side");

    let submitButton = document.querySelector('#submitTaskButton');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        let inputFields = element.querySelectorAll('form input[type=text]');
        let values = [];
        for (let input of inputFields) {
            values = [...values, +input.value];
        }
        let a = values[0];
        let b = values[1];
        let c = values[2];
        if (a + b > c && a + c > b && b + c > a)
            setCookie(task4CookieResult, true);
        else
            setCookie(task4CookieResult, false);

        alert(getCookie(task4CookieResult))
        location.reload();
    });
}

function generateForm(containerSelector, fieldsQuantity, inputPlaceholderPattern) {
    let container = document.querySelector(containerSelector);
    if (container.hasChildNodes())
        return;

    let form = document.createElement('form');
    container.appendChild(form);

    for (let i = 0; i < fieldsQuantity; i++) {
        let input = document.createElement('input');
        input.placeholder = inputPlaceholderPattern + " " + (i + 1);
        input.type = "text";
        form.appendChild(input);
    }
    let submitButton = document.createElement('input');
    submitButton.id = "submitTaskButton";
    submitButton.type = "submit";
    form.appendChild(submitButton);
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

task2Button.addEventListener('click', task2);
task3Button.addEventListener('click', task3);
task4Button.addEventListener('click', task4);