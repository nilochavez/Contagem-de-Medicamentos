
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

var totalCitarabinaTd = document.querySelector(".total-citarabina");
var citarabinaTd = document.querySelector(".frascos-citarabina");

var totalDocetaxel80Td = document.querySelector(".total-docetaxel80");
var docetaxel80Td = document.querySelector(".frascos-docetaxel80");

var totalDocetaxel20Td = document.querySelector(".total-docetaxel20");
var docetaxel20Td = document.querySelector(".frascos-docetaxel20");

var totalEunadesTd = document.querySelector(".total-eunades");
var eunadesTd = document.querySelector(".frascos-eunades");

var totalFluoracilaTd = document.querySelector(".total-fluoracila");
var fluoracilaTd = document.querySelector(".frascos-fluoracila");

var totalGencitabina1000Td = document.querySelector(".total-gencitabina1000");
var gencitabina1000Td = document.querySelector(".frascos-gencitabina1000");

var totalGencitabina200Td = document.querySelector(".total-gencitabina200");
var gencitabina200Td = document.querySelector(".frascos-gencitabina200");

var totalHoloxaneTd2 = document.querySelector(".total-holoxane2");
var holoxaneTd2 = document.querySelector(".frascos-holoxane2");

var totalHoloxaneTd1 = document.querySelector(".total-holoxane1");
var holoxaneTd1 = document.querySelector(".frascos-holoxane1");

var totalHoloxaneTd500 = document.querySelector(".total-holoxane500");
var holoxaneTd500 = document.querySelector(".frascos-holoxane500");

var totalFludarabinaTd = document.querySelector(".total-fludarabina");
var fludarabinaTd = document.querySelector(".frascos-fludarabina");

var totalIrinotecanoTd100 = document.querySelector(".total-irinotecano100");
var irinotecanoTd100 = document.querySelector(".frascos-irinotecano100");

var totalIrinotecanoTd40 = document.querySelector(".total-irinotecano40");
var irinotecanoTd40 = document.querySelector(".frascos-irinotecano40");

var totalEloxatinTd = document.querySelector(".total-eloxatin");
var eloxatinTd = document.querySelector(".frascos-eloxatin");

var totalPaclitaxelTd = document.querySelector(".total-paclitaxel");
var paclitaxelTd = document.querySelector(".frascos-paclitaxel");

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

function LimpaCampo() {
  document.querySelector("#form-principal").reset();
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

function validaCitarabina(){

if(opcoes.value == "6"){
	citarabina.push(campo.value);
    console.log(citarabina);
}};

function validaDocetaxel(){

if(opcoes.value == "7"){
	docetaxel.push(campo.value);
    console.log(docetaxel);
}};

function validaEundes(){

if(opcoes.value == "8"){
	eunades.push(campo.value);
    console.log(eunades);
}};


function validaFluoracila(){

if(opcoes.value == "9"){
	fluoracila.push(campo.value);
    console.log(fluoracila);
}};

function validaGencitabina(){

if(opcoes.value == "10"){
	gencitabina.push(campo.value);
    console.log(gencitabina);
}};

function validaHoloxane(){

if(opcoes.value == "11"){
	holoxane.push(campo.value);
    console.log(holoxane);
}};

function validaFludarabina(){

if(opcoes.value == "12"){
	fludarabina.push(campo.value);
    console.log(fludarabina)
}};

function validaIrinotecano(){

if(opcoes.value == "13"){
	irinotecano.push(campo.value);
    console.log(irinotecano)
}};

function validaEloxatin(){

if(opcoes.value == "14"){
	eloxatin.push(campo.value);
    console.log(eloxatin);
}};

function validaPaclitaxel(){

if(opcoes.value == "15"){
	paclitaxel.push(campo.value);
    console.log(paclitaxel);
}};





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
validaCitarabina();
validaDocetaxel();
validaEundes();
validaFluoracila();
validaGencitabina();
validaHoloxane();
validaFludarabina();
validaIrinotecano();
validaEloxatin();
validaPaclitaxel();

somaFrascosVelcade();
somaFrascosGenuxal();
somaFrascosVidaza();
somaFrascosCarboplatina();
somaFrascosCisplatina();
somaFrascosCitarabina();
somaFrascosDocetaxel();
somaFrascosEunades();
somaFrascosFluoracila();
somaFrascosGencitabina();
somaFrascosHoloxane();
somaFrascosFludarabina();
somaFrascosIrinotecano();
somaFrascosEloxatin();
somaFrascosPaclitaxel();


var totalVelcade = somaFrascosVelcade();
var totalGenuxal = somaFrascosGenuxal();
var totalVidaza = somaFrascosVidaza();



// arredonda a quantidade de frascos pra cima

velcadeTd.textContent = Math.ceil(totalFrascosVelcade);
vidazaTd.textContent = Math.ceil(totalFrascosVidaza);
cisplatinaTd.textContent = Math.ceil(totalFrascosCisplatina);
genuxalTd.textContent = Math.ceil(totalFrascosGenuxal);
citarabinaTd.textContent = Math.ceil(totalFrascosCitarabina);
eunadesTd.textContent = Math.ceil(totalFrascosEunades);
fluoracilaTd.textContent = Math.ceil(totalFrascosFluoracila);
fludarabinaTd.textContent = Math.ceil(totalFrascosFludarabina);
eloxatinTd.textContent = Math.ceil(totalFrascosEloxatin);
paclitaxelTd.textContent = Math.ceil(totalFrascosPaclitaxel);

LimpaCampo();


};


