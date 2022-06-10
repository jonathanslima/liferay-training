console.group('assistente-card');
console.log('fragmentElement', fragmentElement);
console.log('configuration', configuration);
console.groupEnd();

var tabs = document.querySelectorAll('.step'), 
contents = document.querySelectorAll('.right-bottom-element'),
titles = document.querySelectorAll('.right-top-element');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab)=>{
            tab.classList.remove('is-active');
        });
        titles.forEach((title)=>{
            title.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
        titles[index].classList.add('is-active');
    });
});
