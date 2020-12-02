// import React, { useEffect } from 'react';
// import { useState } from 'react'
// //import LapsiLista from './LapsiLista.js'
// //import './App.css';

// export default class Vastaukset1 extends React.Component{

// const jotainTapahtuu = (kysymysIndex, vaihtoehtoIndex, event) => {
  

//   let uusData = JSON.parse(JSON.stringify(data))
//   uusData[kysymysIndex].vaihtoehdot[vaihtoehtoIndex].valittu=event.target.checked
//   setData(uusData)
//   //console.log(event)

// }

// const naytaVaihtoehdot = (vaihtoehdot, kysymysIndex) => {
//     return vaihtoehdot.map((vaihtoehto, vaihtoehtoIndex) => <div> 
     
//          <input    
//             type="checkbox"
//             id={vaihtoehto.vastaus} 
//             name={vaihtoehto.vastaus} 
//             onChange={(event) => jotainTapahtuu(kysymysIndex, vaihtoehtoIndex, event)}
//             checked={vaihtoehto.valittu}
//           ></input>
        //  <input    
        //     type="checkbox"
        //     id={vaihtoehto.vastaus} 
        //     name={vaihtoehto.vastaus} 
        //     checked={vaihtoehto.oikein}
        //     disabled
        //   ></input>
        //   <label for={vaihtoehto.vastaus}>{vaihtoehto.vastaus}</label>
//   </div>
//   )};
  
//     return (<div>
//         {data.map(( {kysymys, vaihtoehdot}, index) => {
//         return <div>
//           <p key={kysymys}>{kysymys}</p>
//           {naytaVaihtoehdot(vaihtoehdot, index)}
//         </div>
//         })
//         }   
//     </div>) 
// }

// //export default Vastaukset1;