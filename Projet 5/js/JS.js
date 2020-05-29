//TABLEAU CONTENANT LES CITATIONS//

let Citation = {
Phrase : [["tout le monde", "l'échec", "tu", "les amoureux", "les hommes politiques"],
["peut servir", "m'empêche",	"n'apprends pas", "campent", "ouvrent"]
["de mauvais exemple",	"de faire ce qui m'importe", "si tu nes changes pas", "sur leurs positions", "leurs parapluies"]],

Expression : [["le bonheur", "la bonté", "les choses magiques", "la plus grande gloire", "les femmes"],
["est", "mesure", "attendent patiemment", "n'est pas", "veulent"],
["la clé de la vie", "l'élévation de l'âme",
"que nous soyons assez intelligents pour les recevoir", "de ne jamais tomber", "le dernier amour d'un homme"]]
};


// FONCTION QUI MELANGE LES CITATIONS //

const melangeCitation = array=> {
	let i = array.length;
	let SujetCitation = array[0][Math.floor(Math.random()*i)];
	let VerbeCitation = array[1][Math.floor(Math.random()*i)];
	let ComplementCitation = array[2][Math.floor(Math.random()*i)];

	let CompleteCitation = '${SujetCitation} ${VerbeCitation} ${ComplémentCitation}';

return CompleteCitation;
}


// FONCTION QUI AFFICHE LES CITATIONS //

const afficheCitation = () => {

	document.getElementById("citation").innerHTML = "";

const Nbrcitation = document.getElementById("Nbrcitation").value;
let i = 0;

if(Nbrcitation <1 || Nbrcitation >5) {
document.getElementById("citation").innerHTML = "<p>Veuillez entrer un nombre compris entre 1 et 5<p>";
}

else if(Btnphraseclicked){
while (i<Nbrcitation){
	i++;
	let newDiv = document.createElement("p");
	newDiv.innerHTML = melangeCitation(Citation.Phrase);
	document.getElementById("citation").appendChild(newDiv);
}

}

else if(Btnexpressionclicked){
while (i<Nbrcitation){
	i++;
	let newDiv = document.createElement("p");
	newDiv.innerHTML = melangeCitation(Citation.Expression);
	document.getElementById("citation").appendChild(newDiv);
}

}

}


// VARIABLES BOOLEENNES POUR LA GESTION D EVENEMENTS DES BOUTTONS //

let Btnphraseclicked = false;
let Btnexpressionclicked = false;


// GESTION D EVENEMENT DES BOUTONS //

let Btnphrase = document.getElementById("btnphrase");
let Btnexpression = document.getElementById("btnexpression");
let Btneffacer = document.getElementById("btneffacer");

Btnphrase.addEventListener("click", function() {
	Btnphraseclicked = true;
	afficheCitation();
	Btnphraseclicked = false;
});

Btnexpression.addEventListener("click", function() {
	Btnexpressionclicked = true;
	afficheCitation();
	Btnexpressionclicked = false;
});

Btneffacer.addEventListener("click", function(){
	document.getElementById("citation").innerHTML = "";
});