

function scrollToAbout(height){
    let scrollRunner = window.scrollY;
    console.log(scrollRunner)
    if(window.scrollY < height){
        window.scrollTo(0, scrollY + 30);
        setTimeout(function(){scrollToAbout(height)}, 30)
    }
}

(function initGen(){
    document.getElementsByClassName('intMoreContain')[0].addEventListener('click', function(){
        setTimeout(function(){scrollToAbout(window.innerHeight)}, 30);})
})()