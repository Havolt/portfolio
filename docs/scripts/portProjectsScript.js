let projectData = {fadeAmt : 0.1, fadeDir: 0.1, showingMore : false, link : '', projectInfoExist: false}

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
        if(bool){document.getElementsByClassName('projectDarken')[0].classList.add('hidden')}    
    }
}

//gives the div of class 'projectDarken' the hidden class or removes it
function toggleHidden(darkDiv){
    projectData.projectInfoExist = !projectData.projectInfoExist;
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
function addProjectInHL(title, imgLink, description, lnk){
    document.getElementsByClassName('projectInfoTitle')[0].innerHTML = title;
    document.getElementsByClassName('projectInfoButton')[0].innerHTML = 'View ' + title;
    document.getElementsByClassName('projectInfoImg')[0].src='images/'+ imgLink;
    document.getElementsByClassName('projectInfoDescription')[0].innerHTML = description;
    projectData.link = lnk;
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
                addProjectInHL('Tetris', 'proj-tetris.png', 'This is my version of Tetris made with Vanilla JavaScript. The game requires a keyboard for control of pieces. The game has multiple features such as difficulty levels, previews of upcoming blocks and sound effects. I hope you enjoy playing.', 'tetris.html');
            }
            else if(i == 1){
                addProjectInHL('No-Context-Creepy', 'proj-nocontext.png', 'No Context Creepy is a website I created for my own recreational use. It retrieves random creepy stories from the askreddit website and displays them to the user if they fall under certain prerequisites. It utilizes the reddit API to work.', 'nocontext.html')
            }
            else if(i == 2){
                addProjectInHL('To-Do', 'proj-todo.png', 'My own take on creating a to-do list. This application allows the user to create as many tasks as they would like. The app has a built in favourite option and gives the user the ability to delete tasks and display different sets of tasks ie completed tasks.', 'todo.html')
            }
            else if(i == 3){
                addProjectInHL('Checkers', 'proj-checkers.png', 'A JavaScript version of the classis board game Checkers. This is a two player game and includes all the rules of checkers with multitake and forced takes implemented and the ability to see where you can move your piece to next.', 'checkers.html')
            }
            else if(i == 4){
                addProjectInHL('Wikipedia-API', 'proj-wikipedia.png', 'I created this wikipedia serch engine by utilizing the Wikipedia API. The user can search through the wikipedia database for pages and the most relevant pages will be listed with easy clickable links. There is also a random page feature.', 'wikiAPI.html')
            }
            else if(i == 5){
                addProjectInHL('Calculator', 'proj-calculator.png', 'This calculator has multiple features. It allows for the use of all four basic operators in basic arithmetic. It displays previous inputs, allows for the stringing together of multiple operations. You can use your own keypad to enter commands by clicking into the screen area.', 'calculator.html')
            }
            else if(i == 6){
                addProjectInHL('Snake', 'proj-snake.png', 'The classic game of snake remade in JavaScript. Snake follows the rules of the classic game where the player has to collect food to grow bigger while the game gets quicker. Control the snake with the arrow keys on your keyboard.', 'snake.html');
            }
            else if(i == 7){
                addProjectInHL('Platformer', 'proj-platformer.png', 'This is a simple 2d platformer which currently has three levels. It utilizes the arrow keys to move the character and space bar to jump. It requires a desktop size screen to play.', 'platformer.html');
            }
        })
    }
}


function projectLinkButtons(lnk){
    window.open(lnk, '_self');
}





//initializes the entire section
(function initProjectSec(){
    creEl('div', ['projectDiv', 'sectionMainDiv'], 'main', 0);

    creEl('div', 'projectIntro', 'projectDiv', 0);
    document.getElementsByClassName('projectIntro')[0].id="projects";
    creEl('div', ['projectTitle', 'sectionTitle'], 'projectIntro', 0, 'Projects');
    creEl('div', ['projectParagraph', 'sectionParagraph'], 'projectIntro', 0, 'You can see a selection of some of my work below.');

    creEl('div', 'projectSectionsContain', 'projectDiv', 0);

    creEl('div', ['mainProjectSection', 'projectSection'], 'projectSectionsContain', 0);
    creEl('div', ['secondProjectSection', 'projectSection', 'hidden'], 'projectSectionsContain', 0);
    creEl('div', ['thirdProjectSection', 'projectSection', 'hidden'], 'projectSectionsContain', 0);

    //Main projects section
    creProjectItem('mainProjectSection', 0, 'Tetris',  '<i class="fa fa-th-large"></i>', 'This is the classic video game tetris re-made entirely in vanilla JavaScript. It contains multiple features such as varying difficulty levels, score system etc.');
    creProjectItem('mainProjectSection', 1, 'NC-Creepy', '<i class="fab fa-reddit"></i>', 'Creepy story generator that utilized the Reddit API to provide the user with a different story each time they press a button.' )
    creProjectItem('mainProjectSection', 2, 'To-Do', '<i class="fa fa-calendar"></i>', 'A To-Do list written in pure JavaScript. This app allows the user to create items, favourite them, delete them and allows the user to cycle between different display options.');

    
    //Secondary projects section
    creProjectItem('secondProjectSection', 3, 'Checkers', '<i class="fab fa-delicious"></i>', 'My own version of Checkers created using vanilla JavaScript. It contains most of the offical rules of checkers including mandatory takes and multi-takes.' );
    creProjectItem('secondProjectSection', 4, 'Wiki-API', '<i class="fab fa-wikipedia-w"></i>', 'This is my Wikipedia search engine which utilizes the wikipedia API to bring the user back their results.');
    creProjectItem('secondProjectSection', 5, 'Calculator', '<i class="fa fa-calculator"></i>', 'A calculator with multiple features including the ability to display previous inputs and to string together numerous commands into a single equation.')
    
    //Third projects section
    creProjectItem('thirdProjectSection', 6, 'Snake', '<i class="fa fa-gamepad"></i>', 'A remake of the classic phone game snake. Snake utilizes keyboard controls and all the rules of the classic game.')
    creProjectItem('thirdProjectSection', 7, 'Platformer', '<i class="fa fa-shoe-prints"></i>', 'A 2D platformer in which the user must jump his way to victory;' );

    creEl('div', 'projectMore', 'projectDiv', 0);
    creEl('div', ['portButton','projectMoreButton'], 'projectMore', 0, 'Show More');

    creEl('div', ['projectDarken', 'hidden'], 'site', 0);
    creEl('div', 'projectInfoDiv', 'projectDarken', 0);
    creEl('div', 'projectInfoCross', 'projectInfoDiv', 0, '<i class="fa fa-times"></i>');
    creEl('div', 'projectInfoTitle', 'projectInfoDiv', 0);
    creEl('img', 'projectInfoImg', 'projectInfoDiv', 0);
    creEl('div', 'projectInfoDescription', 'projectInfoDiv', 0);
    creEl('div', ['projectInfoButton', 'portButton'], 'projectInfoDiv', 0);

    addProjectFunctions(document.getElementsByClassName('projectItemImgOver'))

    document.getElementsByClassName('projectInfoButton')[0].addEventListener('click', function(){projectLinkButtons(projectData.link)})

    document.getElementsByClassName('projectMoreButton')[0].addEventListener('click', function(){

        if(projectData.showingMore){
            document.querySelector('.projectMoreButton').innerHTML = 'Show More';
            window.scrollTo(0, window.scrollY - document.getElementsByClassName('secondProjectSection')[0].offsetHeight);
        }else{
            document.querySelector('.projectMoreButton').innerHTML = 'Show Less';
        }
        hideDiv('secondProjectSection', 0);
        hideDiv('thirdProjectSection', 0);
        projectData.showingMore = !projectData.showingMore;

    })
})()