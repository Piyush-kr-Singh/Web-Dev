let direction = {x: 0, y: 0};

const foodSound=new Audio('food.mp3');
const gameOver=new Audio('gameover.mp3');
const moveSound=new Audio ('move.mp3');
const musicSound=new Audio('music.mp3');

//Game Function

function main(ctime)
{
    window.requestAnimationFrame(main);  //alternative to setInterval or setTimeOut, but better than these two.
    console.log(ctime);
}