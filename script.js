let currentQuestion = 0;

let correctAnswers = 0;
let wrongAnswers = 0;

let selectedQuestions = [];
let currentCategory = "";

function startCategory(category){

    currentCategory = category;

    selectedQuestions = [...categories[category]];

    selectedQuestions.sort(() => Math.random() - 0.5);

    currentQuestion = 0;

    correctAnswers = 0;
    wrongAnswers = 0;

    document.getElementById("menu").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    const names = {

        hygiene:"🦠 Rengøringshygiejne",
        surfaces:"🧽 Overflader & Materialer",
        chemistry:"🧪 Kemi & pH",
        sanitary:"🚽 Sanitetsrengøring",
        machines:"🚜 Maskiner & Pads",
        safety:"🛡️ Arbejdsmiljø",
        ergonomics:"💪 Ergonomi",
        insta:"📋 INSTA 800"

    };

    document.getElementById("categoryTitle").innerHTML =
        names[category];

    loadQuestion();
}

function loadQuestion(){

    if(currentQuestion >= selectedQuestions.length){

        showResults();

        return;
    }

    const q = selectedQuestions[currentQuestion];

    document.getElementById("questionCounter").innerHTML =
        `Spørgsmål ${currentQuestion + 1} / ${selectedQuestions.length}`;

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

    const q = selectedQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll("#options button");

    buttons.forEach(button => {

        button.disabled = true;

    });

    if(choice === q.correct){

        document.getElementById("result").innerHTML =
            "✅ Korrekt";

        correctAnswers++;

    }else{

        document.getElementById("result").innerHTML =
            "❌ Forkert";

        wrongAnswers++;
    }

    document.getElementById("correctAnswer").innerHTML =
        "Rigtigt svar: " +
        q.options[q.correct];

    document.getElementById("explanation").innerHTML =
        q.explanation;

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

function calculateGrade(){

    const total = selectedQuestions.length;

    const percent =
        (correctAnswers / total) * 100;

    if(percent >= 90) return "12";

    if(percent >= 75) return "10";

    if(percent >= 60) return "7";

    if(percent >= 40) return "4";

    return "02";
}

function showResults(){

    const grade =
        calculateGrade();

    document.getElementById("questionCounter").innerHTML =
        "";

    document.getElementById("question").innerHTML =
        "🎉 Kategori færdig!";

    document.getElementById("options").innerHTML =
        "";

    document.getElementById("correctAnswer").innerHTML =
        "";

    document.getElementById("result").innerHTML =

        `
        <h2>Resultat</h2>

        <p>✅ Rigtige svar: ${correctAnswers}</p>

        <p>❌ Forkerte svar: ${wrongAnswers}</p>

        <p>🏆 Karakter: ${grade}</p>
        `;

    document.getElementById("explanation").innerHTML =
        "";

    document.getElementById("nextButton").style.display =
        "none";
}

function backToMenu(){

    document.getElementById("menu").style.display =
        "block";

    document.getElementById("quiz").style.display =
        "none";

    document.getElementById("result").innerHTML = "";

    document.getElementById("correctAnswer").innerHTML = "";

    document.getElementById("explanation").innerHTML = "";

    document.getElementById("question").innerHTML = "";

    document.getElementById("options").innerHTML = "";
}
