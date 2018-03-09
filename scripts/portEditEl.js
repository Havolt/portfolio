//function utilized across site for creating elements
function creEl(el, classes, apndClass, apndClassNum, inHL, id, src){
    let newEl = document.createElement(el);
    if(typeof(classes) == 'string'){
        newEl.classList.add(classes);
    }else{
        for(let i = 0; i < classes.length; i++){newEl.classList.add(classes[i])}
    }
    if(inHL){newEl.innerHTML = inHL};
    if(id){newEl.id = id}
    if(src){newEl.src = src}
    document.getElementsByClassName(apndClass)[apndClassNum].appendChild(newEl);
}

//function used in opening external web pages
function openWebPage(elClass, numOfClass, destinationLink){
    document.getElementsByClassName(elClass)[numOfClass].addEventListener('click', function(){
        window.open(destinationLink);
    })
}
