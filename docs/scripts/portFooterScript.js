
//creates the links to external websites in the footer
function createFooterLink(linkName,  inHL, linkDestination){
    creEl('div', ['footerLink', 'footerLink'+ linkName], 'footerLinksDiv', 0);
    creEl('div', ['footerLinkIcon', 'footerLinkIcon'+linkName], 'footerLink'+ linkName, 0, '<i class="fab fa-'+inHL+'"></i>');
    openWebPage('footerLink'+linkName, 0, linkDestination)
}

//initializes the footer section of the wepage
(function initFooterSec(){
    creEl('div', ['footerDiv', 'sectionMainDiv'], 'main', 0);

    creEl('div', 'footerLinksDiv', 'footerDiv', 0);
    createFooterLink('Linkedin', 'linkedin', 'https://www.linkedin.com/in/mark-fitzpatrick-491419100/');
    createFooterLink('Instagram', 'instagram', 'https://www.instagram.com/fitzandshout/');
    createFooterLink('Twitter', 'twitter', 'https://twitter.com/jetsetfitz');
    createFooterLink('Github', 'github', 'https://github.com/Havolt');
    createFooterLink('Facebook', 'facebook', 'https://www.facebook.com/mark.fitzpatrick.545');
    

    creEl('div', 'copyrightDiv', 'footerDiv', 0, 'Created by me &copy; 2018');
})()