//getElements and query selectors and variables 

var qButton1 = document.getElementById("question1")
var qButton2 = document.getElementById("question2")
var qButton3 = document.getElementById("question3")
var qButton4 = document.getElementById("question4")

var qWrap = document.getElementById("qWrap")
var highDisplay = document.getElementById("hiscores")
var timerDisplay = document.getElementById("timer")
var qListEl = document.getElementById("questionList")
var startButton = document.getElementById("startButton")
var questionText = document.getElementById("questionText")
var questionList = document.getElementById("questionList")
var middle = document.getElementById("middle")
var secondMiddle = document.getElementById("secondMiddle")
var questionBody = document.getElementById("questionBody")
var scoreText = document.querySelector("scoreText")

var scoreArray = []
var highWin = ""
var winArray = []
var winName = ""
var gotName = ""

var pTag = document.createElement("p")
var liTag = document.createElement("p")

var scoreButton = document.createElement("button")
var againButton = document.createElement("button")
var scoreName = document.createElement("input")

var ofArrays = []

var bigInterval = 0
var score = 0
var bigIndex = 0
var timer = 60
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
    "Object-oriented Programming       ",
    "Owls, Omens, Premonitions",
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
    "Cascading Style Sheet       "
]


// startTimer has the countdown function and failing timeout condition
function startTimer() {
    timerDisplay.style.visibility = "visible"
    timerDisplay.textContent = timer 
    
    function countDown() {
        timer--
        timerDisplay.textContent = timer
        if (timer <= 0 ){failScreen()}
        
    }

    bigInterval = setInterval(countDown, 1000)
}   
function clearRestart() {
    location.reload()
    startUp()
}

// appendQuestions is one of the two main driving functions, and assigns question 
// data to the answer buttons.
function appendQuestions(a) {
    
    function qToQ() {
        qButtonArray[0].textContent = a[1]
        qButtonArray[1].textContent = a[2]
        qButtonArray[2].textContent = a[3]
        qButtonArray[3].textContent = a[4]
    }
    questionBody.textContent = a[0]
    questionList.style.display = "flex";
    questionList.style.visibility = "visible"
    questionBody.style.visibility = "visible"

    a.forEach(qToQ)
 
    rightAnswer = a.find(isRight)
    goodIndex = a.indexOf(rightAnswer)
    

    
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


// throughQuestions is the other main function. it records a win and ends the 
// game when enough wins are accrued.
function throughQuestions() {
    score++
    bigIndex++
    if (score >= 4) {winScreen()}
    appendQuestions(allQuestions[bigIndex])
}

// this one subtracts time each time a question is wrong, and registers 
// onscreen that the answer was incorrect 
function wrongQuestion() {
    timer = timer - 10 
    
    liTag.textContent = " no. No. NO "
    liTag.setAttribute("style", "font-weight: bold;")
    questionText.appendChild(liTag)
  
    setTimeout(removeChild, 600)
}

// next few are for dealing with the endgame and highscores
function failScreen() {
    questionList.style.visibility = "hidden"
    questionBody.style.display= "none"
    
    clearInterval(bigInterval)
    secondMiddle.appendChild(pTag)
    
    alert("You answered: " + score + " questions")
    liTag.textContent = "find a different career."
    questionText.appendChild(liTag)
}

function winScreen() {
    clearInterval(bigInterval)
    qWrap.style.display = "none"
    qWrap.style.visibility = "hidden"
    questionBody.style.display = "none"
    
    liTag.setAttribute("style", "font-weight: bold;")
    liTag.textContent = "you have conquered."
    secondMiddle.appendChild(liTag)
    scoreName.setAttribute("type", "text");
    secondMiddle.appendChild(scoreName)
    scoreName.style.visibility = "visible"

    scoreButton.textContent = "record a name for the board"
    secondMiddle.appendChild(scoreButton)
   
    againButton.style.visibility = "visible"
    againButton.textContent = "play again"
    secondMiddle.appendChild(againButton)

    console.log(score, timer)


    scoreButton.addEventListener("click", recordHigh)
    againButton.addEventListener("click", clearRestart)
}
    
function recordHigh() { 
    console.log(scoreName.value, score, timer)
    
    
    winArray.push(scoreName.value, score, timer)

    ofArrays.push(winArray)

    localStorage.setItem("initLocal", ofArrays)
    
    var wiki1 = localStorage.getItem("initLocal")
    
    ofArrays.push(wiki1)

    localStorage.setItem("secLocal", ofArrays)

    var wiki2 = localStorage.getItem('secLocal')

    scoreArray.push(wiki2)

    console.log(scoreArray)

    

    scoreName.value = ""
    scoreName.style.visibility = "hidden"
    secondMiddle.removeChild(scoreButton)
    
}

function removeChild() {
    questionText.removeChild(liTag)
}

function isRight(right) {
    return right.includes("       ") // the correct answer button is indicated by
                                     // this string of spaces which is hidden
                                     // onscreen
}

// initializes the game, starts the timer
function startUp() {
    middle.style.visibility = "hidden"
    startButton.style.display = "none"

    startTimer()
    appendQuestions(seoQuestion)
}


startButton.addEventListener("click", startUp)
