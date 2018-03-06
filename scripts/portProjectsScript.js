
function creProjectItem(itemNum, itemImgClass, itemImgSrc){
    creEl('div', 'projectItem', 'projectDiv', 0);
    creEl('div', ['projectItemImg', 'projectItemImg'+itemImgClass], 'projectItem', itemNum);
    creEl('div', ['projectItemImgOver', 'projectIIO'+itemImgClass], 'projectItem', itemNum);
}


(function initProjectSec(){
    creEl('div', ['projectDiv', 'sectionMainDiv'], 'site', 0);

    creEl('div', 'projectIntro', 'projectDiv', 0);
    creEl('div', ['projectTitle', 'sectionTitle'], 'projectIntro', 0, 'Projects');
    creEl('div', ['projectParagraph', 'sectionParagraph'], 'projectIntro', 0, 'You can see a selection of some of my work below.');

    creProjectItem(0, 'Tetris')
})()