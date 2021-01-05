import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function Hirsipuu() {

const arvattavaLause = "elämässä on tullut takapakkia joskus etupakkiakin";
const [naytettavaLause, setNaytettavaLause] = useState ("******** ** ****** ********** ****** ***********");
let nayttoLause = "******** ** ****** ********** ****** ***********";
//const [input, setInput] = useState("0")
let arvatut = [];
let hirsiCounter = 0;
let voititko = 0;
let lippu = false
const kirjaimet = [
    "a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u",
    "v","w","x","y","z","o","ä","ö"
]


const muutaKirjain = (i) => {
    let lause = nayttoLause.slice()
    console.log("muuttamisfunktioon tullessa: " + lause)
    lause = Array.from(lause)
    console.log("arraymuotoon muutettua: " + lause)
    lause[i]=arvattavaLause.charAt(i)
    console.log("kirjainmuutoksen jälkeen" + lause)
    lause = lause.join("")
    console.log("joinin jälkeen: " + lause)
    //join ei toimi tässä yhteydessä jostain syystä
    //setNaytettavaLause(lause)
    return nayttoLause
    console.log("kirjainmuutosfunktiossa ollaan indeksissä: " + i)
}

const kirjainArvaus = (kirjain) => {
    console.log("funktioon lähetettiin kirjain: " + kirjain)


    for (let i = 0; i < arvattavaLause.length; i++) {
    if (kirjain == arvattavaLause.charAt(i)){
        muutaKirjain(i)
        console.log("kirjain muutettiin indeksistä: " + i)
        voititko++
        lippu = true
    } 
}


if (lippu === false) {
    arvatut.push(kirjain)
    hirsiCounter++
} 

lippu=false

if (voititko >= arvattavaLause.length) {console.log("Voitit pelin")}
else if (hirsiCounter >= 10) {console.log("Hävisit pelin")}

if (arvatut !== []) {
    console.log("tässä tähän asti arvatut väärät kirjaimet: " + arvatut)
}
console.log("tässä naytetaan lause funktioiden jälkeen" + naytettavaLause)
console.log("tassa naytetaan hirsicounter" + hirsiCounter)

}

return (
    <div>
        <h1>Hirsipuu</h1>
        <p>Arvaa lause:</p>
        <p>"{naytettavaLause}"</p>        
        {kirjaimet.map((kirjain, i) => <button onClick={() => kirjainArvaus(kirjain)}>{kirjaimet[i]}</button>)}
    </div>
)

}
export default Hirsipuu;
