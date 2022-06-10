console.group('assistente-card');
console.log('fragmentElement', fragmentElement);
console.log('configuration', configuration);
console.groupEnd();

var stepsTop = document.querySelectorAll('.step-top'), 
contents = document.querySelectorAll('.right-bottom-element'),
titles = document.querySelectorAll('.right-top-element');

stepsTop.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        stepsTop.forEach((tab)=>{
            tab.classList.remove('is-active');
        });
        titles.forEach((title)=>{
            title.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        stepsTop[index].classList.add('is-active');
        titles[index].classList.add('is-active');
    });
});
