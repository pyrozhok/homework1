const words = ["камень", "ножницы", "бумага"];

function play() {
    let userChoice = prompt ('выбери слово "камень", "ножницы", "бумага"');
    let randomChoice = Math.floor(Math.random() * words.length);

    let pcChoice = words[randomChoice];

    if ((userChoice.toLowerCase() === 'камень' && pcChoice === 'ножницы')
        || (userChoice.toLowerCase() === 'ножницы' && pcChoice === 'бумага')
        || (userChoice.toLowerCase() === 'бумага' && pcChoice === 'камень')) {
            alert (`Поздравляем!!!\n Вы победили!!!\n ПК ответил: ${pcChoice}\n Ваш ответ: ${userChoice} `)
    } else if (userChoice.toLowerCase() === pcChoice) {
        alert (`У вас ничья)))\n ПК ответил: ${pcChoice}\n Ваш ответ: ${userChoice}`)
    } else 
    alert (`Победа ПК!!!\n ПК ответил: ${pcChoice}\n Ваш ответ: ${userChoice}`);

}



