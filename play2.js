
function userAsk() {

    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }
    
    let num1 = randomNumber(); 
    let num2 = randomNumber(); 
    
    function difference() {
         return `${num1} - ${num2}`;  
      }
      let answer = alert(`Реши задачку: ${difference()}`);

      const result = num1 - num2;

      const userInput = +prompt('Ваш ответ?');

    if ( userInput === result) {
        alert('Молодец,ответил правильно!!!');
    } else {
        alert('Неправильно((((');
    }
}

