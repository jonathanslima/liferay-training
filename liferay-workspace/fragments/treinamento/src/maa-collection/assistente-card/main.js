console.group('assistente-card');
console.log('fragmentElement', fragmentElement);
console.log('configuration', configuration);
console.groupEnd();

var stepsTop = document.querySelectorAll('.step-top'), 
contents = document.querySelectorAll('.right-bottom-element-parent'),
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

var stepsBottomFive = document.querySelectorAll('.step-bottom-child.five'),
contentsFive = document.querySelectorAll('.right-bottom-element-child.five');

stepsBottomFive.forEach((step,index) => {
    step.addEventListener('click', () => {
        contentsFive.forEach((contentFive) => {
            contentFive.classList.remove('is-active');
        });
        stepsBottomFive.forEach((stepFive) => {
            stepFive.classList.remove('is-active');
        });
        contentsFive[index].classList.add('is-active');
        stepsBottomFive[index].classList.add('is-active');
    });
});

