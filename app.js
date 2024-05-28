let htmlQuiz = [
    {
        que: "1. Who is making web Standards?",
        opt1: "Google",
        opt2: "Microsoft",
        opt3: "World Wide Web",
        opt4: "Mozrella",
        ans: "World Wide Web"
    },

    {
        que: "2. What is the abbrevation of HTML?",
        opt1: "Hyper Text Markup Language",
        opt2: "Hyper Info Markup Language",
        opt3: "Hyper test Markup Language",
        opt4: "Hyper Tend Markup Language",
        ans: "Hyper Text Markup Language"
    },

    {
        que: "3.How many heading tags in HTML?",
        opt1: "1",
        opt2: "2",
        opt3: "4",
        opt4: "6",
        ans: "6"
    }
]


let questionCount = 0

let score = 0

let question = document.getElementById("question")
let intput_1 = document.getElementById("option_1")
let intput_2 = document.getElementById("option_2")
let intput_3 = document.getElementById("option_3")
let intput_4 = document.getElementById("option_4")
let label_1 = document.getElementById("val_1")
let label_2 = document.getElementById("val_2")
let label_3 = document.getElementById("val_3")
let label_4 = document.getElementById("val_4")
let answer = document.getElementsByName("answer")// for inputs 

function renderQuestion() {
    question.innerHTML = htmlQuiz[questionCount].que
    label_1.innerHTML = htmlQuiz[questionCount].opt1
    label_2.innerHTML = htmlQuiz[questionCount].opt2
    label_3.innerHTML = htmlQuiz[questionCount].opt3
    label_4.innerHTML = htmlQuiz[questionCount].opt4

    intput_1.value = htmlQuiz[questionCount].opt1 // for scoring
    intput_2.value = htmlQuiz[questionCount].opt2
    intput_3.value = htmlQuiz[questionCount].opt3
    intput_4.value = htmlQuiz[questionCount].opt4

}

function deSelect() {

    for (i = 0; i < answer.length; i++) {

        answer[i].checked = false;

    }

}


function next() {

    let radioBtn = false

    for (i = 0; i < answer.length; i++) {

        if (answer[i].checked) {

             radioBtn = true;

            if (answer[i].value == htmlQuiz[questionCount].ans) {
                score++
                console.log(score)
            }


        }
    }

    if( radioBtn === false){

        alert("Please selecr any option")
    }

    else if (questionCount < htmlQuiz.length - 1) { //.length-1 for last index number
        questionCount++
        renderQuestion()

        deSelect()

    }

}


window.onload = renderQuestion()






