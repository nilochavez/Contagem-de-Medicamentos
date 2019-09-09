
var opcoes = document.querySelector("#lista");
var campo = document.querySelector("#recebeQuantidade");
var tabela = document.querySelector("#tabela-medicamentos");
var but = document.querySelector("#but");


// variaveis criadas a partir da tabela de medicamentos
var totalVelcadeTd = document.querySelector(".total-velcade");
var velcadeTd = document.querySelector(".frascos-velcade");

var totalGenuxalTd = document.querySelector(".total-genuxal");
var genuxalTd = document.querySelector(".frascos-genuxal");

var totalVidazaTd = document.querySelector(".total-vidaza");
var vidazaTd = document.querySelector(".frascos-vidaza");

var totalCarboplatinaTd = document.querySelector(".total-carbo450");
var carboplatinaTd = document.querySelector(".frascos-carbo450");

var totalCarboplatinaTd150 = document.querySelector(".total-carbo150");
var carboplatinaTd150 = document.querySelector(".frascos-carbo150");

var totalCarboplatinaTd50 = document.querySelector(".total-carbo50");
var carboplatinaTd50 = document.querySelector(".frascos-carbo50");

var totalCisplatinaTd = document.querySelector(".total-cisplatina");
var cisplatinaTd = document.querySelector(".frascos-cisplatina");




function validaCampo(){

if (opcoes.value == "0" && opcoesEquipo.value != "0" && opcoesSoro.value != "0") {

	adicionaSoro();

} 

else if (campo.value == "" || opcoes.value == "0"){

	alert("digite a quantidade em mg ou verifique os soros");
return false;
}

else {
	
	return true;
	
}

};

// insere a dose no array do medicamento selelecionado
function validaCisplatina(){

if(opcoes.value == "5"){
	cisplatina.push(campo.value);
    console.log(cisplatina);

}}
 	 

function validaCarboplatina(){

if(opcoes.value == "4"){
	carboplatina.push(campo.value);
    console.log(carboplatina);

}}

function validaVelcade(){

if(opcoes.value == "3"){
	velcade.push(campo.value);
    console.log(velcade);
    
};
};
 

function validaGenuxal(){

if(opcoes.value == "2"){
	genuxal.push(campo.value);
    console.log(genuxal);
};
};


function validaVidaza(){

if(opcoes.value == "1"){
	vidaza.push(campo.value);
    console.log(vidaza);
};
};

function LimpaCampo() {
  document.querySelector("#form-principal").reset();
};



but.addEventListener("click", function(event) {
    event.preventDefault();});

but.onclick = function(){


if (!validaCampo()){ //chama a função para validar o campo: se retorna falso ela não deixa avançar//
	return;
};

adicionaSoro();

validaVidaza();
validaGenuxal();
validaVelcade();
validaCarboplatina();
validaCisplatina();

somaFrascosVelcade();
somaFrascosGenuxal();
somaFrascosVidaza();
somaFrascosCarboplatina();
somaFrascosCisplatina();



var totalVelcade = somaFrascosVelcade();
var totalGenuxal = somaFrascosGenuxal();
var totalVidaza = somaFrascosVidaza();


// arredonda a quantidade de frascos pra cima

velcadeTd.textContent = Math.ceil(totalFrascosVelcade);
vidazaTd.textContent = Math.ceil(totalFrascosVidaza);
cisplatinaTd.textContent = Math.ceil(totalFrascosCisplatina);
genuxalTd.textContent = Math.ceil(totalFrascosGenuxal);

LimpaCampo();


};


