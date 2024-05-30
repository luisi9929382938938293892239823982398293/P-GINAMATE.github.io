function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const box = event.target.closest('.box');
    if (box) {
        const img = document.getElementById(data);
        if (img) {
            box.innerHTML = '';
            box.appendChild(img);
        }
    }
}

function checkAnswers() {
    const correctAnswers = {
        box1: "img1",
        box2: "img2",
        box3: "img3"
    };

    let correct = 0;
    let incorrect = false;

    for (const boxId of Object.keys(correctAnswers)) {
        const box = document.getElementById(boxId);
        const img = box.querySelector('img');
        if (img) {
            if (img.id === "img4") {
                incorrect = true;
                break;
            } else if (img.id === correctAnswers[boxId]) {
                correct++;
            }
        }
    }

    const feedback = document.getElementById("feedback");
    if (incorrect) {
        feedback.textContent = "¡Respuesta incorrecta! Una imagen errónea está en un cuadro.";
        feedback.style.color = "red";
    } else if (correct === Object.keys(correctAnswers).length) {
        feedback.textContent = "¡Todas las respuestas son correctas!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Tienes ${correct} respuesta(s) correcta(s). Inténtalo de nuevo.`;
        feedback.style.color = "red";
    }
}