console.group('Title-Labs');
console.log('fragmentElement', fragmentElement);
console.log('configuration', configuration);
console.groupEnd();

//segunda função
//pegando as classes dos botões circulates
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
//segunda função
// pegando as classes dos tracinhos dentro do conteúdo
let itens_stroke = document.querySelectorAll(".item-tirth-stroke");
itens_stroke.forEach((itemTab, i) => {
    itemTab.addEventListener("click", () =>{

        //irá remover a classe is-active de todos outros itens, exceto o clicado
        contents.forEach((content) => {
		content.classList.remove("is-active");
		});
        //removendo a classe de todos os outros botões, exceto o que foi clicado
        itens_stroke.forEach((tab) => {
			tab.classList.remove("btn-ativo"); 
		});
        //sempre irá adicionar a classe btn-ativo na posição que for clicada
        itens_stroke[i].classList.add("btn-ativo");
        //sempre irá adicionar a classe ativa ao item que for clicado
        contents[i].classList.add("is-active");
    });
    
});
//terceira função
let buttons_bottom = document.querySelectorAll(".buttons-bottom");

buttons_bottom.forEach((botao, i) =>{
    botao.addEventListener("click", () =>{
        
        contents.forEach((content) => {
		content.classList.remove("is-active");
		});
        //removendo a classe de todos os outros botões, exceto o que foi clicado
        itens_stroke.forEach((tab) => {
			tab.classList.remove("btn-ativo"); 
		});
        //sempre irá adicionar a classe btn-ativo na posição que for clicada
        itens_stroke[i].classList.add("btn-ativo");
        //sempre irá adicionar a classe ativa ao item que for clicado
        contents[i].classList.add("is-active");
    });
});