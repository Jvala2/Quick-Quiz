var timer;
var count;
var score = 0;
var names = [];

function blanketReset() {
    document.getElementById("timer").style.display="none";
    document.getElementById("quizInput").style.display="none";
    document.getElementById("enter-name").style.display="none";
    document.getElementById("buttonA").style.display="none";
    document.getElementById("buttonB").style.display="none";
    document.getElementById("buttonC").style.display="none";
    document.getElementById("buttonD").style.display="none";
    document.getElementById("submit-name").style.display="none";
    document.getElementById("scoreboard").style.display="none";
    document.getElementById("minus").textContent=""
    document.getElementById("enter-name").textContent=""
}

function saveNames() {
    
}


    document.getElementById("timer").style.display="none";
    document.getElementById("quizInput").style.display="none";
    document.getElementById("enter-name").style.display="none";
    document.getElementById("buttonA").style.display="none";
    document.getElementById("buttonB").style.display="none";
    document.getElementById("buttonC").style.display="none";
    document.getElementById("buttonD").style.display="none";
    document.getElementById("submit-name").style.display="none";
    document.getElementById("scoreboard").style.display="none";

    console.log("Is this working")
 
  


function startTimer() {
    count=100;
    timer=setInterval(function(){
        count--;
        if(count<=0){
            failQuiz();
            clearInterval(timer);

        } else {
            document.getElementById("count").textContent=count;
        }
    },1000);
};

function failQuiz() {
    document.getElementById("minus").textContent="TIME'S UP!";
    document.getElementById("quizInput").style.display="none";
    document.getElementById("enter-name").style.display="none";
    document.getElementById("buttonA").style.display="none";
    document.getElementById("buttonB").style.display="none";
    document.getElementById("buttonC").style.display="none";
    document.getElementById("buttonD").style.display="none";
    document.getElementById("submit-name").style.display="none";
};

function startQuiz() {
    blanketReset();
    document.getElementById("timer").style.display="block";
    document.getElementById("quizInput").style.display="block";
    document.getElementById("buttonA").style.display="block";
    document.getElementById("buttonB").style.display="block";
    document.getElementById("buttonC").style.display="block";
    document.getElementById("buttonD").style.display="block";
    displayQuestion1();
    startTimer();

};




function wrongAnswer1() {
    console.log(count)
    count -= 10;
    console.log("Subtract 1")
    console.log(count)
    document.getElementById("minus").textContent="Wrong Answer"
    displayQuestion2();
};

function rightAnswer1() {
    document.getElementById("minus").textContent="Correct"
    console.log(score)
    score += 1;
    console.log("Add 1")
    console.log(score)
    displayQuestion2();
};

function displayQuestion1() {

    document.getElementById("quizquestion").textContent="Commonly used data types DO NOT include:"
    document.getElementById("buttonA").textContent="strings"
    document.getElementById("buttonB").textContent="booleans"
    document.getElementById("buttonC").textContent="alerts"
    document.getElementById("buttonD").textContent="numbers"
    document.getElementById("buttonA").addEventListener("click", wrongAnswer1)
    document.getElementById("buttonB").addEventListener("click", wrongAnswer1)
    document.getElementById("buttonC").addEventListener("click", rightAnswer1)
    document.getElementById("buttonD").addEventListener("click", wrongAnswer1)
    
};




function wrongAnswer2() {
    console.log(count)
    count -= 10;
    console.log("Subtract 2")
    console.log(count)
    document.getElementById("minus").textContent="Wrong Answer"
    displayQuestion3();
};

function rightAnswer2() {
    document.getElementById("minus").textContent="Correct"
    console.log(score)
    score += 1;
    console.log("Add 2")
    console.log(score)
    displayQuestion3();
};

function displayQuestion2() {

    document.getElementById("buttonA").removeEventListener("click", wrongAnswer1)
    document.getElementById("buttonB").removeEventListener("click", wrongAnswer1)
    document.getElementById("buttonC").removeEventListener("click", rightAnswer1)
    document.getElementById("buttonD").removeEventListener("click", wrongAnswer1)
    document.getElementById("quizquestion").textContent="The condition in an if/else statement is enclosed within_______."
    document.getElementById("buttonA").textContent="quotes"
    document.getElementById("buttonB").textContent="curly brace"
    document.getElementById("buttonC").textContent="parentheticals"
    document.getElementById("buttonD").textContent="square brace"
    document.getElementById("buttonA").addEventListener("click", wrongAnswer2)
    document.getElementById("buttonB").addEventListener("click", wrongAnswer2)
    document.getElementById("buttonC").addEventListener("click", rightAnswer2)
    document.getElementById("buttonD").addEventListener("click", wrongAnswer2)
    
};




function wrongAnswer3() {
    console.log(count)
    count -= 10;
    console.log("Subtract 3")
    console.log(count)
    document.getElementById("minus").textContent="Wrong Answer"
    displayQuestion4();
};

function rightAnswer3() {
    document.getElementById("minus").textContent="Correct"
    console.log(score)
    score += 1;
    console.log("Add 3")
    console.log(score)
    displayQuestion4();
};

function displayQuestion3() {

    document.getElementById("buttonA").removeEventListener("click", wrongAnswer2)
    document.getElementById("buttonB").removeEventListener("click", wrongAnswer2)
    document.getElementById("buttonC").removeEventListener("click", rightAnswer2)
    document.getElementById("buttonD").removeEventListener("click", wrongAnswer2)
    document.getElementById("quizquestion").textContent="Arrays in JavaScript can be used to store _____."
    document.getElementById("buttonA").textContent="numbers and strings"
    document.getElementById("buttonB").textContent="other arrays"
    document.getElementById("buttonC").textContent="booleans"
    document.getElementById("buttonD").textContent="all of the above"
    document.getElementById("buttonA").addEventListener("click", wrongAnswer3)
    document.getElementById("buttonB").addEventListener("click", wrongAnswer3)
    document.getElementById("buttonC").addEventListener("click", wrongAnswer3)
    document.getElementById("buttonD").addEventListener("click", rightAnswer3)
    
};



function wrongAnswer4() {
    console.log(count)
    count -= 10;
    console.log("Subtract 4")
    console.log(count)
    document.getElementById("minus").textContent="Wrong Answer"
    displayQuestion5();
};

function rightAnswer4() {
    document.getElementById("minus").textContent="Correct"
    console.log(score)
    score += 1;
    console.log("Add 4")
    console.log(score)
    displayQuestion5();
};

function displayQuestion4() {

    document.getElementById("buttonA").removeEventListener("click", wrongAnswer3)
    document.getElementById("buttonB").removeEventListener("click", wrongAnswer3)
    document.getElementById("buttonC").removeEventListener("click", wrongAnswer3)
    document.getElementById("buttonD").removeEventListener("click", rightAnswer3)
    document.getElementById("quizquestion").textContent="String values must be enclosed within_____ when assigned to variables."
    document.getElementById("buttonA").textContent="commas"
    document.getElementById("buttonB").textContent="curly braces"
    document.getElementById("buttonC").textContent="quotations"
    document.getElementById("buttonD").textContent="parentheticals"
    document.getElementById("buttonA").addEventListener("click", wrongAnswer4)
    document.getElementById("buttonB").addEventListener("click", wrongAnswer4)
    document.getElementById("buttonC").addEventListener("click", rightAnswer4)
    document.getElementById("buttonD").addEventListener("click", wrongAnswer4)
    
};



function wrongAnswer5() {
    console.log(count)
    console.log("Subtract 5")
    count -= 10;
    console.log(count)
    document.getElementById("minus").textContent="Wrong Answer"
    finalScore();
};

function rightAnswer5() {
    document.getElementById("minus").textContent="Correct"
    console.log(score)
    score += 1;
    console.log("Add 5")
    console.log(score)
    finalScore();
};

function displayQuestion5() {

    document.getElementById("buttonA").removeEventListener("click", wrongAnswer4)
    document.getElementById("buttonB").removeEventListener("click", wrongAnswer4)
    document.getElementById("buttonC").removeEventListener("click", rightAnswer4)
    document.getElementById("buttonD").removeEventListener("click", wrongAnswer4)
    document.getElementById("quizquestion").textContent="A very useful tool used during development and debugging for printing content to the debugger is:"
    document.getElementById("buttonA").textContent="JavaScript"
    document.getElementById("buttonB").textContent="terminal/bash"
    document.getElementById("buttonC").textContent="for loops"
    document.getElementById("buttonD").textContent="console.log"
    document.getElementById("buttonA").addEventListener("click", wrongAnswer5)
    document.getElementById("buttonB").addEventListener("click", wrongAnswer5)
    document.getElementById("buttonC").addEventListener("click", wrongAnswer5)
    document.getElementById("buttonD").addEventListener("click", rightAnswer5)
    
};



function finalScore() {
    document.getElementById("buttonA").removeEventListener("click", wrongAnswer5)
    document.getElementById("buttonB").removeEventListener("click", wrongAnswer5)
    document.getElementById("buttonC").removeEventListener("click", wrongAnswer5)
    document.getElementById("buttonD").removeEventListener("click", rightAnswer5)
    document.getElementById("timer").style.display="none";
    document.getElementById("buttonA").style.display="none";
    document.getElementById("buttonB").style.display="none";
    document.getElementById("buttonC").style.display="none";
    document.getElementById("buttonD").style.display="none";
    document.getElementById("enter-name").style.display="block"
    document.getElementById("submit-name").style.display="block"
    document.getElementById("submit-name").addEventListener("click", pushName);
    document.getElementById("quizquestion").textContent="Final Score:" +score+""
};

function pushName() {
    document.getElementById("scoreboard").style.display="block";
    names.push(document.getElementById("enter-name").value+ " " +score+"");
    localStorage.setItem("scores", JSON.stringify(names));
    displayScoreboard();
}

function displayScoreboard() {
    var scoreslist=localStorage.getItem("scores")
    if (scoreslist) {
        document.getElementById("scorelist").innerText=JSON.parse(scoreslist).join(", ")
    }


}

document.getElementById("start").addEventListener("click", startQuiz);
