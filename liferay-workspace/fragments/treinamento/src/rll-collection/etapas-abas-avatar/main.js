console.group('Title-Labs');
console.log('fragmentElement', fragmentElement);
console.log('configuration', configuration);
console.groupEnd();
let buttons_circle = document.querySelectorAll(".btn-item");
let contents = document.querySelectorAll(".content-info-botom-personagem");

buttons_circle.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		contents.forEach((content) => {
		content.classList.remove("is-active");
		});
		buttons_circle.forEach((tab) => {
			tab.classList.remove("ativado");
		});
		contents[index].classList.add("is-active");
		buttons_circle[index].classList.add("ativado");
	});										 
});