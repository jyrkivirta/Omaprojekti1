import './App.css';
import React from 'react';
//import { Component } from 'react';
//import tyolista.js from tyolista;

function App() {
  
  let palkka = [
    {id: 1, kuukausi: 'Tammi', euro: 2345},
    {id:2, kuukausi: 'Helmi', euro: 2455},
    {id:3, kuukausi: 'Maalis', euro: 2345},
    {id:4, kuukausi: 'Huhti', euro: 2387},
    {id:5, kuukausi: 'Touko', euro: 2495},
    {id:6, kuukausi: 'Kesä', euro: 2459},
    {id:7, kuukausi: 'Heinä', euro: 2987},
    {id:8, kuukausi: 'Elo', euro: 2345},
    {id:9, kuukausi: 'Syys', euro: 2546},
    {id:10, kuukausi: 'Loka', euro: 2385},
    {id:11, kuukausi: 'Marras', euro: 2796},
    {id:12, kuukausi: 'Joulu', euro: 2987}
  ];
  
  // let [id, vkopv, tunnit] = tyolista;
  
 // console.log(tyolista[i].tunnit);
  
  let keskiarvo = 0;
  
  let summa = (num1) => {
    return keskiarvo + num1;
  };
  
  for (let i = 0; i < palkka.length; i++){
   keskiarvo = (summa(palkka[i].euro));
  };
keskiarvo = Math.floor(keskiarvo / palkka.length);

 ;

 let mini = 5000;
 let maxi = 0;
 let vertaa;
 for (var i=palkka.length-1; i>=0; i--) {
     vertaa = palkka[i].euro;
     if (vertaa < mini) mini = vertaa;
     if (vertaa > maxi) maxi = vertaa;
 }

//console.log(keskiarvo)
//console.log(tyolista.length);

return (
    <div>
      
      
      <div>

      <div>
      {
      palkka.map(kkplk => (<p>{kkplk.kuukausi + 'kuu: ' + kkplk.euro + '€'}</p>)
      )}
      </div>

        <div>Kuukausipalkkaminimi:{mini + '€'}</div> 
        <div>Kuukausipalkkamaksimi:{maxi + '€'}</div> 
      </div>
      <div>
        Kuukausipalkka keskimäärin: {keskiarvo + '€'}.
      </div>
        <p>Bruttopalkan suuruus 50% palkankorotuksen jälkeen:</p>
      <div>
      {
      palkka.map(kkplk => (<p>{kkplk.kuukausi + 'kuu: ' + kkplk.euro*1.5 + '€'}</p>)
      )}
      </div>
      <p>Nettopalkan suuruus kuukausittain ilman palkankorotusta veroprosentilla 20:</p>
      <div>
      {
      palkka.map(kkplk => (<p>{kkplk.kuukausi + 'kuu: ' + Math.floor(kkplk.euro*0.8) + '€'}</p>)
      )}
      </div>
    </div>
  );
}

export default App;
