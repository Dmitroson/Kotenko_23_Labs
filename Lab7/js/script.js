let block1 = document.querySelector('.first-block');
let block2 = document.querySelector('.second-block');
let block3 = document.querySelector('.third-block');
let block4 = document.querySelector('.fourth-block');
let block5 = document.querySelector('.fifth-block');
let block6 = document.querySelector('.sixth-block');

let task2Button = document.querySelector('#task2');

function task2() {
    let textBlock1 = block1.querySelector('.text');
    let textBlock6 = block6.querySelector('.text');

    let tempText = textBlock1.textContent;
    textBlock1.textContent = textBlock6.textContent;
    textBlock6.textContent = tempText;
}

function task3() {

}

task2Button.addEventListener('click', task2);