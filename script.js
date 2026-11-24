let currentQuestion = 0;
let xp = 0;

const questionElement =
document.getElementById("question");

questionElement.textContent =
questions[currentQuestion].question;

function checkAnswer() {

    const userAnswer =
    document.getElementById("answer")
    .value
    .toLowerCase();

    const correct =
    questions[currentQuestion]
    .answers
    .some(answer =>
        userAnswer.includes(answer)
    );

    const result =
    document.getElementById("result");

    if(correct) {

        result.textContent =
        "✅ Korrekt! +10 XP";

        xp += 10;

    } else {

        result.textContent =
        "❌ Forkert";
    }

    document.getElementById("xp")
    .textContent = xp;

    currentQuestion++;

    if(currentQuestion < questions.length) {

        setTimeout(() => {

            questionElement.textContent =
            questions[currentQuestion]
            .question;

            document
            .getElementById("answer")
            .value = "";

            result.textContent = "";

        }, 1000);

    } else {

        setTimeout(() => {

            questionElement.textContent =
            "🎉 Eksamen færdig!";

            result.textContent =
            "Samlet XP: " + xp;

        }, 1000);
    }
}
