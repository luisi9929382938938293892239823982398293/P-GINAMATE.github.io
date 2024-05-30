function checkAnswers() {
    const answers = {
        answer1: "4",
        answer2: "2.2 peces",
        answer3: "la mama de pablo"
    };

    let correct = 0;

    for (const [key, value] of Object.entries(answers)) {
        const userAnswer = document.getElementById(key).value.trim().toLowerCase();
        if (userAnswer === value.toLowerCase()) {
            correct++;
        }
    }

    const feedback = document.getElementById("feedback");
    if (correct === Object.keys(answers).length) {
        feedback.textContent = "¡Todas las respuestas son correctas!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Tienes ${correct} respuesta(s) correcta(s). Inténtalo de nuevo.`;
        feedback.style.color = "red";
    }
}