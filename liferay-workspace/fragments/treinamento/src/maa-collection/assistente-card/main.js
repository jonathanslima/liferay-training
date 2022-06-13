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

var stepsBottomFour = document.querySelectorAll('.step-bottom-child.four'),
contentsFour = document.querySelectorAll('.right-bottom-element-child.four');

stepsBottomFour.forEach((step,index) => {
    step.addEventListener('click', () => {
        contentsFour.forEach((contentFour) => {
            contentFour.classList.remove('is-active');
        });
        stepsBottomFour.forEach((stepFour) => {
            stepFour.classList.remove('is-active');
        });
        contentsFour[index].classList.add('is-active');
        stepsBottomFour[index].classList.add('is-active');
    });
});

var stepsBottomThree = document.querySelectorAll('.step-bottom-child.three'),
contentsThree = document.querySelectorAll('.right-bottom-element-child.three');

stepsBottomThree.forEach((step,index) => {
    step.addEventListener('click', () => {
        contentsThree.forEach((contentThree) => {
            contentThree.classList.remove('is-active');
        });
        stepsBottomThree.forEach((stepThree) => {
            stepThree.classList.remove('is-active');
        });
        contentsThree[index].classList.add('is-active');
        stepsBottomThree[index].classList.add('is-active');
    });
});

var stepsBottomOne = document.querySelectorAll('.step-bottom-child.one'),
contentsOne = document.querySelectorAll('.right-bottom-element-child.one');

stepsBottomOne.forEach((step,index) => {
    step.addEventListener('click', () => {
        contentsOne.forEach((contentOne) => {
            contentOne.classList.remove('is-active');
        });
        stepsBottomOne.forEach((stepOne) => {
            stepOne.classList.remove('is-active');
        });
        contentsOne[index].classList.add('is-active');
        stepsBottomOne[index].classList.add('is-active');
    });
});