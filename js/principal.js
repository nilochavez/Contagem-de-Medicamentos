
var totalFrascosVelcade = 0;
var totalFrascosGenuxal = 0;
var totalFrascosVidaza = 0;
var totalFrascosCisplatina = 0;

var totalCarboplatina = 0;
var addTabela50 = 0;
var addTabela450 = 0;
var addTabela150 = 0;




var vidaza = [];
var genuxal = [];
var velcade = [];
var carboplatina = [];
var cisplatina = [];



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
    
    console.log(totalFrascosGenuxal);
}};

function somaFrascosVidaza(){
	
	var totalVidaza = 0;
	
	for(var i = 0; i < vidaza.length; i++){
 	
 	totalVidaza = parseFloat(totalVidaza) + parseFloat(vidaza[i]);
 	totalFrascosVidaza = (totalVidaza / 100);
 	totalVidazaTd.textContent = totalVidaza;
 	 
}};


function somaFrascosCarboplatina(){
	
	for(var i = 0; i < carboplatina.length; i++){
 	
 	totalCarboplatina = parseFloat(totalCarboplatina) + parseFloat(carboplatina[i]);
 	totalCarboplatinaTd.textContent = totalCarboplatina; 
 	console.log(totalCarboplatina);
 	
 if  (parseFloat(carboplatina[i]) > 400){

 		while(carboplatina[i] > 400) {
 		carboplatina[i] = (carboplatina[i] - 450)
 	 	
 	 	addTabela450 = addTabela450 + 1;
 	 	carboplatinaTd.textContent = addTabela450;
 	 	console.log(totalCarboplatina);
 	 	
 	 	
}};

if  (parseFloat(carboplatina[i]) > 100 && carboplatina[i] <= 400){

 		while(carboplatina[i] > 100) {
 		carboplatina[i] = (carboplatina[i] - 150)
 	 	
 	 	addTabela150 = addTabela150 + 1;
 	 	carboplatinaTd150.textContent = addTabela150;
 	 	console.log(carboplatina[i]);
 	 	
}};

if  (parseFloat(carboplatina[i]) > 0 && carboplatina[i] <= 100){
	
 		while(carboplatina[i] > 0) {
 		carboplatina[i] = (carboplatina[i] - 50)
 	 	
 	 	addTabela50 = addTabela50 + 1;
 	 	carboplatinaTd50.textContent = addTabela50;
 	 	console.log(carboplatina[i]);
 	 	console.log(addTabela50);
 	 	
}}}};

 	
function somaFrascosCisplatina(){
	
	var totalCisplatina = 0;
	
	for(var i = 0; i < cisplatina.length; i++){
 	
 	totalCisplatina = parseFloat(totalCisplatina) + parseFloat(cisplatina[i]);
 	totalFrascosCisplatina = (totalCisplatina / 50);
 	totalCisplatinaTd.textContent = totalCisplatina;
 	 
}};
 	 


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
 	
}};




