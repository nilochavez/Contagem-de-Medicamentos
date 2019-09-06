var titulo = document.querySelector(".titulo");
titulo.textContent = "Separação e Contagem de Medicamentos";


var SomaTotalVelcade = 0;
var totalFrascosVelcade = 0;
var totalFrascosGenuxal = 0;
var totalFrascosVidaza = 0;



var opcoes = document.querySelector("#lista");
var campo = document.querySelector("#recebeQuantidade");
var tabela = document.querySelector("#tabela-medicamentos");







var totalVelcadeTd = document.querySelector(".total-velcade");
var velcadeTd = document.querySelector(".frascos-velcade");


var totalGenuxalTd = document.querySelector(".total-genuxal");
var genuxalTd = document.querySelector(".frascos-genuxal");

var totalVidazaTd = document.querySelector(".total-vidaza");
var vidazaTd = document.querySelector(".frascos-vidaza");

 


var but = document.querySelector("#but");
var vidaza = [];
var genuxal = [];
var velcade = [];


but.addEventListener("click", function(event) {
    event.preventDefault();});

but.onclick = function(){

//chama a função para validar o campo: se retorna falso ela não deixa avançar//
if (!validaCampo()){
	return;
};
adicionaSoro();

validaVidaza();
validaGenuxal();
validaVelcade();

somaFrascosVelcade();
somaFrascosGenuxal();
somaFrascosVidaza();


var totalVelcade = somaFrascosVelcade();
var totalGenuxal = somaFrascosGenuxal();
var totalVidaza = somaFrascosVidaza();


genuxalTd.textContent = Math.ceil(totalFrascosGenuxal);
velcadeTd.textContent = Math.ceil(totalFrascosVelcade);
vidazaTd.textContent = Math.ceil(totalFrascosVidaza);

LimpaCampo();


};


function validaCampo(){

if (campo.value == "") {

	alert("digite a quantidade em mg");
return false;
}

else {
	return true;
}

};







function somaFrascosVelcade(){
	var totalVelcade = 0;
	for(var i = 0; i < velcade.length; i++){
 	totalVelcade = parseFloat(totalVelcade) + parseFloat(velcade[i]);
 	 
 	 totalFrascosVelcade = (totalVelcade / 3.5);
	 
	 totalVelcadeTd.textContent = totalVelcade;
 	 
}};

function somaFrascosGenuxal(){
	var totalGenuxal = 0;
	for(var i = 0; i < genuxal.length; i++){
 	totalGenuxal = parseFloat(totalGenuxal) + parseFloat(genuxal[i]);
 	 
 	 totalFrascosGenuxal = (totalGenuxal / 1000);
	 
	totalGenuxalTd.textContent = totalGenuxal;
 	 
}};

function somaFrascosVidaza(){
	var totalVidaza = 0;
	for(var i = 0; i < vidaza.length; i++){
 	totalVidaza = parseFloat(totalVidaza) + parseFloat(vidaza[i]);
 	 
 	 totalFrascosVidaza = (totalVidaza / 100);
 	
	 totalVidazaTd.textContent = totalVidaza;
 	 
}};





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

//---------------------------------------------------- tabela soros
var totalequiposimples = 0;
var totalsoro100 = 0;
var eqsimples = document.querySelector("#eqsimples");
var eq100simples = document.querySelector("#equipoteste");

var opcoesEquipo = document.querySelector("#lista-equipos");
var opcoesSoro = document.querySelector("#lista-soros");



function adicionaSoro(){

if(opcoesEquipo.value == 1 && opcoesSoro.value == 1){

	totalequiposimples = totalequiposimples +1;
 	eqsimples.textContent = totalequiposimples;
};

if(opcoesEquipo.value == 1 && opcoesSoro.value == 2){

	totalsoro100 = totalsoro100 +1;
 	eq100simples.textContent = totalsoro100;
 	
};



}




