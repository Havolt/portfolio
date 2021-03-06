//object holds data required for functions
let contactData = {ccBlueTopPos : -100, ccBlueTopDir : 2, ccBlueTopMove : true}

//slides the contact section down into view or pushes it back up
function showContact(sec){
    if(contactData.ccBlueTopMove){contactData.ccBlueTopMove = false;}
    contactData.ccBlueTopPos = contactData.ccBlueTopPos + contactData.ccBlueTopDir;
    sec.style.top = contactData.ccBlueTopPos + '%';
    if(contactData.ccBlueTopPos < 0 &&  contactData.ccBlueTopPos > -101){
        setTimeout(function(){showContact(sec)}, 18)
    }
    else{contactData.ccBlueTopDir = -contactData.ccBlueTopDir; contactData.ccBlueTopMove = true;}
}

//gives form elements correct data to send information to formspree
function setFormData(){
    document.getElementsByClassName('ccBlueForm')[0].action="https://formspree.io/markfitz815@gmail.com";
    document.getElementsByClassName('ccBlueForm')[0].method="POST"
    document.getElementsByClassName('ccBlueName')[0].type="text";
    document.getElementsByClassName('ccBlueName')[0].name="name";
    document.getElementsByClassName('ccBlueName')[0].placeholder="Name";
    document.getElementsByClassName('ccBlueEmail')[0].type="email";
    document.getElementsByClassName('ccBlueEmail')[0].name="_replyto";
    document.getElementsByClassName('ccBlueEmail')[0].placeholder="Email address";
    document.getElementsByClassName('ccBlueText')[0].name="text";
    document.getElementsByClassName('ccBlueText')[0].placeholder="Tell me a little about your company and the position you feel I would be right for.";
    document.getElementsByClassName('ccBlueSubmit')[0].type="submit";
    document.getElementsByClassName('ccBlueSubmit')[0].value="Send";
}

function shakeBox(div, size, runner){
    div.style.left= size + "px";
    runner++;
    if(runner < 8){setTimeout(function(){shakeBox(div, -size, runner)}, 80)}
    else{div.style.left="0px"}
}


//initializes contact section
(function initContactSec(){
    creEl('div', ['contactDiv', 'sectionMainDiv'], 'main', 0);
    creEl('div', 'contactContain', 'contactDiv', 0);
    creEl('div','contactIcon', 'contactContain', 0, '<i class="fa fa-envelope-square"></i>')
    creEl('div', 'contactTitle', 'contactContain', 0, 'Interestested in hiring me?');
    creEl('div', 'contactPara', 'contactContain', 0, "I am currently looking for new work and would be very interested to hear about your open positions. Please get in touch with me by using the button below.")
    creEl('div', ['portButton','contactButton'], 'contactContain', 0, 'Contact Me');

    creEl('div', 'contactContainBlue', 'contactDiv', 0);
    creEl('div', 'ccBlueCross', 'contactContainBlue', 0, '<i class="fa fa-times"></i>');
    creEl('div', 'ccBlueTitle', 'contactContainBlue', 0, 'Please enter your details below and I will get back to you as soon as I can.');
    creEl('form', 'ccBlueForm', 'contactContainBlue', 0);
    creEl('input', 'ccBlueName', 'ccBlueForm', 0);
    creEl('input', 'ccBlueEmail', 'ccBlueForm', 0);
    creEl('textarea', 'ccBlueText', 'ccBlueForm', 0);
    creEl('input', 'ccBlueSubmit', 'ccBlueForm', 0, 'Submit');
    
    setFormData();
    
    //adds event listeners to elements on page
    document.getElementsByClassName('contactButton')[0].addEventListener('click', function(){
        if(contactData.ccBlueTopMove){
            showContact(document.getElementsByClassName('contactContainBlue')[0]);
        }
    })
    document.getElementsByClassName('ccBlueCross')[0].addEventListener('click', function(){
        if(contactData.ccBlueTopMove){
            showContact(document.getElementsByClassName('contactContainBlue')[0]);
        }
    })
    document.getElementsByClassName('ccBlueSubmit')[0].addEventListener('click', function(event){

        if(document.getElementsByClassName('ccBlueName')[0].value.length < 1){
            event.preventDefault();
            document.getElementsByClassName('ccBlueName')[0].style.border="#d31717 2px solid";
            shakeBox(document.getElementsByClassName('ccBlueName')[0], 10, 0);
        }
        if(document.getElementsByClassName('ccBlueEmail')[0].value.length < 1){
            event.preventDefault();
            document.getElementsByClassName('ccBlueEmail')[0].style.border="#d31717 2px solid";
            shakeBox(document.getElementsByClassName('ccBlueEmail')[0], 10, 0);
        }
        if(document.getElementsByClassName('ccBlueText')[0].value.length < 1){
            event.preventDefault();
            document.getElementsByClassName('ccBlueText')[0].style.border="#d31717 2px solid";
            shakeBox(document.getElementsByClassName('ccBlueText')[0], 10, 0);
        }
    })
    document.getElementsByClassName('ccBlueName')[0].addEventListener('keydown', function(){
        this.style.border="#444 2px solid";
    })
    document.getElementsByClassName('ccBlueEmail')[0].addEventListener('keydown', function(){
        this.style.border="#444 2px solid";
    })
    document.getElementsByClassName('ccBlueText')[0].addEventListener('keydown', function(){
        this.style.border="#444 2px solid";
    })
})()