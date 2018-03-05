function createAboutListItem(listItemName, iconHL, titleHL){
    creEl('div', ['aboutListItem', 'abl'+listItemName], 'aboutListContain', 0);
    creEl('div', ['aboutListContainIcon', 'abli'+listItemName], 'abl'+listItemName, 0, iconHL);
    creEl('div', ['aboutListTitle', 'ablt'+listItemName], 'abl'+listItemName, 0, 'Responsive Design');
    creEl('div', ['aboutListParagraph', 'ablp'+listItemName], 'abl'+listItemName, 0, 'I put a strong focus on creating responsive websites to fit all screen sizes and types. I build from the ground up to fit mobile first design practices and make beautiful websites from the ground up.');
}

(function initAboutSec(){
    creEl('div', ['aboutDiv', 'sectionMainDiv'], 'site', 0);

    creEl('div', 'aboutIntro', 'aboutDiv', 0)
    creEl('div', 'aboutTitle', 'aboutIntro', 0, 'About Me');
    creEl('div', 'aboutParagraph', 'aboutIntro', 0, "I have a large range of Front End skills ranging from design to HTML, CSS, JavaScript and GitHub and multiple frameworks. ")
    creEl('div', 'aboutProfilePic', 'aboutIntro', 0);
    creEl('img', 'aboutPPImg', 'aboutProfilePic', 0, '', '', 'images/pp1.jpg');

    creEl('div', 'aboutListContain', 'aboutDiv', 0);
    createAboutListItem('responsive', '<i class="fa fa-mobile"></i>');
    
})()