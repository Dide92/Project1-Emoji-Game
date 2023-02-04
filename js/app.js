console.log('Project 1')


alert("Your Welcome to Jumping Emoji! "+ "\n\nThis is an obstacle game. Please use either the space bar or arrow up button to jump over emoji obstacles. You can start the button by clicking any emoji."+"\n\nGood luck and have fun!")


const char = document.getElementById('char')
const obstacle1 = document.getElementById('obstacle1')
const obstacle2 = document.getElementById('obstacle2')



let grass =document.getElementById('grass')
let sun =document.getElementById('sun')
let cloud1 =document.getElementById('cloud1')
let cloud2 =document.getElementById('cloud2')
let cloud3 =document.getElementById('cloud3')
let happy =document.getElementById('happy')
let cool =document.getElementById('cool')
let silly =document.getElementById('silly')
let play1 = document.getElementById('startButton1')
let play2 = document.getElementById('startButton2')
let play3 = document.getElementById('startButton3')
let h1=document.querySelector('h1')
let p=document.querySelector('p')
let end = document.getElementById('end')
let h2 = document.querySelector('h2')
let score=document.querySelector('#score')
let player= document.querySelector('.player')
let time = document. getElementById('timer')
let restart = document.getElementById('restart')

//--------------------------------------------------------------

function hello() {
    let playerName=prompt("Please enter your name")
    playerName=playerName[0].toUpperCase() + playerName.substring(1)
    if (playerName != null) {
        document.querySelector('.player').innerText = playerName +"'s "
    }
}
//--------------------------------------------------------------

function startGame() {
    sun.style.display='inline';
    obstacle1.style.display='inline';
    obstacle2.style.display='inline';
    cloud1.style.display='inline';
    cloud2.style.display='inline';
    cloud3.style.display='inline';
    grass.style.display='inline';
    p.style.display='inline';
    h1.style.display='none';
    play1.remove()
    play2.remove()
    play3.remove()
    char.style.display='inline';
    happy.style.display='none';
    silly.style.display='none';
    cool.style.display='none';
    Emoji.scoreResult()
    hello()
    Emoji.timing()
    time.style.display='inline'
    // gameOver()
}

play1.addEventListener('click', startGame)
play2.addEventListener('click', startGame)
play3.addEventListener('click', startGame)

//--------------------------------------------------------------

//This function works, but does not see the image :(

// const changeEmojiToCool = () => {
//     char.src="pictures/cool.png"
// }
// const changeEmojiToSilly = () => {
//     char.src='pictures/silly.png'
//     char.style.backgroundRepeat='no-repeat'
// }

//  play1.addEventListener('click', changeEmojiToSilly)
//  play3.addEventListener('click', changeEmojiToCool)


//--------------------------------------------------------------

function jump() {
    if (char.classList != 'jumping') {
    char.classList.add('jumping');

    setTimeout(function () {
        char.classList.remove('jumping');

        },300);
    }
}


let hit= setInterval(function() {
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    let obstacle1Left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue('left')
    );
    let obstacle2Left = parseInt(window.getComputedStyle(obstacle2).getPropertyValue('left')
    );

    if((obstacle1Left<30 && obstacle1Left>10 && charTop>=350) || (obstacle2Left<30 && obstacle2Left>10 && charTop>=350)){
       
        alert("Your score is: "+ score.innerText + "\n\nYour time is: "+ time.innerText);
        return gameOver();
        
    }
},50)


function keycodes(e) {
    if (e.key == 'ArrowUp' || e.key == ' ') {
        jump()
    }
}
document.addEventListener('keydown',keycodes)

//--------------------------------------------------------------

class Game {
    constructor(timer, score, ) {
        this.timer=timer
        this.score=0
    }
    timing() {
    let sec=0;
        let timer = setInterval(()=> {
        time.innerHTML = '00:'+sec;
        sec++;
        if(over===true) {
            clearInterval(timer)
        }
    },1000)
    }

    scoreResult() {
    let result= setInterval(() => {
            this.score++
document.querySelector('#score').innerHTML = this.score
        if (over===true) {
            clearInterval(result)
        }
        },100)
    
    }
}

const Emoji = new Game ('Jumping Emoji')

//--------------------------------------------------------------
let over=false;

function gameOver() {
    over=true
    score.style.display='inline'
    player.style.display='none'
    // time.style.display='none'
    // time.innerText =this.time
    // end.style.display='inline';
    h1.innerText="Game Over"
    obstacle1.remove()
    obstacle2.remove()
    grass.remove()
    sun.remove()
    cloud1.remove()
    cloud2.remove()
    cloud3.remove()
    char.style.display='none'
    restart.style.display='inline'
    // player.style.position='absolute';
    // score.style.position='absolute';
    // document.querySelector('.player').innerText = playerName +"'s "
    // document.querySelector('.score').innerText =this.score
    // Emoji.scoreResult()
    // Emoji.timing()
    // location.reload()
    // characters.style.position='relative';
    // location.reload();
}

restart.addEventListener('click', () => {
    window.location.reload()
})

