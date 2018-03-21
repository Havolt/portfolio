function creElT(type, cls, apnd, inHL, src, id){
    let newEl = document.createElement(type);
    if(typeof(cls) == 'object'){
        cls.forEach(function(element){newEl.classList.add(element);})
    }else{newEl.classList.add(cls);}
    if(inHL){newEl.innerHTML=inHL};
    if(src){newEl.src=src};
    if(id){newEl.id=id};
    apnd.appendChild(newEl);
};

let todoData = {name: 'To-do'}

let listObj = {
    itemData: [],
    currOption: [{num : 0, name: 'all', selected: true}, {num: 1, name: 'incomplete', selected: false}, {num: 2, name: 'finished', selected: false}],
    addOptionButtonFunction: function(divs){
        for(let i = 0; i < divs.length; i++){
            divs[i].addEventListener('click', function(){
                for(let j = 0; j < listObj.currOption.length; j++){
                    if(i != j){listObj.currOption[j].selected = false;}else{listObj.currOption[j].selected = true;}
                }
                for(let j = 0; j < listObj.currOption.length; j++){
                    if(listObj.currOption[j].selected){
                        let classCheck = false;
                        for(let k = 0; k < divs[j].classList.length; k++){if(divs[j].classList[k] == 'optionsSelect'){classCheck = true}}
                        if(!classCheck){divs[j].classList.add('optionsSelect')}
                    }else{
                        for(let k = 0; k < divs[j].classList.length; k++){if(divs[j].classList[k] == 'optionsSelect'){divs[j].classList.remove('optionsSelect')}}
                    }
                }
                listObj.displayChosen(divs);
            })
        }
    },
    displayChosen: function(divs){
        let taskItems = document.getElementsByClassName('listItem');
        for(let j = 0; j < taskItems.length; j++){
            for(let k = 0; k < taskItems[j].classList.length; k++){
                if(taskItems[j].classList[k] == 'listItemHide'){
                    taskItems[j].classList.remove('listItemHide')
                }
            }
        }
        for(let i = 0; i < listObj.currOption.length; i++){
            if(listObj.currOption[i].selected){
                for(let j = 0; j < listObj.itemData.length; j++){
                    if(listObj.currOption[i].num == 1){
                        if(listObj.itemData[j].complete){
                            taskItems[listObj.itemData[j].number].classList.add('listItemHide');
                        }
                    }else if(listObj.currOption[i].num == 2){
                        if(!listObj.itemData[j].complete){
                            taskItems[listObj.itemData[j].number].classList.add('listItemHide');
                        }
                    }
                }
            }
        }
    },
    newItem: function(){
        if(document.getElementsByClassName('newListInput')[0].value){
            let newObj = {};
            newObj.text = document.getElementsByClassName('newListInput')[0].value;
            newObj.complete = false;
            newObj.starred = false;
            listObj.itemData.push(newObj);
        }
        document.getElementsByClassName('newListInput')[0].value = '';
        },
    sortFavs: function(){


        //ALL THAT MATTERS IS THEIR POSITION IN THE LIST

        for(let i = 0; i < listObj.itemData.length; i++){
            if(listObj.itemData[i].starred){
                let myObjHld = listObj.itemData[i];
                listObj.itemData.splice(listObj.itemData.length, 0, myObjHld);
                listObj.itemData.splice(i, 1);
                
            }
        }

        for(let i = 0; i < listObj.itemData.length; i++){
            if(!listObj.itemData[i].starred){
                
                for(let j = i; j >= 0; j--){
                    if(listObj.itemData[j].starred){
                        let myObjHld = listObj.itemData[j];
                        listObj.itemData.splice(i+1, 0, myObjHld);
                        listObj.itemData.splice(j, 1);
                    }
                }
            }
        }



    },
    clearList: function(){
        document.getElementsByClassName('listContain')[0].innerHTML='';
    },
    createList: function(){
        let listRunner = 0;
        for(let i = listObj.itemData.length-1; i >= 0; i--){
            listObj.itemData[i].number = listRunner;
            
            creElT('div', 'listItem', document.getElementsByClassName('listContain')[0]);
            creElT('div', 'listItemCheck', document.getElementsByClassName('listItem')[listRunner]);
            document.getElementsByClassName('listItemCheck')[listRunner].addEventListener('click', function(){
                const myCheckNum = listRunner;
                if(!listObj.itemData[i].complete){
                    document.getElementsByClassName('listItemCheck')[listObj.itemData[i].number].innerHTML = '<i class="fa fa-check"></i>';
                    listObj.itemData[i].complete = true;
                }else{
                    document.getElementsByClassName('listItemCheck')[listObj.itemData[i].number].innerHTML = '';
                    listObj.itemData[i].complete = false;
                }
            })
            creElT('div', 'listItemText', document.getElementsByClassName('listItem')[listRunner], listObj.itemData[i].text);
            creElT('div', 'listItemCross', document.getElementsByClassName('listItem')[listRunner], '<i class="fa fa-times"></i>');
            document.getElementsByClassName('listItemCross')[listRunner].addEventListener('click', function(){
                let deletedNum = listObj.itemData[i].number;
                document.getElementsByClassName('listContain')[0].removeChild(document.getElementsByClassName('listItem')[listObj.itemData[i].number]);
                listObj.itemData.splice(i, 1)
                for(let j = 0; j < listObj.itemData.length; j++){
                    if(listObj.itemData[j].number > deletedNum){
                        listObj.itemData[j].number--;
                    }
                }
                document.getElementsByClassName('listContain')[0].innerHTML = '';
                listObj.createList();
                listObj.hideOptions();
            });
            if(!listObj.itemData[i].starred){
            creElT('div', 'listItemFav', document.getElementsByClassName('listItem')[listRunner], '<i class="fa fa-star"></i>');
            }else{
                creElT('div', ['listItemFav', 'listItemFavSelect'], document.getElementsByClassName('listItem')[listRunner], '<i class="fa fa-star"></i>');
                document.getElementsByClassName('listItem')[listRunner].classList.add('listItemGold');
            }
            document.getElementsByClassName('listItemFav')[listRunner].addEventListener('click', function(){
                listObj.itemData[i].starred = !listObj.itemData[i].starred;
                listObj.sortFavs();
                listObj.clearList();
                listObj.hideOptions();
                listObj.createList(); 
                
            })
            listRunner++;
        }
    },
    hideOptions: function(){
        if(listObj.itemData.length > 0){
            let optionsClassTrue = true;
            for(let i = 0; i < document.getElementsByClassName('optionsAllContain')[0].classList.length; i++ ){
                if(document.getElementsByClassName('optionsAllContain')[0].classList[i] == 'optionsContainHide'){
                    document.getElementsByClassName('optionsAllContain')[0].classList.remove('optionsContainHide')
                }
            }
        }else if(listObj.itemData.length < 1){
            let optionsClassTrue = true
            for(let i = 0; i < document.getElementsByClassName('optionsAllContain')[0].classList.length; i++ ){
                if(document.getElementsByClassName('optionsAllContain')[0].classList[i] == 'optionsContainHide'){
                    optionsClassTrue = false;
                }
            }
            if(optionsClassTrue){document.getElementsByClassName('optionsAllContain')[0].classList.add('optionsContainHide')}
        }
    },
    clearAll: function(button){
        button.addEventListener('click', function(){
            
            if(listObj.itemData.length > 0){
                creElT('div', 'clearAllBG', document.getElementById('app'));
                creElT('div', 'clearAllWindow', document.getElementsByClassName('clearAllBG')[0]);
                creElT('div', 'clearAllTop', document.getElementsByClassName('clearAllWindow')[0], 'Clear All Tasks?');
                creElT('div', ['clearAllButton', 'clearAllYesButton'], document.getElementsByClassName('clearAllWindow')[0], 'Yes');
                creElT('div', ['clearAllButton', 'clearAllNoButton'], document.getElementsByClassName('clearAllWindow')[0], 'No');
                document.getElementsByClassName('clearAllYesButton')[0].addEventListener('click', function(){
                    listObj.itemData = [];
                    listObj.clearList();
                    listObj.hideOptions();
                    document.getElementsByClassName('clearAllBG')[0].parentNode.removeChild(document.getElementsByClassName('clearAllBG')[0]);
                });
                document.getElementsByClassName('clearAllNoButton')[0].addEventListener('click', function(){
                    document.getElementsByClassName('clearAllBG')[0].parentNode.removeChild(document.getElementsByClassName('clearAllBG')[0]);
                });
            }
        })
    },
    showOptionsBurger: function(button){
        button.addEventListener('click', function(){
            button.classList.add('optionsMenuHide');
            document.getElementsByClassName('optionsContain')[0].classList.add('optionsContainShow');
        })
    },
    hideOptionsBurger: function(button){
        button.addEventListener('click', function(){
            document.getElementsByClassName('optionsMenu')[0].classList.remove('optionsMenuHide');
            document.getElementsByClassName('optionsContain')[0].classList.remove('optionsContainShow');
        })
    },
    
    getTask: function(button){button.addEventListener('click', function(){
        listObj.newItem();
        listObj.clearList();
        listObj.sortFavs(); 
        listObj.hideOptions();
        listObj.createList();
    })}
};


(function initApp(){
    document.getElementsByClassName('projectTitle')[0].innerHTML = todoData.name;
    underlineLink(todoData.name);
    creElT('div', 'app', document.getElementsByClassName('main')[0], '', '', 'app');
    creElT('div', 'titleContain', document.getElementById('app'));
    creElT('h1', 'toDoTitle', document.getElementsByClassName('titleContain')[0], 'To Do List');
    creElT('div', 'newListContain', document.getElementById('app'));
    creElT('input', 'newListInput', document.getElementsByClassName('newListContain')[0]);
    creElT('button', 'newListButton', document.getElementsByClassName('newListContain')[0], 'Add Task');
    listObj.getTask(document.getElementsByClassName('newListButton')[0]);
    creElT('div', 'listContain', document.getElementById('app'));
    creElT('div', ['optionsAllContain', 'optionsContainHide'], document.getElementById('app'));
    creElT('div', 'optionsMenu', document.getElementsByClassName('optionsAllContain')[0], '<i class="fa fa-bars"></i>');
    listObj.showOptionsBurger(document.getElementsByClassName('optionsMenu')[0]);
    creElT('div', 'optionsContain' , document.getElementsByClassName('optionsAllContain')[0]);
    creElT('div', 'optionsMinimize', document.getElementsByClassName('optionsContain')[0], '<i class="fa fa-window-minimize"></i>');
    listObj.hideOptionsBurger(document.getElementsByClassName('optionsMinimize')[0]);
    creElT('div', ['optionsButton', 'optionsSelect'], document.getElementsByClassName('optionsContain')[0], 'Show All');
    creElT('div', 'optionsButton', document.getElementsByClassName('optionsContain')[0], 'Incomplete');
    creElT('div', 'optionsButton', document.getElementsByClassName('optionsContain')[0], 'Finished');
    listObj.addOptionButtonFunction(document.getElementsByClassName('optionsButton'));
    creElT('div', 'clearButton', document.getElementsByClassName('optionsContain')[0], 'Clear All');
    listObj.clearAll(document.getElementsByClassName('clearButton')[0]);
    document.addEventListener('keydown', function(e){if(e.key == 'Enter'){
        listObj.newItem();
        listObj.clearList();
        listObj.sortFavs(); 
        listObj.hideOptions();
        listObj.createList();
    }});
})()

