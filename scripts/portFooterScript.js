
function createFooterLink(linkName, linkNum, inHL, linkDestination){
    creEl('div', ['footerLink', 'footerLink'+ linkName], 'footerLinksDiv', 0);
    creEl('div', ['footerLinkIcon', 'footerLinkIcon'+linkName], 'footerLink', linkNum, '<i class="fa fa-'+inHL+'"></i>');
    openWebPage('footerLink'+linkName, 0, linkDestination)
}

(function initFooterSec(){
    creEl('div', ['footerDiv', 'sectionMainDiv'], 'site', 0);

    creEl('div', 'footerLinksDiv', 'footerDiv', 0);
    createFooterLink('Linkedin', 0, 'linkedin', 'https://www.linkedin.com/in/mark-fitzpatrick-491419100/');

    creEl('div', 'copyrightDiv', 'footerDiv', 0, 'Created by me &copy; 2018');
})()