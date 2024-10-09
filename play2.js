
// function userAsk() {

//     function randomNumber() {
//         return Math.floor(Math.random() * 10);
//     }
//     let num1 = randomNumber(); 
//     let num2 = randomNumber(); 

    
    
//     function difference() {
//          return `${num1} - ${num2}`;  
//       }
//       let answer = alert(`Реши задачку: ${difference()}`);

//       const result = num1 - num2;

//       const userInput = +prompt('Ваш ответ?');

//     if ( userInput === result) {
//         alert('Молодец,ответил правильно!!!');
//     } else {
//         alert('Неправильно((((');
//     }
// }

function userAsk() {
    
    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }
    let num1 = randomNumber(); 
    let num2 = randomNumber(); 

  
    const signs = ['+', '-', '*', '/'];

   
    function randomSign() {
        const randomIndex = Math.floor(Math.random() * signs.length);
        return signs[randomIndex];
    }
    let sign = randomSign();
    
    function difference() {
        return `${num1} ${sign} ${num2}`;  
    }

    alert(`Реши задачку: ${difference()}`);

       function calculateResult(num1, num2, sign) {
        switch (sign) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
        }
    }
    const result = calculateResult(num1, num2, sign);

      const userInput = +prompt('Ваш ответ?');

    if ( userInput === result) {
        alert('Молодец,ответил правильно!!!');
    } else {
        alert('Неправильно((((');
    }
}