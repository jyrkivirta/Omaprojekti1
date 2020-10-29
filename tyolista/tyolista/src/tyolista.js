import './App.css';
import React, { useState } from 'react';


function App() {
  
  let tyolista = [
    {id: 1, vkopv: 'Maanantai', tunnit: 8},
    {id:2, vkopv: 'Tiistai', tunnit: 9},
    {id:3, vkopv: 'Keskiviikko', tunnit: 8},
    {id:4, vkopv: 'Torstai', tunnit: 7},
    {id:5, vkopv: 'Perjantai', tunnit: 7},
    {id:6, vkopv: 'Lauantai', tunnit: 0},
    {id:7, vkopv: 'Sunnuntai', tunnit: 3}
  ];
  
  // let [id, vkopv, tunnit] = tyolista;
  
 // console.log(tyolista[i].tunnit);
  
  let keskiarvo = 0;
  
  let summa = (num1) => {
    return keskiarvo + num1;
  };
  
  for (let i = 0; i < tyolista.length; i++){
   keskiarvo = (summa(tyolista[i].tunnit));
  };
keskiarvo = (keskiarvo / tyolista.length);

 ;

 let mini = 0;
 let maxi = 0;
 let vertaa;
 for (var i=tyolista.length-1; i>=0; i--) {
     vertaa = tyolista[i].tunnit;
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
      tyolista.map(paiva => (<p>{paiva.vkopv + ': ' + paiva.tunnit + 'h'}</p>)
      )}
      </div>

        <div>Työtuntiminimi:{mini}</div> 
        <div>Työtuntimaksimi:{maxi}</div> 
      </div>
      <div>
        Työtunteja keskimäärin: {keskiarvo}.
      </div>
    </div>
  );
}

export default App;
