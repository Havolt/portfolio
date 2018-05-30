
let headerData = {barsOn : false}

let linkData = [{name: 'Tetris', link: 'tetris.html'}, {name: 'NC-Creepy', link: 'nocontext.html'}, {name: 'Checkers', link: 'checkers.html'},{name: 'To-do', link: 'todo.html'},{name: 'Calculator', link: 'calculator.html'},{name: 'Wiki-API', link: 'wikiApi.html'},{name: 'Snake', link: 'snake.html'}]

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

function underlineLink(word){
    for(let i = 0; i < document.getElementsByClassName('headerLink').length; i++){
        if(word == document.getElementsByClassName('headerLink')[i].innerHTML){
            document.getElementsByClassName('headerLink')[i].classList.add('headLinkUnderline');
            break;
        }
    }
}

function addLinkEvents(arr, links){


    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < links.length; j++){
            if(arr[i].name == links[j].innerHTML){
                openWebPage('headerLink', j, arr[i].link, true);
                break;
            }
        }
    }

}


(function initProjectHeader(){
    creEl('div', 'projectHeader', 'main', 0);
    creEl('div', 'getBack', 'projectHeader', 0, '<i class="fa fa-angle-double-left"></i>');
    creEl('div', 'projectTitle', 'projectHeader', 0);
    creEl('div', 'headerBars', 'projectHeader', 0, '<i class="fa fa-bars"></i>');
    creEl('div', ['headerLinksContain', 'hidden'], 'projectHeader', 0);

    document.getElementsByClassName('headerBars')[0].addEventListener('click', function(){
        hideDiv('headerLinksContain', 0);
        barsChange(this)
    })

    linkMaker('Tetris')
    linkMaker('NC-Creepy');
    linkMaker('Checkers');
    linkMaker('To-do');
    linkMaker('Calculator');
    linkMaker('Wiki-API');
    linkMaker('Snake');
    linkMaker('Platformer');

    addLinkEvents(linkData, document.getElementsByClassName('headerLink'));

    openWebPage('getBack', 0, 'index.html#projects', true);
})()