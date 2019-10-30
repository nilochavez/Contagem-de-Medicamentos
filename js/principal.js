
var totalFrascosVelcade = 0;
var totalFrascosGenuxal = 0;
var totalFrascosVidaza = 0;
var totalFrascosCisplatina = 0;
var totalFrascosCitarabina = 0;
var totalFrascosEunades = 0;
var totalFrascosFluoracila = 0;
var totalFrascosFludarabina = 0;
var totalFrascosEloxatin = 0;
var totalFrascosPaclitaxel = 0;

var totalCarboplatina = 0;
var addTabela50 = 0;
var addTabela450 = 0;
var addTabela150 = 0;

var totalDocetaxel = 0;
var addTabelaDoce80 = 0;
var addTabelaDoce20 = 0;

var totalGencitabina = 0;
var addTabelaGenci1000 = 0;
var addTabelaGenci200 = 0;

var totalHoloxane = 0;
var addTabelaHoloxane2 = 0;
var addTabelaHoloxane1 = 0;
var addTabelaHoloxane500 = 0;

var totalIrinotecano = 0;
var addTabelaIrintecano100 = 0;
var addTabelaIrintecano40 = 0;



var vidaza = [];
var genuxal = [];
var velcade = [];
var carboplatina = [];
var cisplatina = [];
var citarabina = [];
var docetaxel = [];
var eunades = [];
var fluoracila = [];
var gencitabina = [];
var holoxane = [];
var fludarabina = [];
var irinotecano = [];
var eloxatin = [];
var paclitaxel = [];


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

function somaFrascosCitarabina(){
	
	var totalCitarabina = 0;
	
	for(var i = 0; i < citarabina.length; i++){
 	
 	totalCitarabina = parseFloat(totalCitarabina) + parseFloat(citarabina[i]);
 	totalFrascosCitarabina = (totalCitarabina / 500);
 	totalCitarabinaTd.textContent = totalCitarabina;
 	 
}};


function somaFrascosDocetaxel(){
	
	for(var i = 0; i < docetaxel.length; i++){
 	
 	totalDocetaxel = parseFloat(totalDocetaxel) + parseFloat(docetaxel[i]);
 	totalDocetaxel80Td.textContent = totalDocetaxel; 
 	console.log(totalDocetaxel);

 	
 if  (parseFloat(docetaxel[i]) > 60){

 		while(docetaxel[i] > 60) {
 		docetaxel[i] = (docetaxel[i] - 80)
 	 	
 	 	addTabelaDoce80 = addTabelaDoce80 + 1;
 	 	docetaxel80Td.textContent = addTabelaDoce80;
 	 	console.log(totalDocetaxel);
 	 	
 	 	
}};

if  (parseFloat(docetaxel[i]) > 20 && docetaxel[i] <= 60){

 		while(docetaxel[i] > 0 ) {
 		docetaxel[i] = (docetaxel[i] - 20)
 	 	
 	 	addTabelaDoce20 = addTabelaDoce20 + 1;
 	 	docetaxel20Td.textContent = addTabelaDoce20;
 	 	console.log(docetaxel[i]);
 	 	
}}}};

function somaFrascosEunades(){
	
	var totalEunades = 0;
	
	for(var i = 0; i < eunades.length; i++){
 	
 	totalEunades = parseFloat(totalEunades) + parseFloat(eunades[i]);
 	totalFrascosEunades = (totalEunades / 100);
 	totalEunadesTd.textContent = totalEunades;

 }};

 function somaFrascosFluoracila(){
	
	var totalFluoracila = 0;
	
	for(var i = 0; i < fluoracila.length; i++){
 	
 	totalFluoracila = parseFloat(totalFluoracila) + parseFloat(fluoracila[i]);
 	totalFrascosFluoracila = (totalFluoracila / 2500);
 	totalFluoracilaTd.textContent = totalFluoracila;

 }};

function somaFrascosGencitabina(){
	
	for(var i = 0; i < gencitabina.length; i++){
 	
 	totalGencitabina = parseFloat(totalGencitabina) + parseFloat(gencitabina[i]);
 	totalGencitabina1000Td.textContent = totalGencitabina; 
 	console.log(totalGencitabina);

 	
 if  (parseFloat(gencitabina[i]) >= 900){

 		while(gencitabina[i] >= 900) {
 		gencitabina[i] = (gencitabina[i] - 1000)
 	 	
 	 	addTabelaGenci1000 = addTabelaGenci1000 + 1;
 	 	gencitabina1000Td.textContent = addTabelaGenci1000;
 	 	console.log(totalGencitabina);
 	 	
 	 	
}};

if  (parseFloat(gencitabina[i]) > 0 && gencitabina[i] <= 800){

 		while(gencitabina[i] > 0 ) {
 		gencitabina[i] = (gencitabina[i] - 200)
 	 	
 	 	addTabelaGenci200 = addTabelaGenci200 + 1;
 	 	gencitabina200Td.textContent = addTabelaGenci200;
 	 	console.log(gencitabina[i]);
 	 	
}}}};

function somaFrascosHoloxane(){
	
	for(var i = 0; i < holoxane.length; i++){
 	
 	totalHoloxane = parseFloat(totalHoloxane) + parseFloat(holoxane[i]);
 	totalHoloxaneTd2.textContent = totalHoloxane; 
 	console.log(totalHoloxane);
 	
 if  (parseFloat(holoxane[i]) > 1500){

 		while(holoxane[i] > 1500) {
 		holoxane[i] = (holoxane[i] - 2000)
 	 	
 	 	addTabelaHoloxane2 = addTabelaHoloxane2 + 1;
 	 	holoxaneTd2.textContent = addTabelaHoloxane2;
 	 	console.log(totalHoloxane);
 	 	
 	 	
}};

if  (parseFloat(holoxane[i]) > 500 && holoxane[i] <= 1000){

 		while(holoxane[i] > 500) {
 		holoxane[i] = (holoxane[i] - 1000)
 	 	
 	 	addTabelaHoloxane1 = addTabelaHoloxane1 + 1;
 	 	holoxaneTd1.textContent = addTabelaHoloxane1;
 	 	console.log(holoxane[i]);
 	 	
}};

if  (parseFloat(holoxane[i]) > 0 && holoxane[i] <= 500){
	
 		while(holoxane[i] > 0) {
 		holoxane[i] = (holoxane[i] - 500)
 	 	
 	 	addTabelaHoloxane500 = addTabelaHoloxane500 + 1;
 	 	holoxaneTd500.textContent = addTabelaHoloxane500;
 	 	console.log(holoxane[i]);
 	 	
 	 	
}}}};

function somaFrascosFludarabina(){
	
	var totalFludarabina = 0;
	
	for(var i = 0; i < fludarabina.length; i++){
 	
 	totalFludarabina = parseFloat(totalFludarabina) + parseFloat(fludarabina[i]);
 	totalFrascosFludarabina = (totalFludarabina / 50);
 	totalFludarabinaTd.textContent = totalFludarabina;

 }};

 function somaFrascosIrinotecano(){
	
	for(var i = 0; i < irinotecano.length; i++){
 	
 	totalIrinotecano = parseFloat(totalIrinotecano) + parseFloat(irinotecano[i]);
 	totalIrinotecanoTd100.textContent = totalIrinotecano; 
 	console.log(totalIrinotecano);

 	
 if  (parseFloat(irinotecano[i]) >= 80){

 		while(irinotecano[i] >= 80) {
 		irinotecano[i] = (irinotecano[i] - 100)
 	 	
 	 	addTabelaIrintecano100 = addTabelaIrintecano100 + 1;
 	 	irinotecanoTd100.textContent = addTabelaIrintecano100;
 	 	console.log(totalIrinotecano);
}};

if  (parseFloat(irinotecano[i]) > 0 && irinotecano[i] <= 80){

 		while(irinotecano[i] > 0 ) {
 		irinotecano[i] = (irinotecano[i] - 40)
 	 	
 	 	addTabelaIrintecano40 = addTabelaIrintecano40 + 1;
 	 	irinotecanoTd40.textContent = addTabelaIrintecano40;
 	 	console.log(irinotecano[i]);
}}}};

function somaFrascosEloxatin(){
	var totalEloxatin = 0;
	for(var i = 0; i < eloxatin.length; i++){
 	totalEloxatin = parseFloat(totalEloxatin) + parseFloat(eloxatin[i]);
 	 
 	 totalFrascosEloxatin = (totalEloxatin / 100);
	 
	 totalEloxatinTd.textContent = totalEloxatin;
	 eloxatinTd.textContent = totalFrascosEloxatin;
	
 	 
}};

function somaFrascosPaclitaxel(){
	var totalPaclitaxel = 0;
	for(var i = 0; i < paclitaxel.length; i++){
 	totalPaclitaxel = parseFloat(totalPaclitaxel) + parseFloat(paclitaxel[i]);
 	 
 	 totalFrascosPaclitaxel = (totalPaclitaxel / 100);
	 
	 totalPaclitaxelTd.textContent = totalPaclitaxel;
	 paclitaxelTd.textContent = totalFrascosPaclitaxel;
	
 	 
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




