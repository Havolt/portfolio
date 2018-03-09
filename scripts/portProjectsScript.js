
function creProjectItem(itemNum, itemImgClass,  itemImgTitle, itemImgDesc){
    creEl('div', 'projectItemContain', 'projectDiv', 0);
    creEl('div', 'projectItem', 'projectItemContain', itemNum);
    creEl('div', ['projectItemImg', 'projectItemImg'+itemImgClass], 'projectItem', itemNum);
    creEl('div', ['projectItemImgOver', 'projectIIO'+itemImgClass], 'projectItem', itemNum);
    creEl('div', ['projectItemImgOverTitle', 'projectIIOT'+itemImgClass], 'projectItemImgOver', itemNum, itemImgTitle + ' ' + itemImgClass);
    creEl('div', ['projectItemDesc', 'projectItemDesc'+itemImgClass], 'projectItemContain', itemNum, itemImgDesc);
}

function toggleHidden(darkDiv){
    let foundClass = false;
    for(let i = 0; i < darkDiv.classList.length; i++){
        if(darkDiv.classList[i] == 'hidden'){
            foundClass = true;
        }
    }
    console.log(foundClass)
    if(foundClass){darkDiv.classList.remove('hidden')}
    else{darkDiv.classList.add('hidden')}
}


function addProjectFunctions(divs){
    for(let i = 0; i < divs.length; i++){
        divs[i].addEventListener('click', function(){
            toggleHidden(document.getElementsByClassName('projectDarken')[0]);
            toggleHidden(document.getElementsByClassName('projectInfoDiv')[0]);
            addProjectInHL('Tetris', 'proj-tetris.png', 'This is tetris and blah blah blah')
        })
    }
}

function addProjectInHL(title, imgLink, description){
    document.getElementsByClassName('projectInfoTitle')[0].innerHTML = title;
    document.getElementsByClassName('projectInfoButton')[0].innerHTML = 'View ' + title;
    document.getElementsByClassName('projectInfoImg')[0].src='images/'+ imgLink;
    document.getElementsByClassName('projectInfoDescription')[0].innerHTML = description;
}


(function initProjectSec(){
    creEl('div', ['projectDiv', 'sectionMainDiv'], 'main', 0);

    creEl('div', 'projectIntro', 'projectDiv', 0);
    creEl('div', ['projectTitle', 'sectionTitle'], 'projectIntro', 0, 'Projects');
    creEl('div', ['projectParagraph', 'sectionParagraph'], 'projectIntro', 0, 'You can see a selection of some of my work below.');

    creProjectItem(0, 'Tetris',  '<i class="fa fa-th-large"></i>', 'This is the classic video game tetris re-made entirely in vanilla JavaScript. It contains multiple features such as varying difficulty levels, score system etc.');
    creProjectItem(1, 'Checkers', '<i class="fa fa-delicious"></i>', 'My own version of Checkers created using vanilla JavaScript. It contains most of the offical rules of checkers including mandatory takes and multi-takes.' );
    creProjectItem(2, 'To-Do', '<i class="fa fa-calendar"></i>', 'A To-Do list written in pure JavaScript. This app allows the user to create items, favourite them, delete them and allows the user to cycle between different display options.')

    creEl('div', 'projectMore', 'projectDiv', 0);
    creEl('div', 'projectMoreText', 'projectMore', 0, 'If you would like to view more of my work please use the following link:');
    creEl('div', ['portButton','projectMoreButton'], 'projectMore', 0, 'View More');

    creEl('div', ['projectDarken', 'hidden'], 'main', 0);
    creEl('div', ['projectInfoDiv', 'hidden'], 'projectDarken', 0,'hello');
    creEl('div', 'projectInfoTitle', 'projectInfoDiv', 0);
    creEl('img', 'projectInfoImg', 'projectInfoDiv', 0);
    creEl('div', 'projectInfoDescription', 'projectInfoDiv', 0);
    creEl('div', 'projectInfoButton', 'projectInfoDiv', 0);

    addProjectFunctions(document.getElementsByClassName('projectItemImgOver'))
})()