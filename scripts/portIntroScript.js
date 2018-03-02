

function createStars(amt, size){
    for(let i = 0; i < amt; i++){
        let xPos = Math.floor(Math.random()*90) +10;
        let yPos = Math.floor(Math.random()*36) + 5;
        creEl('div', ['intStar'+size, 'intStar'], 'introDiv', 0);
        document.getElementsByClassName('intStar'+size)[i].style.left = xPos+'%';
        document.getElementsByClassName('intStar'+size)[i].style.top = yPos+'%';
    }
}


function moveStars(size){
    for(let i = 0; i < document.getElementsByClassName('intStar'+size).length; i++){
        let nextXPos = document.getElementsByClassName('intStar'+size)[i].style.left;
        nextXPos = nextXPos.split('%')[0];
        if(nextXPos < 0){nextXPos = 101}
        if(size == 'Small'){nextXPos -= 0.25;}
        if(size == 'Medium'){nextXPos -= 0.4;}
        if(size == 'Large'){nextXPos -= 0.7;}
        document.getElementsByClassName('intStar'+size)[i].style.left = nextXPos + '%';
    }
}

function moveAll(){
    moveStars('Small');
    moveStars('Medium');
    moveStars('Large');
    setTimeout(function(){moveAll()}, 600)
}


(function initIntroSec(){
    creEl('div', ['introDiv', 'sectionMainDiv'], 'site', 0,);
    creEl('div', 'intLogoDiv', 'introDiv', 0, 'MF');
    creEl('div', 'intText', 'introDiv', 0 , "Hi, I'm Mark. I am a Front End Web Developer.");
    creEl('div', 'intButton', 'introDiv', 0, 'GET IN TOUCH');
    creEl('div', 'intMoreContain', 'introDiv', 0);
    creEl('div', 'intMoreText', 'intMoreContain', 0, 'Tell me more');
    creEl('div', 'intMoreArrow', 'intMoreContain', 0, '<i class="fa fa-angle-down"></i>');
    createStars(15, 'Small');
    createStars(6, 'Medium');
    createStars(2, 'Large');

    setTimeout(function(){
        moveAll();
    }, 600)
})()
