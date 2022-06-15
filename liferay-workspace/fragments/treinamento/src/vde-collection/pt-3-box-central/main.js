var tabs = document.querySelectorAll('.traco'), 
contents = document.querySelectorAll('.main-box'),
buttons = document.querySelectorAll('.btn-nav');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab)=>{
            tab.classList.remove('active');
        });
        contents.forEach((content)=>{
            content.classList.remove('is-active');
        });
        tabs[index].classList.add('active');
        contents[index].classList.add('is-active');
    });
});

buttons.forEach((button, index)=> {
 // buttons.addEventListener('click', () => {
        console.log("clicou", button)
        //contents[index].classList.remove('is-active');
   // });
});