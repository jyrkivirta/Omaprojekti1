let arvoitus = ['p', 'i', 'z', 'z', 'a']
let arvaus = ['i','p']

// Ohjelma toimii melkein. Ongelma on, 
// että jossain kohtaa alaviiva pyyhkii
// oikein menneet kirjaimet pois
// en tiiä missä. 


// tässä kohtaa pitäisi arvaus-lista käydä läpi ja verrata vertaaListoja
//-funktiosta tulevaan merkkiin
// minusta kaiken pitäisi toimia mutta joku mättää
const tulostaMerkki = (merkki1, arvaus) => {
 
  for (j=0; j<arvaus.length; j++){
    if (merkki1 === arvaus[j]){
        return merkki1
    }
    else {
        return ('_')
        }
    }
}

//tässä kohtaa luodaan paikallinen muuttuja lause, johon lisätään merkkejä
//for loopissa
//lisättävät merkit tulevat tulostaMerkki -funktiosta, johon lähetetään
//arvoitus-listalta i-indeksin merkki ja arvaus-lista kokonaan

const vertaaListoja = (arvoitus, arvaus) => {
    let lause = []
    for (let i = 0; i < arvoitus.length; i++) {
                lause.push(tulostaMerkki(arvoitus[i], arvaus))
            }            
        
    return lause
}

//tässä lähetetään listat funktioon vertaaListoja
console.log(vertaaListoja(arvoitus, arvaus))

// const tulostaMerkki = (kirjain, arvaus) => {

// for (let i = 0; i < kirjain.length; i++){
//     let lippu = false
//    for (let j = 0; j < arvaus.length; j++){
//         if (kirjain[i] == arvaus[j]) {
//             lause.push(kirjain[i])
//             lippu = true
//         } else {
            

//         }
//     }
// }

// };
// tulostaMerkki(kirjain, arvaus)
// console.log(lause)