var timer;
var count;
var score; 0;

window.onload = function() {
    document.getElementById("quizInput").style.display="none";
    document.getElementById("buttonA").style.display="none";
    document.getElementById("buttonB").style.display="none";
    document.getElementById("buttonC").style.display="none";
    document.getElementById("buttonD").style.display="none";
};
  


function startTimer() {
    count=100;
    timer=setInterval(function(){
        count--;
        if(count===0){
            failQuiz();
            clearInterval(timer);

        } else {
            document.getElementById("count").textContent=count;
        }
    },1000);
};

function failQuiz() {

    document.getElementById("minus").textContent="TIME'S UP!"

};

function startQuiz() {

    displayQuestion1();
    startTimer();
    document.getElementById("quizInput").style.display="show";
    document.getElementById("buttonA").style.display="show";
    document.getElementById("buttonB").style.display="show";
    document.getElementById("buttonC").style.display="show";
    document.getElementById("buttonD").style.display="show";
};




function wrongAnswer1() {
    count=--15;
    document.getElementById("minus").textContent="Wrong Answer"
    displayQuestion2();
};

function rightAnswer1() {
    document.getElementById("minus").textContent="Correct"
    displayQuestion2();
};

function displayQuestion1() {

    document.getElementById("quizInput").textContent="Commonly used data types DO NOT include:"
    document.getElementById("buttonA").textContent="strings"
    document.getElementById("buttonB").textContent="booleans"
    document.getElementById("buttonC").textContent="alerts"
    document.getElementById("buttonD").textContent="numbers"
    document.getElementById("buttonA").addEventListener("click").wrongAnswer1()
    document.getElementById("buttonB").addEventListener("click").wrongAnswer1()
    document.getElementById("buttonC").addEventListener("click").rightAnswer1()
    document.getElementById("buttonD").addEventListener("click").wrongAnswer1()
    
};




function wrongAnswer2() {
    count=--15;
    document.getElementById("minus").textContent="Wrong Answer"
    displayQuestion3();
};

function rightAnswer2() {
    document.getElementById("minus").textContent="Correct"
    displayQuestion3();
};

function displayQuestion2() {

    document.getElementById("quizInput").textContent="The condition in an if/else statement is enclosed within_______."
    document.getElementById("buttonA").textContent="quotes"
    document.getElementById("buttonB").textContent="curly brace"
    document.getElementById("buttonC").textContent="parentheticals"
    document.getElementById("buttonD").textContent="square brace"
    document.getElementById("buttonA").addEventListener("click").wrongAnswer2()
    document.getElementById("buttonB").addEventListener("click").wrongAnswer2()
    document.getElementById("buttonC").addEventListener("click").rightAnswer2()
    document.getElementById("buttonD").addEventListener("click").wrongAnswer2()
    
};




function wrongAnswer3() {
    count=--15;
    document.getElementById("minus").textContent="Wrong Answer"
    displayQuestion4();
};

function rightAnswer3() {
    document.getElementById("minus").textContent="Correct"
    displayQuestion4();
};

function displayQuestion3() {

    document.getElementById("quizInput").textContent="Arrays in JavaScript can be used to store _____."
    document.getElementById("buttonA").textContent="numbers and strings"
    document.getElementById("buttonB").textContent="other arrays"
    document.getElementById("buttonC").textContent="booleans"
    document.getElementById("buttonD").textContent="all of the above"
    document.getElementById("buttonA").addEventListener("click").wrongAnswer3()
    document.getElementById("buttonB").addEventListener("click").wrongAnswer3()
    document.getElementById("buttonC").addEventListener("click").wrongAnswer3()
    document.getElementById("buttonD").addEventListener("click").rightAnswer3()
    
};



function wrongAnswer4() {
    count=--15;
    document.getElementById("minus").textContent="Wrong Answer"
    displayQuestion5();
};

function rightAnswer4() {
    document.getElementById("minus").textContent="Correct"
    displayQuestion5();
};

function displayQuestion4() {

    document.getElementById("quizInput").textContent="String values must be enclosed within_____ when assigned to variables."
    document.getElementById("buttonA").textContent="commas"
    document.getElementById("buttonB").textContent="curly braces"
    document.getElementById("buttonC").textContent="quotations"
    document.getElementById("buttonD").textContent="parentheticals"
    document.getElementById("buttonA").addEventListener("click").wrongAnswer4()
    document.getElementById("buttonB").addEventListener("click").wrongAnswer4()
    document.getElementById("buttonC").addEventListener("click").rightAnswer4()
    document.getElementById("buttonD").addEventListener("click").wrongAnswer4()
    
};



function wrongAnswer5() {
    count=--15;
    document.getElementById("minus").textContent="Wrong Answer"
    finalScore();
};

function rightAnswer5() {
    document.getElementById("minus").textContent="Correct"
    finalScore();
};

function displayQuestion5() {

    document.getElementById("quizInput").textContent="A very useful tool used during development and debugging for printing content to the debugger is:"
    document.getElementById("buttonA").textContent="JavaScript"
    document.getElementById("buttonB").textContent="terminal/bash"
    document.getElementById("buttonC").textContent="for loops"
    document.getElementById("buttonD").textContent="console.log"
    document.getElementById("buttonA").addEventListener("click").wrongAnswer5()
    document.getElementById("buttonB").addEventListener("click").wrongAnswer5()
    document.getElementById("buttonC").addEventListener("click").wrongAnswer5()
    document.getElementById("buttonD").addEventListener("click").rightAnswer5()
    
};



function finalScore() {
    document.getElementById("enter-name").style.display="show"
    document.getElementById("quizInput").textContent="Final Score:" +score+""
};

document.getElementById("start").addEventListener("click").startQuiz()
