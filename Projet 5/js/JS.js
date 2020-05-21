let class phrase {
	contructor(sujet, verbe, complément){
this.sujet = sujet;
this.verbe = verbe;
this.complément = complément;
	}
}

const sujetPhrase = (this.sujet) ["tout le monde", "l'échec", "tu", "les amoureux", "les hommes politiques"]
const verbePhrase = (this.verbe) ["peut servir", "m'empêche",	"n'apprends pas", "campent", "ouvrent"]
const complémenPhrase = (this.complément) ["de mauvais exemple",	"de faire ce qui m'importe", "si tu nes changes pas", "sur leurs positions", "leurs parapluies"]



let class expression {
	contructor(sujet, verbe, complément){
this.sujet = sujet;
this.verbe = verbe;
this.complément = complément;
	}
}

const sujetExpresion = (this.sujet) ["le bonheur", "la bonté", "les choses magiques", "la plus grande gloire", "les femmes"]
const verbeExpression = (this.verbe) ["est", "mesure", "attendent patiemment", "n'est pas", "veulent",]
const complémenExpression = (this.complément) ["la clé de la vie", "l'élévation de l'âme",
"que nous soyons assez intelligents pour les recevoir", "de ne jamais tomber", "le dernier amour d'un homme"]





var aleatoire = null; 

aleatoire = Math.floor(Math.random() * citations.length);
	$(".citation").html(citations[aleatoire]);

$('document').ready(function(){
	aleatoire = Math.floor(Math.random() * citations.length);
	$(".citation").html(citations[aleatoire]);

$("Nouvelle phrase").click(function(){
aleatoire = Math.floor(Math.random() * citations.length);
	$("citation").html(citations[aleatoire]);

$("Nouvelle expression").click(function(){
aleatoire = Math.floor(Math.random() * citations.length);
	$("citation").html(citations[aleatoire]);

}


}






if(number == 0 || number > 5) {
	console.log('Veuillez entrer un nombre compris entre 1 et 5');
} else {
	citationGeneree = '';
}
