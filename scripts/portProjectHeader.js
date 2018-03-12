
function linkMaker(){
    creEl('div', '')
}

(function initProjectHeader(){
    creEl('div', 'projectHeader', 'main', 0);
    creEl('div', 'getBack', 'projectHeader', 0, '<i class="fa fa-angle-double-left"></i>');
    creEl('div', 'headerLinks', 'projectHeader', 0);

    openWebPage('getBack', 0, 'index.html', true)
})()