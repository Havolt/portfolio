let contactData = {ccBlueTopPos : -100, ccBlueTopDir : 2, ccBlueTopMove : true}

function showContact(sec){
    if(contactData.ccBlueTopMove){contactData.ccBlueTopMove = false;}
    contactData.ccBlueTopPos = contactData.ccBlueTopPos + contactData.ccBlueTopDir;
    sec.style.top = contactData.ccBlueTopPos + '%';
    console.log(contactData.ccBlueTopPos)
    if(contactData.ccBlueTopPos < 0 &&  contactData.ccBlueTopPos > -101){
        setTimeout(function(){showContact(sec)}, 18)
    }
    else{contactData.ccBlueTopDir = -contactData.ccBlueTopDir; contactData.ccBlueTopMove = true;}
}

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




(function initContactSec(){
    creEl('div', ['contactDiv', 'sectionMainDiv'], 'main', 0);
    creEl('div', 'contactContain', 'contactDiv', 0);
    creEl('div','contactIcon', 'contactContain', 0, '<i class="fa fa-envelope-square"></i>')
    creEl('div', 'contactTitle', 'contactContain', 0, 'Interestested in hiring me?');
    creEl('div', 'contactPara', 'contactContain', 0, "I am currently looking for new work and would be very interested to hear about your open positions. Please get in touch with me below.")
    creEl('div', ['portButton','contactButton'], 'contactContain', 0, 'Contact Me');

    creEl('div', 'contactContainBlue', 'contactDiv', 0);
    creEl('div', 'ccBlueCross', 'contactContainBlue', 0, '<i class="fa fa-times"></i>');
    creEl('form', 'ccBlueForm', 'contactContainBlue', 0);
    creEl('input', 'ccBlueName', 'ccBlueForm', 0);
    creEl('input', 'ccBlueEmail', 'ccBlueForm', 0);
    creEl('textarea', 'ccBlueText', 'ccBlueForm', 0);
    creEl('input', 'ccBlueSubmit', 'ccBlueForm', 0, 'Submit');
    
    
    
    setFormData();
    

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
})()