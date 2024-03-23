// Criação dos elementos
const h1 = document.createElement("h1");
const produto = document.createElement("div");
const body = document.querySelector("body");

h1.innerText = "Este é um título";
h1.setAttribute("id", "titulo");
produto.innerHTML = `
    <img src="http://via.placeholder.com/150"/>
    <p>Nome: Notebook Dell</p>
    <p>Descrição: Lorem Ipsum Dolur Amet sir.</p>
    <p>Preço: R$ 2.500,00</p>
`;
body.appendChild(h1);
body.appendChild(produto);
