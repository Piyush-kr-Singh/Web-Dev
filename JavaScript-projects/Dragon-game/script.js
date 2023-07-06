score = 0;
cross = true;

audio = new Audio('jump.mp3');
audioGo = new Audio('gameOver.mp3');
music=new Audio('music.mp3');

music.play();
setTimeout(() => {
    music.play();
}, 100);


// alert(`Press 'Space' for jump`);


let btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    location.reload();

    
    setTimeout(() => {
        music.play();
    }, 100);
    
})

document.onkeydown = function (e) {
    console.log("Key is ", e.keyCode);

    if (e.keyCode == 32  || e.keyCode==38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 1000);

        setTimeout(() => {
            audio.play();
        }, 10);
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));   //returns the left value of the dino 
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));   //returns the top value of the dino 

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY);
    if (offsetX < 250 && offsetY < 90) {
        gameOver.style.visibility = 'visible';
        gameOver.innerText = "Game Over";
        obstacle.classList.remove('obstacles');

    
        setTimeout(() => {
            audioGo.play();
        }, 10);
        
        setTimeout(() => {
            music.pause();
        }, 1000);
    }

    else if (cross && offsetX < 160) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {

            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.03;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);

    }

}, 100);

function updateScore(score) {
    scoreCont.innerHTML = "Your score : " + score;
}


