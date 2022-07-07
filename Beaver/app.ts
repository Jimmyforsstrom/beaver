const squares = document.querySelectorAll(".square");
const beaver = document.querySelector(".beaver");
const timeLeft = document.querySelector("#timeleft");
let score = document.getElementById("score");

let result: number = 0;
let hitPosition: string = "";
let currentTime: number = 15;
let timerId: NodeJS.Timer | null | undefined = null;

let mixBut = document.getElementById("mix");

if (mixBut?.addEventListener != null)
  mixBut.addEventListener("click", startGame);

function startGame() {
  //tar bort beavern genom att remova classlist och sätter sedan ny slumpvis classlist till beavern.
  function randomSquare(): void {
    squares.forEach((square) => {
      square.classList.remove("beaver");
    });

    let randomSquare: Element = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("beaver");

    hitPosition = randomSquare.id;
  }

  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id == hitPosition) {
        result++;
        hitPosition = "";
        if (score?.innerHTML != undefined) {
          score.innerHTML = result.toString();
        }
      }
    });
  });

  let countDownTimerId: NodeJS.Timer = setInterval(countDown, 1000);

  function countDown() {
    currentTime--;
    if (timeLeft?.textContent != null) {
      timeLeft.textContent = currentTime.toString();
    }
    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      timerId = null;
      currentTime = 15;
      if (result >= 7)
      alert("good job! your score is = " + result);
      else alert('you can do better ' + result);
      console.log("resultat = ", result);
      result = 0;

      if (score?.innerHTML != undefined) {
        score.innerHTML = result.toString();
      }
    }

    // har en intervall kopplad till sig med funktionen randomSquare och tidsintervallet 0.5sek
    function moveBeaver(): void {
      timerId = setInterval(randomSquare, 500);
    }
    //moveBeaver();
    randomSquare();
  }
}
