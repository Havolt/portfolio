
function creProjectItem(itemNum, itemImgClass,  itemImgTitle, itemImgDesc){
    creEl('div', 'projectItemContain', 'projectDiv', 0);
    creEl('div', 'projectItem', 'projectItemContain', itemNum);
    creEl('div', ['projectItemImg', 'projectItemImg'+itemImgClass], 'projectItem', itemNum);
    creEl('div', ['projectItemImgOver', 'projectIIO'+itemImgClass], 'projectItem', itemNum);
    creEl('div', ['projectItemImgOverTitle', 'projectIIOT'+itemImgClass], 'projectItemImgOver', itemNum, itemImgTitle + ' ' + itemImgClass);
    creEl('div', ['projectItemDesc', 'projectItemDesc'+itemImgClass], 'projectItemContain', itemNum, itemImgDesc );
}


(function initProjectSec(){
    creEl('div', ['projectDiv', 'sectionMainDiv'], 'site', 0);

    creEl('div', 'projectIntro', 'projectDiv', 0);
    creEl('div', ['projectTitle', 'sectionTitle'], 'projectIntro', 0, 'Projects');
    creEl('div', ['projectParagraph', 'sectionParagraph'], 'projectIntro', 0, 'You can see a selection of some of my work below.');

    creProjectItem(0, 'Tetris',  '<i class="fa fa-th-large"></i>', 'This is the classic video game tetris re-made entirely in vanilla JavaScript. It contains multiple features such as varying difficulty levels, score system etc.');
    creProjectItem(1, 'Checkers', '<i class="fa fa-delicious"></i>', 'My own version of Checkers created using vanilla JavaScript. It contains most of the offical rules of checkers including mandatory takes and multi-takes.' );
    creProjectItem(2, 'To-Do', '<i class="fa fa-calendar"></i>', 'A To-Do list written in pure JavaScript. This app allows the user to create items, favourite them, delete them and allows the user to cycle between different display options.')

    creEl('div', 'projectMore', 'projectDiv', 0);
    creEl('div', 'projectMoreText', 'projectMore', 0, 'If you would like to view more of my work please use the following link:');
    creEl('div', 'projectMoreButton', 'projectMore', 0, 'View More');
})()