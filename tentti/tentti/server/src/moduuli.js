
// returnx.every(item=>{
//     return typeof item=='number'
// })

//['a', 'e', 'y',] ['k','i','s','s','a']
const merkkaaLöydetytKirjaimet=(arvatutKirjaimet, sananKirjaimet) =>{
    let alaviivaSana=[]
    //'_'.repeat(sananKirjaimet.length)
    for (x=0; x<sananKirjaimet.length;x++) {
        alaviivaSana.push('_')
        for (y=0; y<arvatutKirjaimet.length; y++){
            if (arvatutKirjaimet[y]==sananKirjaimet[x]){
                alaviivaSana[x]
            } 
        }
    }
    return alaviivaSana
}

console.log(merkkaaLöydetytKirjaimet(['a', 'e', 'y',], ['k','i','s','s','a']))

const summa=(a,b)=>{
    return a+b;
};

const tulo=(a,b)=>{
    return a*b;
}


module.exports = {
    summa: summa,
    tulo: tulo,
    merkkaaLöydetytKirjaimet: merkkaaLöydetytKirjaimet
};

// nodessä exportti näyttää tältä