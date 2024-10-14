function text() {
    let userInput = prompt (' Введи любой текст');
    let newText = userInput.split('').reverse().join('');
    alert (`Твой текст ${newText}`)
}