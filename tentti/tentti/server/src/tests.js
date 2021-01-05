const funktiot = require('./moduuli')
//nodessa importti on tämmönen require

let onnistuneet =0
let ajetut=0

const setUp=()=>{
    
    //alustukset
}
const tearDown=()=>{

    // puretaan resurssivaraukset, suljetaan tiedostokahvat jne...
}


//testCase
const testSumma = () =>{
    setUp();
    ajetut++;
    let palautui = funktiot.summa(1,2)
    if (palautui==3) {
        onnistuneet++
        console.log("summa-funktion testi onnistui")
    } else {
        console.log("summa-funtion testi epäonnistui")
    }
    tearDown();
    
}




//testCase
const testTulo = () =>{
    ajetut++;
    let palautui = funktiot.tulo(1,2)
    if (palautui==3) {
        onnistuneet++
        console.log("summa-funktion testi onnistui")
    } else {
        console.log("summa-funtion testi epäonnistui")
    }
    
}
//testCase
const merkkaaLöydetytKirjaimet = () =>{
    ajetut++;
    let palautui = funktiot.merkkaaLöydetytKirjaimet(['a', 'e', 'y',], ['k','i','s','s','a'])
    console.log(palautui.toString());
    if (palautui.toString == ['_,_,_,_,a']) {
        onnistuneet++
        console.log("merkkaaLöydetytKirjaimet-funktion testi onnistui")
    } else {
        console.log("merkkaaLöydetytKirjaimet-funtion testi epäonnistui")
    }
    
}
setUp();
testSumma();
testTulo();
tearDown()
console.log("testitulos")