//Commentaire
var age = 22;
var nom = "Aurelien Amat"
var phrase = "Hello France";
var ImTheBest = true;
var presentation = "Bonjour je m'appelle " + nom + ", j'ai " + age + "ans";
var i = 0;
//Variable manière d'ecrire
let maVariableLocale = "Je suis locale";

//Constante 
const CONSTANT = 22;

//Procedure car retourne rien
function miaou(who){
    console.log("Bonjour " + who + " !");
    console.log(presentation);
}

//Fonction est une suite d'instruction
//que l'on peut réitiliser qui retourne une valeur

function ditMiaou(){
    let nbm = 0;
    nbm=Math.floor(Math.random()*6);
    return nbm;
}
var resultat = ditMiaou();
console.log(resultat);

//Boucle for
for(console.log("Debut");i!=5;console.log("Fin boucle")){
    i=Math.floor(Math.random()*6);
    console.log(i);
}


//Tableau
let tab = [];
tab.push("un");
tab.push(5);
tab.push(miaou(nom));

tab.forEach(element => {
    console.log(element);
});

miaou("Aurelien");

//DOM
let maDivMiaou = document.getElementById("miaouu");
console.log(maDivMiaou);