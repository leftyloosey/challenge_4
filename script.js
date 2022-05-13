//get elements and query selectors and variables 

var qButton1 = document.getElementById("question1")
var qButton2 = document.getElementById("question2")
var qButton3 = document.getElementById("question3")
var qButton4 = document.getElementById("question4")

var timerDisplay = document.getElementById("timer")
var qListEl = document.getElementById("questionList")
var startButton = document.getElementById("startButton")
var questionText = document.getElementById("questionText")
var questionList = document.getElementById("questionList")
var middle = document.getElementById("middle")
var secondMiddle = document.getElementById("secondMiddle")
var questionBody = document.getElementById("questionBody")

var liTag = document.createElement("p")

var bigIndex = 0
timer = 60
var rightAnswer = ""

var questionArray = []
qButtonArray = [qButton1, qButton2, qButton3, qButton4]

// here be the raw question data

var seoQuestion = [
    "What does SEO stand for?",
    "Sorry! Elephants Onery",
    "Search Engine Optimization       ",
    "Salubrious Eel Oddity",
    "Savage Entitled Ombudsman",
]

var javaQuestion = [
    "Who developed javascript?",
    "Grigori Rasputin",
    "Brandon Eich       ",
    "Old Man Peabody",
    "Pierre Gustave Toutant Beauregard"
]

var oopQuestion = [
    "What does OOP stand for?",
    "Only Our Potatoes",
    "Onward, Or Perish!",
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

var cssQuestion = [
    "What does CSS stand for?",
    "Certified Stamp Seller",
    "Cranial Stop Serum",
    "Cash So Soggy",
    "Cascading Style Sheet"
]

// and all the functions here.

function removeChild() {
    questionText.removeChild(liTag)
}

function isRight(right) {
    return right.includes("       ")
}

function startTimer() {
    timerDisplay.style.visibility = "visible"
    timerDisplay.textContent = timer 
    
    function countDown() {
        timer = timer-1
        
        timerDisplay.textContent = timer
        if (timer <= 0 ) {
            console.log("fail")
            questionBody.appendChild(liTag)
            liTag.textContent = "find a different career"
            setTimeout(removeChild, 2000)
            return
        }
    }
    setInterval(countDown, 1000)

   
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
    goodIndex = a.indexOf(rightAnswer)
    console.log("good index" , goodIndex)
    
    console.log(bigIndex)

    qButtonArray[0].removeEventListener("click", throughQuestions)
    qButtonArray[1].removeEventListener("click", throughQuestions)
    qButtonArray[2].removeEventListener("click", throughQuestions)
    qButtonArray[3].removeEventListener("click", throughQuestions)


    qButtonArray[0].addEventListener("click", wrongQuestion)
    qButtonArray[1].addEventListener("click", wrongQuestion)
    qButtonArray[2].addEventListener("click", wrongQuestion)
    qButtonArray[3].addEventListener("click", wrongQuestion)
    
    console.log([goodIndex-1])
    qButtonArray[goodIndex-1].removeEventListener("click", wrongQuestion)
    qButtonArray[goodIndex-1].addEventListener("click", throughQuestions)
   
   
}
var allQuestions = [seoQuestion, javaQuestion, oopQuestion, loopQuestion, cssQuestion]

function wrongQuestion() {
    timer = timer - 10 
    
    liTag.textContent = " no. No. NO "
    liTag.setAttribute("style", "font-weight: bold;")
    questionText.appendChild(liTag)
  
    setTimeout(removeChild, 850)
}

function throughQuestions() {
    bigIndex++
    appendQuestions(allQuestions[bigIndex])
}

function questionOne() {
    middle.style.visibility = "hidden"
    startButton.style.display = "none"
    startTimer()
    appendQuestions(seoQuestion)
}





  

startButton.addEventListener("click", questionOne)

