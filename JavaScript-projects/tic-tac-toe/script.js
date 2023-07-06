console.log("Welcome to tic tac toe");

let turnAudio = new Audio('click.mp3')

let reset = document.getElementById('reset');
let turn = "X";
let gameOver = false;
let gameOverMusic= new Audio('winner.mp3');
turnAudio.playbackRate=2;


//Function to change the turn
const changeTurn = () => {
    if (turn === "X") {
        return "0";
    }
    else {
        return "X";
    }
}

//Function to check for a win

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won";

            //css for text after winning the match
            document.querySelector('.info').style.fontSize = "10vh";
            document.querySelector('.info').style.textDecoration = "underline";

            gameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "20vw";

            gameOverMusic.play();
            //alert("Game Over!!");
            //resetfun();
        }
    })
}


//Game Logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin();
            

            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})

reset.addEventListener('click', () => {

    resetfun();
})


const resetfun = () => {

    let boxtext = document.querySelectorAll('.boxText');

    Array.from(boxtext).forEach((element) => {
        element.innerText = "";
    })
    turn = "X";
    gameOver = false;

    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.info').style.fontSize = "5vh";
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0";

}