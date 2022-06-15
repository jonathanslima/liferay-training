var tabs = document.querySelectorAll('.dot'), 
titles = document.querySelectorAll('.main-title');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab)=>{
            tab.classList.remove('is-active');
        });
        titles.forEach((title)=>{
            title.classList.remove('is-active');
        });
        tabs[index].classList.add('is-active');
        titles[index].classList.add('is-active');
    });
});