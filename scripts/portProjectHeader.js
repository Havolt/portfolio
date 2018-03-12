
function linkMaker(linkName, lastLinkBool){
    creEl('div', ['headerLink', 'headerLink'+linkName], 'headerLinksContain', 0, linkName  )
}

(function initProjectHeader(){
    creEl('div', 'projectHeader', 'main', 0);
    creEl('div', 'getBack', 'projectHeader', 0, '<i class="fa fa-angle-double-left"></i>');
    creEl('div', 'headerLinksContain', 'projectHeader', 0);

    linkMaker('Tetris')
    linkMaker('Checkers');
    linkMaker('To-do');
    linkMaker('Calculator');
    linkMaker('wiki-API');
    linkMaker('Snake');

    openWebPage('getBack', 0, 'index.html', true)
})()