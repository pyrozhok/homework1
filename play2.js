function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num1 = randomNumber(1, 10); 
let num2 = randomNumber(1, 10); 

let task;
let answer;

switch (operation) {
    case 1:
        task = `${num1} + ${num2}`;
        answer = num1 + num2;
    case 2:
        task = `${num1} - ${num2}`;
        answer = num1 - num2;
    case 3:
        task = `${num1} * ${num2}`;
        answer = num1 * num2;
    case 4:
        task = `${num1 * num2} / ${num2}`; // Чтобы избежать деления на ноль и получить целое число
        answer = num1;
}

function userAsk() {
    let userInput = prompt('Решите задачку');

    if (userInput === answer) {
        alert('Поздравляю,вы ответили верно');
    } else {
        alert('Вы ответили неверно');
    }
}

