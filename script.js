let currentQuestion = 0;
let xp = 0;

function loadQuestion(){

    if(currentQuestion >= questions.length){

        document.getElementById("question").innerHTML =
        "🎉 Eksamen færdig!";

        document.getElementById("options").innerHTML =
        "";

        document.getElementById("result").innerHTML =
        `Samlet XP: ${xp}`;

        document.getElementById("correctAnswer").innerHTML =
        "";

        document.getElementById("explanation").innerHTML =
        "";

        document.getElementById("nextButton").style.display =
        "none";

        return;
    }

    const q = questions[currentQuestion];

    document.getElementById("question").innerHTML =
    q.question;

    let html = "";

    q.options.forEach((option,index)=>{

        html += `
        <button onclick="checkAnswer(${index})">
            ${option}
        </button>
        <br>
        `;
    });

    document.getElementById("options").innerHTML =
    html;
}

function checkAnswer(choice){

    const q =
    questions[currentQuestion];

    const buttons =
    document.querySelectorAll("#options button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if(choice === q.correct){

        document.getElementById("result").innerHTML =
        "✅ Korrekt! +10 XP";

        xp += 10;

    }else{

        document.getElementById("result").innerHTML =
        "❌ Forkert";
    }

    document.getElementById("correctAnswer").innerHTML =
    "Rigtigt svar: " +
    q.options[q.correct];

    document.getElementById("explanation").innerHTML =
    q.explanation;

    document.getElementById("xp").innerHTML =
    xp;

    document.getElementById("nextButton").style.display =
    "inline-block";
}

function nextQuestion(){

    currentQuestion++;

    document.getElementById("result").innerHTML = "";

    document.getElementById("correctAnswer").innerHTML = "";

    document.getElementById("explanation").innerHTML = "";

    document.getElementById("nextButton").style.display =
    "none";

    loadQuestion();
}

loadQuestion();
