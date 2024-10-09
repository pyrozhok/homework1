function text() {
    let userInput = prompt (' введи текст');
    let newText = userInput.split('').reverse().join('');
    alert (`твой тект ${newText}`)
}