"use strict";
const squares = document.querySelectorAll(".square");
const beaver = document.querySelector(".beaver");
const timeLeft = document.querySelector("#timeleft");
let score = document.getElementById("score");
let result = 0;
let hitPosition = "";
let currentTime = 15;
let timerId = null;
let mixBut = document.getElementById("mix");
if ((mixBut === null || mixBut === void 0 ? void 0 : mixBut.addEventListener) != null)
    mixBut.addEventListener("click", startGame);
function startGame() {
    //tar bort beavern genom att remova classlist och sätter sedan ny slumpvis classlist till beavern.
    function randomSquare() {
        squares.forEach((square) => {
            square.classList.remove("beaver");
        });
        let randomSquare = squares[Math.floor(Math.random() * 9)];
        randomSquare.classList.add("beaver");
        hitPosition = randomSquare.id;
    }
    squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id == hitPosition) {
                result++;
                hitPosition = "";
                if ((score === null || score === void 0 ? void 0 : score.innerHTML) != undefined) {
                    score.innerHTML = result.toString();
                }
            }
        });
    });
    let countDownTimerId = setInterval(countDown, 1000);
    function countDown() {
        currentTime--;
        if ((timeLeft === null || timeLeft === void 0 ? void 0 : timeLeft.textContent) != null) {
            timeLeft.textContent = currentTime.toString();
        }
        if (currentTime == 0) {
            clearInterval(countDownTimerId);
            timerId = null;
            currentTime = 15;
            if (result >= 7)
                alert("good job! your score is = " + result);
            else
                alert('you can do better ' + result);
            console.log("resultat = ", result);
            result = 0;
            if ((score === null || score === void 0 ? void 0 : score.innerHTML) != undefined) {
                score.innerHTML = result.toString();
            }
        }
        // har en intervall kopplad till sig med funktionen randomSquare och tidsintervallet 0.5sek
        function moveBeaver() {
            timerId = setInterval(randomSquare, 500);
        }
        //moveBeaver();
        randomSquare();
    }
}
