//object containg information required for functions on the webpage
let introData = {logoMF : true, arrowRotateNum : 0, textJumpNum : 0, textJumpDir : -2 }

//creates the star divs on the page by passing in the amount wanted and the size ('Small', 'Medium', 'Large')
function createStars(amt, size){
    for(let i = 0; i < amt; i++){
        let xPos = Math.floor(Math.random()*90) +10;
        let yPos = Math.floor(Math.random()*36) + 5;
        creEl('div', ['intStar'+size, 'intStar'], 'introDiv', 0);
        document.getElementsByClassName('intStar'+size)[i].style.left = xPos+'%';
        document.getElementsByClassName('intStar'+size)[i].style.top = yPos+'%';
    }
}



//moves the stars at different speeds depending on the size of the div
function moveStars(size){
    for(let i = 0; i < document.getElementsByClassName('intStar'+size).length; i++){
        let nextXPos = document.getElementsByClassName('intStar'+size)[i].style.left;
        nextXPos = nextXPos.split('%')[0];
        if(nextXPos < 0){nextXPos = 101}
        if(size == 'Small'){nextXPos -= 0.25;}
        if(size == 'Medium'){nextXPos -= 0.05;}
        if(size == 'Large'){nextXPos -= 0.1;}
        document.getElementsByClassName('intStar'+size)[i].style.left = nextXPos + '%';
    }
}

//swaps the logo when clicked between 'MF' and 'JS' and cycles through symbols to make effect look fluid
function changeLogo(bool){
    let logoTimer = 50;
    let symbols = ['A', '$', '4', 'R', '8', '$', '?', 'L', 'S', '2', '7', 'T'];
    for(let i = 0; i < symbols.length; i++){
        setTimeout(function(){document.getElementsByClassName('intLogoDiv')[0].innerHTML= symbols[i]+symbols[symbols.length-i-1]+''}, logoTimer)
        logoTimer+= 50;
        if(i == symbols.length-1){
            if(bool){
                setTimeout(function(){document.getElementsByClassName('intLogoDiv')[0].innerHTML= 'JS'}, logoTimer);
                introData.logoMF = false;
            }else{setTimeout(function(){document.getElementsByClassName('intLogoDiv')[0].innerHTML= 'MF'}, logoTimer); introData.logoMF = true;}
        }
    }
}

//calls all moveStars function in one single function
function moveAll(){
    moveStars('Small');
    moveStars('Medium');
    moveStars('Large');
    setTimeout(function(){moveAll()}, 60)
}

//transforms the arrow and by doing so gives the illusion of rotation
function rotateArrow(arrow){
    arrow.style.transform = "rotateY("+introData.arrowRotateNum+"deg)";
    introData.arrowRotateNum =  introData.arrowRotateNum + 12;
    if(introData.arrowRotateNum > 180){
        introData.arrowRotateNum = 0;
        setTimeout(function(){rotateArrow(arrow);}, 1180)
    }
    else if(introData.arrowRotateNum > 89 && introData.arrowRotateNum < 100){
        setTimeout(function(){rotateArrow(arrow); textJump(document.getElementsByClassName('intMoreText')[0])}, 180)
    }
    else{
        setTimeout(function(){rotateArrow(arrow)}, 180)
    }
}

//Makes the text move up and down when the arrow spins to a certain degree
function textJump(text){

    introData.textJumpNum = introData.textJumpNum + introData.textJumpDir;
    text.style.transform = "translateY("+introData.textJumpNum+"px)";

    if(introData.textJumpNum == 0){introData.textJumpDir = -introData.textJumpDir }
    else if(introData.textJumpNum < 1 && introData.textJumpNum > -3){
        setTimeout(function(){textJump(text)}, 80);
    }
    else{
        introData.textJumpDir = -introData.textJumpDir;
        setTimeout(function(){textJump(text)}, 80);
    }
}

//initializes the intro section
(function initIntroSec(){
    creEl('div', ['introDiv', 'sectionMainDiv'], 'main', 0,);
    creEl('div', 'intLogoDiv', 'introDiv', 0, 'MF');
    creEl('div', 'intText', 'introDiv', 0 , "Hi, I'm Mark. A Front End Web Developer.");
    creEl('div', ['portButton','intButton'], 'introDiv', 0, 'GET IN TOUCH');
    creEl('div', 'intMoreContain', 'introDiv', 0);
    creEl('div', 'intMoreText', 'intMoreContain', 0, 'Tell me more');
    creEl('div', 'intMoreArrow', 'intMoreContain', 0, '<i class="fa fa-angle-down"></i>');
    createStars(32, 'Small');
    createStars(14, 'Medium');
    createStars(4, 'Large');

    setTimeout(function(){
        moveAll();
    }, 180)

    rotateArrow( document.getElementsByClassName('intMoreArrow')[0] );


    document.getElementsByClassName('intLogoDiv')[0].addEventListener('click', function(){changeLogo(introData.logoMF)})
})()
