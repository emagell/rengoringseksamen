let currentQuestion = 0;
let xp = 0;

let selectedQuestions = [];
let currentCategory = "";

function startCategory(category){

    currentCategory = category;

    selectedQuestions = [...categories[category]];

    selectedQuestions.sort(() => Math.random() - 0.5);

    currentQuestion = 0;

    document.getElementById("menu").style.display = "none";

    document.getElementById("quiz").style.display = "block";

    document.getElementById("xp").innerHTML = xp;

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
            "✅ Korrekt (+10 XP)";

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

function showResults(){

    document.getElementById("questionCounter").innerHTML = "";

    document.getElementById("question").innerHTML =
        "🎉 Kategori færdig!";

    document.getElementById("options").innerHTML = "";

    document.getElementById("correctAnswer").innerHTML = "";

    document.getElementById("result").innerHTML =
        `Du har ${xp} XP`;

    document.getElementById("explanation").innerHTML =
        "Godt arbejde!";

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
}
