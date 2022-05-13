var qButton1 = document.getElementById("question1")
var qButton2 = document.getElementById("question2")
var qButton3 = document.getElementById("question3")
var qButton4 = document.getElementById("question4")

var qListEl = document.getElementById("questionList")
var startButton = document.getElementById("startButton")
var questionText = document.getElementById("questionText")
var questionList = document.getElementById("questionList")
var middle = document.getElementById("middle")
var secondMiddle = document.getElementById("secondMiddle")
var questionBody = document.getElementById("questionBody")

bigIndex = 0

var rightAnswerButton = ""
var rightAnswer = ""

var questionArray = []
qButtonArray = [qButton1, qButton2, qButton3, qButton4]

var seoQuestion = [
    "What does SEO stand for?",
    "Sorry! Elephants Onery",
    "Search Engine Optimization       ",
    "Salubrious Eel Oddity",
    "Savage Entitled Ombudsman",
]

var javaQuestion = [
    "Who developed javascript?",
    "Grigory Rasputin",
    "Brandon Eich       ",
    "Old Man Peabody",
    "Pierre Gustave Toutant Beauregard"
]

var oopQuestion = [
    "What does OOP stand for?",
    "Only Our Potatoes",
    "Onward, or Perish!",
    "Owls, Omens, Premonitions",
    "Object-oriented Programming       "
]

var loopQuestion = [
    "Which loop is the most infuriating?",
    "The for loop",
    "The if/else loop",
    "The switch",
    "They are equally so       "
]



function isRight(right) {
    return right.includes("       ")
}

function appendQuestions(a) {
    
    function qToQ() {
        qButtonArray[0].textContent = a[1]
        qButtonArray[1].textContent = a[2]
        qButtonArray[2].textContent = a[3]
        qButtonArray[3].textContent = a[4]
        

    }
    questionBody.textContent = a[0]
    questionList.style.display = "flex";

    a.forEach(qToQ)
    console.log(qButtonArray, a)
    
    rightAnswer = a.find(isRight)
    console.log(rightAnswer)
    console.log(a)
    console.log(a.indexOf(rightAnswer))
    goodindex = a.indexOf(rightAnswer)
    console.log("good index" , goodindex)
    
    console.log(bigIndex)
    qButtonArray[goodindex-1].addEventListener("click", throughQuestions)
}
var allQuestions = [seoQuestion, javaQuestion, oopQuestion, loopQuestion]


function waitFor () {
    console.log("wait")
   

}

function throughQuestions() {
    bigIndex++
    appendQuestions(allQuestions[bigIndex])
    }


function startListen(a, b) {
    a.addEventListener("click", b)
}

function questionOne() {
    middle.style.visibility = "hidden"
    startButton.style.display = "none"
    appendQuestions(seoQuestion)
}

startButton.addEventListener("click", questionOne)

