
function showContact(){
    
}




(function initContactSec(){
    creEl('div', ['contactDiv', 'sectionMainDiv'], 'main', 0);
    creEl('div', 'contactContain', 'contactDiv', 0);
    creEl('div','contactIcon', 'contactContain', 0, '<i class="fa fa-envelope-square"></i>')
    creEl('div', 'contactTitle', 'contactContain', 0, 'Interestested in hiring me?');
    creEl('div', 'contactPara', 'contactContain', 0, "I am currently looking for new work and would be very interested to hear about your open positions. Please get in touch with me below.")
    creEl('div', ['portButton','contactButton'], 'contactContain', 0, 'Contact Me');

    creEl('div', 'contactContainBlue', 'contactContain', 0);

    document.getElementsByClassName('contactButton')[0].addEventListener('click', function(){showContact()})
})()