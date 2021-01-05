import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function Hirsipuu() {

const arvattavaLause = "elämässä on tullut takapakkia joskus etupakkiakin";
//const [naytettavaLause, setNaytettavaLause] = useState ("******** ** ****** ********** ****** ***********");
//let arvattavaArray = arvattavaLause.slice()
let arvattavaArray = Array.from(arvattavaLause)
const [arvatutVaarin, setArvatutVaarin] = useState([]);
const [arvatutOikein, setArvatutOikein] = useState([]);
let hirsiCounter = 0;
let voititko = 0;
let lippu = false
const kirjaimet = [
    "a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u",
    "v","w","x","y","z","o","ä","ö"
]


// const muutaKirjain = (i) => {
//     let lause = nayttoLause.slice()
//     console.log("muuttamisfunktioon tullessa: " + lause)
//     lause = Array.from(lause)
//     console.log("arraymuotoon muutettua: " + lause)
//     lause[i]=arvattavaLause.charAt(i)
//     console.log("kirjainmuutoksen jälkeen" + lause)
//     lause = lause.join("")
//     console.log("joinin jälkeen: " + lause)
//     //join ei toimi tässä yhteydessä jostain syystä
//     //setNaytettavaLause(lause)
//     return nayttoLause
//     console.log("kirjainmuutosfunktiossa ollaan indeksissä: " + i)
//}

const kirjainArvaus = (kirjain) => {
    console.log("funktioon lähetettiin kirjain: " + kirjain)

    for (let i = 0; i < arvattavaLause.length; i++) {
    if (kirjain == arvattavaLause.charAt(i)){
        
        let arvaus = [...arvatutOikein]
        arvaus.push(kirjain)
        setArvatutOikein(arvaus)
        console.log("kirjain muutettiin indeksistä: " + i + " oikeat kirjaimet tähän asti: " + arvatutOikein)
        
        voititko++
        lippu = true
    } }


if (lippu === false) {
    let arvaus2 = [...arvatutVaarin]
        arvaus2.push(kirjain)
        setArvatutVaarin(arvaus2) 
     hirsiCounter++
     console.log("lippu falseen tultiin ja väärät vastaukset tähän asti on: " + arvatutVaarin)
 } 

lippu=false

if (voititko >= arvattavaLause.length) {console.log("Voitit pelin")}
else if (hirsiCounter >= 10) {console.log("Hävisit pelin")}

if (arvatutVaarin !== []) {
    console.log("tässä tähän asti arvatut väärät kirjaimet: " + arvatutVaarin)
}
//console.log("tässä naytetaan lause funktioiden jälkeen")
console.log("tassa naytetaan hirsicounter: " + hirsiCounter)

}
// const tarkistus = (letter) => {
//    if (arvatutOikein.includes(letter)) {
//        return letter
//    } else {
//        return "_"
//    }
// }
// const tuloste = () => {
//     arvattavaArray.map(letter => tarkistus(letter))
// }
console.log("tässä ennen returnia: " + arvatutOikein)
return (
    <div>
        <h1>Hirsipuu</h1>
        <p>Arvaa lause:</p>
        <p>{arvattavaArray.map(letter => (arvatutOikein.includes(letter) ? letter : "_"))}</p>
        {kirjaimet.map((kirjain, i) => <button onClick={() => kirjainArvaus(kirjain)}>{kirjaimet[i]}</button>)}
    </div>
)

}
export default Hirsipuu;
