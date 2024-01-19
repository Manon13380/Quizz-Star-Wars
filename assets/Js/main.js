let questionObjOne = {
    question: "Combien de film Star Wars ont ete réalises par Georges Lucas ? ",
    responses: [" 1", "2", "4", "6"],
};
questionObjOne.goodAnswer = questionObjOne.responses[2];

let questionObjTwo = {
    question: "D'ou venaient les anges auxquels Anakin faisait allusion en les comparant a Padmee dans La menace Fantome?",
    responses: ["Naboo", "Tatooine", "Lunes de Yego", "Lune forestière d'Endor"],
};
questionObjTwo.goodAnswer = questionObjTwo.responses[2];

let questionObjThree = {
    question: "Quelle est l'espece de l'Inquisiteur?",
    responses: ["Toydarien", "Sakoan", "Zabrak", "Pau'an"],
};
questionObjThree.goodAnswer = questionObjThree.responses[3];

let questionObjFour = {
    question: "Sur quel monde est ne l'ordre Jedi?",
    responses: ["Coruscant", "Ossus", "Tython", "Dantooine"],
};
questionObjFour.goodAnswer = questionObjFour.responses[2];

let questionObjFive = {
    question: "Quel cristal n'est pas associe a la conception du sabre-laser?",
    responses: ["Le cristal Adegan", "Le cristal Bondar", "Le cristal Arius", "Le cristal Kaiburr"],
};
questionObjFive.goodAnswer = questionObjFive.responses[2];

let tableau = [questionObjOne, questionObjTwo, questionObjThree, questionObjFour, questionObjFive];
let score = 0;
let index = 0;
let arrayIndex = randomIndex(tableau);



function randomIndex(arr) {
    let indexForRandom = 0;
    let arrayShuffle = [];
    while (arrayShuffle.length != arr.length) {
        indexForRandom = randomize(0, (arr.length - 1));
        if (arrayShuffle.indexOf(indexForRandom) == -1) {
            arrayShuffle.push(indexForRandom);
        }
    }
    return arrayShuffle
}

function reset() {
    score = 0;
    index = 0;
    arrayShuffle = [];
    indexForRandom = 0;
    document.querySelector("#result").innerHTML = "";
    sentence = ''
    document.getElementById("question").style.fontFamily = "Dhurjati"
    document.getElementById("numbQuestion").style.fontFamily = "Dhurjati"
    document.getElementById("numbQuestion").style.marginBottom = "none"
    document.getElementById('restart').style.display = "none";
    displayQuestion()
}

function displayQuestion() {
    console.log(tableau[arrayIndex[index]]);
    document.querySelector('#question').innerHTML = tableau[arrayIndex[index]].question;
    document.querySelector('#numbQuestion').innerHTML = `Question N° ${index + 1}`;
    document.querySelector('#point').innerHTML = `${score} / ${index}`
    let interarr = randomIndex(tableau[arrayIndex[index]].responses)
    tableau[arrayIndex[index]].responses.forEach((el, iterator) => {
        document.querySelectorAll(".response")[interarr[iterator]].innerHTML = el;
    })
}

function nextQuestion() {
    index++;
    displayQuestion()
}

function validation(el) {
    let sentence = ''
    if (el.innerHTML == tableau[arrayIndex[index]].goodAnswer) {
        score++
        document.querySelector('#point').innerHTML = `${score} / ${index + 1}`
        document.querySelector("#result").innerHTML = "Bonne Réponse !";
        document.getElementById("result").style.color = "darkgreen";
    }
    else {
        document.querySelector('#point').innerHTML = `${score} / ${index + 1}`
        document.querySelector("#result").innerHTML = "Mauvaise réponse! La bonne réponse est " + tableau[arrayIndex[index]].goodAnswer;
        document.getElementById("result").style.color = "red ";
    }
    if (index == 4) {
        switch (score) {
            case (0):
                sentence = "Tu vas rentrer chez toi et penser à ton avenir.";
                break;
            case (1):
                sentence = "Tes faibles talents ne font pas le poids face à la puissance du côté obscur.";
                break;
            case (2):
                sentence = "Tu es un Jeune Padawan.";
                break;
            case (3):
                sentence = "Tu es un Padawan.";
                break;
            case (4):
                sentence = "Tu fais partie du conseil mais nous ne te donnons pas le rang de maître.";
                break;
            default:
                sentence = "Tu es un maître Jedi.";
                break;
        }
        document.querySelector('#question').innerHTML = sentence;
        document.getElementById("question").style.fontFamily = "StarWars"
        document.querySelector('#numbQuestion').innerHTML = ` ${score} bonne(s) réponse(s) sur ${index + 1} :`;
        document.getElementById("numbQuestion").style.fontFamily = "StarWars"
        document.getElementById("numbQuestion").style.marginBottom = "0"
        document.getElementById('restart').style.display = "block";
    }
    nextQuestion()
}

displayQuestion()

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
