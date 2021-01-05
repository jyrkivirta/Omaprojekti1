var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
const SALT_ROUNDS = 12

let alkuhetki = Date.now()
let loppuhetki
let hashattuSalasana

(async () => {
    try {
        hashattuSalasana =await bcrypt.hash("kissa", SALT_ROUNDS)
        console.log(hashattuSalasana)
        let result = await bcrypt.compare("kissa", hashattuSalasana)
        console.log(result)
    } catch (e) {
        console.log(e)
    }
})();
// bcrypt.hash("kissa", SALT_ROUNDS,(err, hash) => {
//     console.log(hash)
//     hashattuSalasana = hash
//     loppuhetki = Date.now();
//     //store hash in your password DB
//     console.log("operaatio kesti (ms): ", (loppuhetki-alkuhetki))

    
// })

// bcrypt.compare("kissa", hashattuSalasana, function(err, result){
//     //result === true
//     console.log(result)
// });

// (async() => {
//     try {
//         let result = bcrypt.compare("kissa", hashattuSalasana)
//         console.log(result)
//     }
// })


/*
var token1 = jwt.sign({ foo: 'bar'}, 'shhhhh');
var token2 = jwt.sign({ foo: 'bar'}, 'shhhhh');
//console.log(token);
token2=token1.substring(0,10)
console.log("Sormeiltu token ", token2)

try {
    let result = jwt.verify(token1,'shhhhh')
    console.log ("token verivioitu ", result)
} catch (e) {

    console.log("toksu on not ok")
}
*/