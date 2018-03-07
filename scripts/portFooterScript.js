
function createFooterLink(linkName,  inHL, linkDestination){
    creEl('div', ['footerLink', 'footerLink'+ linkName], 'footerLinksDiv', 0);
    creEl('div', ['footerLinkIcon', 'footerLinkIcon'+linkName], 'footerLink'+ linkName, 0, '<i class="fa fa-'+inHL+'"></i>');
    openWebPage('footerLink'+linkName, 0, linkDestination)
}

(function initFooterSec(){
    creEl('div', ['footerDiv', 'sectionMainDiv'], 'site', 0);

    creEl('div', 'footerLinksDiv', 'footerDiv', 0);
    createFooterLink('Linkedin', 'linkedin', 'https://www.linkedin.com/in/mark-fitzpatrick-491419100/');
    createFooterLink('Twitter', 'twitter', 'https://twitter.com/jetsetfitz');
    createFooterLink('Github', 'github', 'https://github.com/Havolt');

    creEl('div', 'copyrightDiv', 'footerDiv', 0, 'Created by me &copy; 2018');
})()