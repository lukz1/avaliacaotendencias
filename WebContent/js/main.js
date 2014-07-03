/**
 * 
 */
document.write('<h1>Formulario</h1>');


tabela = document.createElement('table');
trh = document.createElement('tr');
th = document.createElement('th');
th.innerText = 'Nome';


tabela.appendChild(trh).appendChild(th);

formulario = document.createElement('form');

nome = document.createElement('input');
nome.setAttribute('placeholder', 'Digite o nome');

idade = document.createElement('input');
idade.setAttribute('placeholder', 'Digite a idade');

sexo = document.createElement('input');
sexo.setAttribute('placeholder', 'sexo');

function adicionar(evento){
	evento.preventDefault();
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerText = nome.value;
	
	
	nome.value = '';


	tabela.appendChild(tr).appendChild(td);
}

botaoSalvar = document.createElement('button');
botaoSalvar.innerText = 'Adicionar';
botaoSalvar.addEventListener('click', adicionar);


formulario.appendChild(nome);
formulario.appendChild(idade);
formulario.appendChild(sexo);
formulario.appendChild(botaoSalvar);
document.body.appendChild(formulario);
document.body.appendChild(tabela);


