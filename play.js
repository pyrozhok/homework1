let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let userInput = prompt('угадай число от 1 до 100:');

function checkGuess(){

if (userInput < randomNumber) {
                alert ('Загаданное число больше.');
            } else if (userInput > secretNumber) {
                alert ('Загаданное число меньше.');
            } else {
                alert ('Поздравляю! Ты угадал число ${randomNumber}!');
                
	}
}