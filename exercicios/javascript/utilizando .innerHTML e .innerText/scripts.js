// Seleção dos elementos
const h1 = document.querySelector("h1");
const a = document.querySelector("a");
const ol = document.querySelector("ol");
const ul = document.querySelector("ul");

// Utilizando o .innerText
h1.innerText = "Aprendendo JavaScript";
a.innerText = "Link adicionado com JavaScript";

// Utilizando o .innerHTML
ol.innerHTML = `
<li><a href="https://www.youtube.com" target="_blank">Youtube</a></li>
<li><a href="https://www.google.com" target="_blank">Google</a></li>
<li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
`;
ul.innerHTML = `
<li>Maçã</li>
<li>Banana</li>
<li>Uva</li>
`;
