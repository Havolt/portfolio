
let headerData = {barsOn : false}

function linkMaker(linkName, lastLinkBool){
    creEl('div', ['headerLink', 'headerLink'+linkName], 'headerLinksContain', 0, linkName  )
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

function barsChange(div){
    if(!headerData.barsOn){div.style.color="white"; headerData.barsOn = true;}
    else{div.style.color="rgb(41, 41, 41)"; headerData.barsOn = false;}
}


(function initProjectHeader(){
    creEl('div', 'projectHeader', 'main', 0);
    creEl('div', 'getBack', 'projectHeader', 0, '<i class="fa fa-angle-double-left"></i>');
    creEl('div', 'headerBars', 'projectHeader', 0, '<i class="fa fa-bars"></i>');
    creEl('div', ['headerLinksContain', 'hidden'], 'projectHeader', 0);

    document.getElementsByClassName('headerBars')[0].addEventListener('click', function(){
        hideDiv('headerLinksContain', 0);
        barsChange(this)
    })

    linkMaker('Tetris')
    linkMaker('Checkers');
    linkMaker('To-do');
    linkMaker('Calculator');
    linkMaker('wiki-API');
    linkMaker('Snake');

    openWebPage('getBack', 0, 'index.html#projects', true);
})()