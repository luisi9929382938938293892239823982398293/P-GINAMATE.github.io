function checkAnswers() {
    const correctAnswers = ['c', 'b', 'c', 'c', 'd'];
    let score = 0;

    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    for (let i = 0; i < correctAnswers.length; i++) {
        const question = `q${i + 1}`;
        const userAnswer = form.elements[question].value;
        if (userAnswer === correctAnswers[i]) {
            score++;
        }
    }

    resultDiv.textContent = `Tu puntaje es: ${score} de ${correctAnswers.length}`;
}