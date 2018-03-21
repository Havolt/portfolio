
//function on intro main button which scrolls smoothly to the contact section
function scrollToContact(main, contact, footer){
    let totalScroll = main.offsetHeight - (contact.offsetHeight + footer.offsetHeight);
    scrollToAbout(totalScroll, 10);
}

//scrolls the user to the requested part of the site
function scrollToAbout(height, speed){
    let scrollRunner = window.scrollY;
    if((window.scrollY + window.innerHeight) > (document.getElementsByClassName('main')[0].offsetHeight - 20)){
        setTimeout(function(){showContact(document.getElementsByClassName('contactContainBlue')[0])}, 200)
    }
    else if(window.scrollY < height){
        window.scrollTo(0, scrollY + 30);
        setTimeout(function(){scrollToAbout(height, speed)}, speed)
    }
}

//toggles hiding an element on the page
function hideDiv(divClass, divNum){
    let item = document.getElementsByClassName(divClass)[divNum]
    let isHidden = false;
    for(let i = 0; i < item.classList.length; i++){
        if(item.classList[i] == 'hidden'){isHidden = true};
    }
    if(!isHidden){item.classList.add('hidden')}
    else{item.classList.remove('hidden')}
}

//initialized the general functions needed on the page
(function initGen(){
    document.getElementsByClassName('intMoreContain')[0].addEventListener('click', function(){
        setTimeout(function(){scrollToAbout(window.innerHeight, 30)}, 30);})
    document.getElementsByClassName('intButton')[0].addEventListener('click', function(){
        scrollToContact(document.getElementsByClassName('main')[0], document.getElementsByClassName('contactDiv')[0], document.getElementsByClassName('footerDiv')[0])})
})()

