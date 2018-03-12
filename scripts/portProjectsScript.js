let projectData = {fadeAmt : 0.1, fadeDir: 0.1, showingMore : false}

//Function that creates the individual projects in this section
function creProjectItem(itemApnd, itemNum, itemImgClass,  itemImgTitle, itemImgDesc){
    creEl('div', 'projectItemContain', itemApnd, 0);
    creEl('div', 'projectItem', 'projectItemContain', itemNum);
    creEl('div', ['projectItemImg', 'projectItemImg'+itemImgClass], 'projectItem', itemNum);
    creEl('div', ['projectItemImgOver', 'projectIIO'+itemImgClass], 'projectItem', itemNum);
    creEl('div', ['projectItemImgOverTitle', 'projectIIOT'+itemImgClass], 'projectItemImgOver', itemNum, itemImgTitle + ' ' + itemImgClass);
    creEl('div', ['projectItemDesc', 'projectItemDesc'+itemImgClass], 'projectItemContain', itemNum, itemImgDesc);
}

//Creates fade effect for info divs that pop up in project section
function fadeInfo(bool){
    if(projectData.fadeAmt > 0 && projectData.fadeAmt < 1){
        projectData.fadeAmt = projectData.fadeAmt + projectData.fadeDir;
        projectData.fadeAmt = Math.round(projectData.fadeAmt * 10) / 10;
        document.getElementsByClassName('projectDarken')[0].style.opacity=projectData.fadeAmt;
        
        setTimeout(function(){fadeInfo(bool)}, 40)
    }else{ 
        projectData.fadeDir = -projectData.fadeDir; 
        projectData.fadeAmt = projectData.fadeAmt + projectData.fadeDir
        if(bool){console.log('hi'); document.getElementsByClassName('projectDarken')[0].classList.add('hidden')}    
    }
}

//gives the div of class 'projectDarken' the hidden class or removes it
function toggleHidden(darkDiv){
    let foundClass = false;
    for(let i = 0; i < darkDiv.classList.length; i++){
        if(darkDiv.classList[i] == 'hidden'){
            foundClass = true;
        }
    }
    if(foundClass){darkDiv.classList.remove('hidden'); fadeInfo()}
    else{fadeInfo(true);}
}

//Changes the innerHTML of the info div wit title, img source, description area and button
function addProjectInHL(title, imgLink, description){
    document.getElementsByClassName('projectInfoTitle')[0].innerHTML = title;
    document.getElementsByClassName('projectInfoButton')[0].innerHTML = 'View ' + title;
    document.getElementsByClassName('projectInfoImg')[0].src='images/'+ imgLink;
    document.getElementsByClassName('projectInfoDescription')[0].innerHTML = description;
}

//give event listeners to divs
function addProjectFunctions(divs){
    document.getElementsByClassName('projectDarken')[0].addEventListener('click', function(){
        if(event.srcElement == document.getElementsByClassName('projectDarken')[0]){
            toggleHidden(document.getElementsByClassName('projectDarken')[0]);
        }
    })
    document.getElementsByClassName('projectInfoCross')[0].addEventListener('click', function(){
        toggleHidden(document.getElementsByClassName('projectDarken')[0]);
    })
    for(let i = 0; i < divs.length; i++){
        divs[i].addEventListener('click', function(){
            toggleHidden(document.getElementsByClassName('projectDarken')[0]);
            if(i == 0){
                addProjectInHL('Tetris', 'proj-tetris.png', 'This is my version of Tetris made with Vanilla JavaScript. The game requires a keyboard for control of pieces. The game has multiple features such as difficulty levels, previews of upcoming blocks and sound effects. I hope you enjoy playing.');
            }
            else if(i == 1){
                addProjectInHL('Checkers', 'proj-checkers.png', 'A JavaScript version of the classis board game Checkers. This is a two player game and includes all the rules of checkers with multitake and forced takes implemented and the ability to see where you can move your piece to next. ')
            }
            else if(i == 2){
                addProjectInHL('To-Do', 'proj-todo.png', 'My own take on creating a to-do list. This application allows the user to create as many tasks as they would like. The app has a built in favourite option and gives the user the ability to delete tasks and display different sets of tasks ie completed tasks.')
            }
            else if(i == 3){
                addProjectInHL('Calculator', 'proj-calculator.png', 'This calculator has multiple features. It allows for the use of all four basic operators in basic arithmetic. It displays previous inputs, allows for the stringing together of multiple operations. You can use your own keypad to enter commands by clicking into the screen area.')
            }
            else if(i == 4){
                addProjectInHL('Wikipedia-API', 'proj-wikipedia.png', 'I created this wikipedia serch engine by utilizing the Wikipedia API. The user can search through the wikipedia database for pages and the most relevant pages will be listed with easy clickable links. There is also a random page feature.')
            }
            else if(i == 5){
                addProjectInHL('Snake', 'proj-snake.png', 'The classic game of snake remade in JavaScript. Snake follows the rules of the classic game where the player has to collect food to grow bigger while the game gets quicker. Control the snake with the arrow keys on your keyboard.');
            }
        })
    }
}



//initializes the entire section
(function initProjectSec(){
    creEl('div', ['projectDiv', 'sectionMainDiv'], 'main', 0);

    creEl('div', 'projectIntro', 'projectDiv', 0);
    creEl('div', ['projectTitle', 'sectionTitle'], 'projectIntro', 0, 'Projects');
    creEl('div', ['projectParagraph', 'sectionParagraph'], 'projectIntro', 0, 'You can see a selection of some of my work below.');

    creEl('div', 'projectSectionsContain', 'projectDiv', 0);

    creEl('div', ['mainProjectSection', 'projectSection'], 'projectSectionsContain', 0);
    creEl('div', ['secondProjectSection', 'projectSection', 'hidden'], 'projectSectionsContain', 0);

    //Main projects section
    creProjectItem('mainProjectSection', 0, 'Tetris',  '<i class="fa fa-th-large"></i>', 'This is the classic video game tetris re-made entirely in vanilla JavaScript. It contains multiple features such as varying difficulty levels, score system etc.');
    creProjectItem('mainProjectSection', 1, 'Checkers', '<i class="fa fa-delicious"></i>', 'My own version of Checkers created using vanilla JavaScript. It contains most of the offical rules of checkers including mandatory takes and multi-takes.' );
    creProjectItem('mainProjectSection', 2, 'To-Do', '<i class="fa fa-calendar"></i>', 'A To-Do list written in pure JavaScript. This app allows the user to create items, favourite them, delete them and allows the user to cycle between different display options.');
    
    //Secondary projects section
    creProjectItem('secondProjectSection', 3, 'Calculator', '<i class="fa fa-calculator"></i>', 'A calculator with multiple features including the ability to display previous inputs and to string together numerous commands into a single equation.')
    creProjectItem('secondProjectSection', 4, 'Wiki-API', '<i class="fa fa-wikipedia-w"></i>', 'This is my Wikipedia search engine which utilizes the wikipedia API to bring the user back their results.');
    creProjectItem('secondProjectSection', 5, 'Snake', '<i class="fa fa-gamepad"></i>', 'A remake of the classic phone game snake. Snake utilizes keyboard controls and all the rules of the classic game.')

    creEl('div', 'projectMore', 'projectDiv', 0);
    creEl('div', ['portButton','projectMoreButton'], 'projectMore', 0, 'Show More');

    creEl('div', ['projectDarken', 'hidden'], 'main', 0);
    creEl('div', 'projectInfoDiv', 'projectDarken', 0);
    creEl('div', 'projectInfoCross', 'projectInfoDiv', 0, '<i class="fa fa-times"></i>');
    creEl('div', 'projectInfoTitle', 'projectInfoDiv', 0);
    creEl('img', 'projectInfoImg', 'projectInfoDiv', 0);
    creEl('div', 'projectInfoDescription', 'projectInfoDiv', 0);
    creEl('div', ['projectInfoButton', 'portButton'], 'projectInfoDiv', 0);

    addProjectFunctions(document.getElementsByClassName('projectItemImgOver'))

    

    document.getElementsByClassName('projectMoreButton')[0].addEventListener('click', function(){

        if(projectData.showingMore){
            
            window.scrollTo(0, window.scrollY - document.getElementsByClassName('secondProjectSection')[0].offsetHeight);
        }
        hideDiv('secondProjectSection', 0);
        projectData.showingMore = !projectData.showingMore;

    })
})()