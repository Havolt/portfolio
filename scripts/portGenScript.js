

function scrollToAbout(height){
    let scrollRunner = window.scrollY;
    if(window.scrollY < height){
        window.scrollTo(0, scrollY + 30);
        setTimeout(function(){scrollToAbout(height)}, 30)
    }
}

function hideDiv(divClass, divNum){
    let item = document.getElementsByClassName(divClass)[divNum]
    let isHidden = false;
    for(let i = 0; i < item.classList.length; i++){
        if(item.classList[i] == 'hidden'){isHidden = true};
    }
    if(!isHidden){item.classList.add('hidden')}
    else{item.classList.remove('hidden')}
}

(function initGen(){
    document.getElementsByClassName('intMoreContain')[0].addEventListener('click', function(){
        setTimeout(function(){scrollToAbout(window.innerHeight)}, 30);})
})()

