

const arvattavaLause = "Elämässä on tullut takapakkia, joskus etupakkiakin.";
//let naytettavaLause = "******** ** ****** ********** ****** ***********";

let laskuri = 0
let arvatutOikein = [];
let arvatutVaarin = [];
let hirsiCounter = 0;
let voititko = 0;
let lippu = false;
let naytetaan = arvattavaLause;
let lauseenPituus = 0;
let oikeat = 0;



// const muutaKirjain = (i) => {
//     let 
//     let lause = naytettavaLause.slice()
//     lause = Array.from(lause)
//     lause[i]=arvattavaLause.charAt(i)
//     naytettavaLause = lause.join("")
//     console.log("tännekin tultiin" + i)
//     console.log(naytettavaLause)
// }

console.log("Tervetuloa hirsipuuhun. Arvaa tämä lause:")

for (let i = 0; i < arvattavaLause.length; i++) { 
    if (arvattavaLause.charAt(i) == "," || arvattavaLause.charAt(i) == " " || arvattavaLause.charAt(i) == ".") {}
    else {
        naytetaan = Array.from(naytetaan)
        naytetaan[i]="*"
        naytetaan = naytetaan.join("")
        lauseenPituus++
    }
}

console.log(naytetaan)

while (laskuri < 10) {

    //console.log (arvattavaLause.map())
    const readline = require('readline-sync');
    let input = readline.question("Kokeile kirjainta.");

    for (let i = 0; i < arvattavaLause.length; i++) {

        //Ääkköset eivät toimi! Johtuuko toLowerCase-funktiosta?
console.log("ääkköset: " + input)
        if (input == arvattavaLause.charAt(i) 
            || input == arvattavaLause.charAt(i).toLowerCase()
            || input == arvattavaLause.charAt(i).toUpperCase()){
            arvatutOikein.push(input)
            
            voititko++
            lippu = true
            naytetaan = Array.from(naytetaan)
            naytetaan[i]=arvattavaLause.charAt(i)
            naytetaan = naytetaan.join("")
            oikeat++
        } 
    }



    
    //console.log("Väärät arvaukset tällä hetkellä: " + arvatutVaarin)

    if (lippu === false) {
        arvatutVaarin.push(input.toUpperCase())
        hirsiCounter++
        laskuri++
        console.log("Valitettavasti kirjainta ei löydy lauseesta.")
    } else { console.log("Kirjain löytyi lauseesta.")}

    lippu=false

    if (voititko >= arvattavaLause.length) {console.log("Voitit pelin")}
    else if (hirsiCounter >= 10) {console.log("Hävisit pelin")}

    if (arvatutVaarin !== []) {
        console.log("Väärät arvaukset tällä hetkellä: " + arvatutVaarin + " " + hirsiCounter + "/10")
    }
    console.log("Olet ratkaissut kirjaimista: " + oikeat + "/" + lauseenPituus)
    console.log("Arvaa tämä lause: ")
    console.log(naytetaan)
}
