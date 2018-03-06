function createAboutListItem(listItemName, iconHL, titleHL, paraHL){
    creEl('div', ['aboutListItem', 'abl'+listItemName], 'aboutListContain', 0);
    creEl('div', ['aboutListIcon', 'abli'+listItemName], 'abl'+listItemName, 0, iconHL);
    creEl('div', ['aboutListTitle', 'ablt'+listItemName], 'abl'+listItemName, 0, titleHL );
    creEl('div', ['aboutListParagraph', 'ablp'+listItemName], 'abl'+listItemName, 0, paraHL);
}

(function initAboutSec(){
    creEl('div', ['aboutDiv', 'sectionMainDiv'], 'site', 0);

    creEl('div', 'aboutIntro', 'aboutDiv', 0)
    creEl('div', ['aboutTitle', 'sectionTitle'], 'aboutIntro', 0, 'About Me');
    creEl('div', ['aboutParagraph', 'sectionParagraph'], 'aboutIntro', 0, "I have a large range of Front End skills ranging from design to HTML, CSS, JavaScript and GitHub and multiple frameworks. ")
    creEl('div', 'aboutProfilePic', 'aboutIntro', 0);
    creEl('img', 'aboutPPImg', 'aboutProfilePic', 0, '', '', 'images/pp1.jpg');

    creEl('div', 'aboutListContain', 'aboutDiv', 0);
    createAboutListItem('Responsive', '<i class="fa fa-mobile"></i>', 'Responsive Design', 'I put a strong focus on creating responsive websites to fit all screen sizes and types. I build from the ground up to fit mobile first design practices and make beautiful websites from the ground up.');
    createAboutListItem('Code', '<i class="fa fa-code"></i>', 'Programming Skills', 'I have very strong JavaScropt skills which I utilize to create interactive pages . In the past I have created complicated applications such as checkers and tetris with vanilla JavaScript.'  )
    createAboutListItem('Design', '<i class="fa fa-paint-brush"></i>', 'Beautiful Interfaces', 'I have gained a lot of knowledge on creating elegant, user friendly websites where inormation is presented in a clear and eye-catching way.');

})()