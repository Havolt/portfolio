creEl('div', ['introDiv', 'sectionMainDiv'], 'site', 0,);



creEl('div', 'intLogoDiv', 'introDiv', 0, 'MF');
creEl('div', 'intText', 'introDiv', 0 , "Hi, I'm Mark. I am a Front End Web Developer.")

function createStars(amt, size){
    for(let i = 0; i < amt; i++){
        let xPos = Math.floor(Math.random()*90) +10;
        let yPos = Math.floor(Math.random()*36) + 5;
        creEl('div', ['intStar'+size, 'intStar'], 'introDiv', 0);
        document.getElementsByClassName('intStar'+size)[i].style.left = xPos+'%';
        document.getElementsByClassName('intStar'+size)[i].style.top = yPos+'%';
    }
}


createStars(15, 'Small');
createStars(6, 'Medium');
createStars(2, 'Large');
