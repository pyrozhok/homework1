const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function runQuiz(quiz){
    
    let correctAnswer = 0;

    for (let i = 0; i < quiz.length; i++) {
        let currentQuestion = quiz[i];

        alert(`${currentQuestion.question}\n ${currentQuestion.options}`);
        let userInput = +prompt ('введи номер ответа');

       if (userInput === currentQuestion.correctAnswer) {
        correctAnswer++;
    }
}
    alert(`Количество правильных ответов: ${correctAnswer}`);
}
