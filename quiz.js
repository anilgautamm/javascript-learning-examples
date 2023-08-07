const questionsobj = [
    {
        ques: "JavaScript is used for..",
        answers: ["Making website more dynamic", "Used for DOM manipulation", "Used for frontend development", "All of the above"],
        correct: "All of the above"
    },
    {
        ques: "Php stands for..",
        answers: ["Hypertext processor", "Processer hypertext", "Hypertext preprocessor language", "None of the above"],
        correct: "Hypertext preprocessor language"
    },
    {
        ques: "Reactjs is a framework of ?",
        answers: ["Frontend", "Backend", "Both", "None of the above"],
        correct: "Frontend"
    },
    {
        ques: "Css stands for",
        answers: ["Create style sheets", "Cascading style sheets", "Create static sheets", "All of the above"],
        correct: "Cascading style sheets"
    },
    {
        ques: "What is nodejs?",
        answers: ["Backend language", "Frontend language", "Both", "None of the above"],
        correct: "Backend language"
    },
    {
        ques: "Can we re-assign a value in const varaible in js",
        answers: ["No", "Yes", "Obviously yes", "Sometimes"],
        correct: "No"
    },
    {
        ques: "JavaScript invented in..",
        answers: ["1990", "2000", "1995", "1999"],
        correct: "1995"
    },
    {
        ques: "Java language is used for..",
        answers: ["Frontend", "Backend", "Both", "None of the above"],
        correct: "Backend"
    },
    {
        ques: "What is Bootstrap?",
        answers: ["Css framework", "Has built-in templates for HTML,CSS,JS", "Used to build responsive websites", "All of the above"],
        correct: "All of the above"
    },
    {
        ques: "What is DOM in JavaScript",
        answers: ["It allows us to create,remove HTML elements", "It is used for only CSS", "Both", "None of the above"],
        correct: "It allows us to create,remove HTML elements"

    }
]

const question = document.getElementById('question');
const select = document.querySelectorAll(".select");
const sec = document.getElementById('seconds');
const congo = document.getElementById('congo');
const next = document.getElementById('next')
const startdiv = document.getElementById('startdiv')
const container = document.getElementById('mycont');
const scorewrappper = document.getElementById('score')
const start = document.getElementById('start')
const options = document.getElementById('options')




var score = 0;
let counter = 0;


start.onclick = (() => {
    startdiv.style.display = "none";
    container.style.display = "flex";
    mainfunc(0)
})


const mainfunc = (counter) => {

    console.log("hii")

    question.innerText = `Q: ${questionsobj[counter].ques}`
    // for (let i = 0; i < select.length; i++) {

    options.innerHTML = `
    <button class="select"> ${questionsobj[counter].answers[0]}</button>
    <button class="select"> ${questionsobj[counter].answers[1]}</button>
    <button class="select"> ${questionsobj[counter].answers[2]}</button>
    <button class="select"> ${questionsobj[counter].answers[3]}</button>
    
    
    `
    selectanswer();

}

const selectanswer = () => {
    const select = document.querySelectorAll(".select");

    select.forEach(element => {


        element.addEventListener('click', (e) => {
            if (element.innerText == questionsobj[counter].correct) {

                next.style.display = "block"
                element.style.backgroundColor = "rgb(155, 255, 155)"
                element.style.border = "1px solid rgb(155, 255, 155)"
                element.style.color = "white";


                console.log("correct")
                next.style.display = "block";
                score += 1;
                loopdisable()
            } else {
                element.style.color = "white";
                element.style.backgroundColor = "rgb(228, 63, 63)"
                element.style.border = "1px solid rgb(228, 63, 63)"
                next.style.display = "block"
                loopdisable();
                for (let i = 0; i < select.length; i++) {
                    if (select[i].innerText == questionsobj[counter].correct) {
                        select[i].style.backgroundColor = "rgb(155, 255, 155)";
                        select[i].style.border = "1px solid rgb(155, 255, 155)"

                    }

                }
            }
        })
    });


}




const loopdisable = () => {
    const select = document.querySelectorAll(".select");

    for (let i = 0; i < select.length; i++) {
        select[i].disabled = true;
        select[i].style.color = "black";

    }
}

const nextfunc = () => {


    counter++;
    if (counter >= questionsobj.length) {
        console.log("greater")
        container.style.display = "none"
        congo.style.display = "flex";

        scorewrappper.innerHTML = `&#128081;Congratulations, You have completed your quiz&#128515; <span id="correctanswer"> You gave <strong class="innerscore">${score}</strong> correct answers out of <strong class="innerscore"style="color:red">10</strong>
        </span>
        <div id = "restart-wrapper" style="    display: flex;justify-content: center;padding: 12px 0 0 0;">
        <button id="restartbtn" style="padding:5px; font-size:17px; cursor:pointer"> Restart</button>
        </div>
        `
        congo.style.margin = "10% 0 0 39%"
        next.style.display = "none";
        const restart = document.getElementById('restartbtn')

        restart.style.display = "block";
        restart.onclick = (() => {
            container.style.display = "flex";
            congo.style.display = "none";
            counter = 0;
            mainfunc(counter)

        })
    }
    mainfunc(counter)


    next.style.display = "none"
    for (i = 0; i < select.length; i++) {
        next.style.display = "none"

        select[i].style.backgroundColor = "white";
        select[i].style.color = "black";

        select[i].style.border = "2px solid #05d9ff";
        select[i].disabled = false
        // selectfunc()
    }
    console.log(score)



}













