import React, { useEffect } from 'react';
import { useState } from 'react'
//import LapsiLista from './LapsiLista.js'
//import './App.css';

function App() {
 
  
  //const [dataAlustettu, setDataAlustettu] = useState(false)

  const initialData = [
    {
      kysymys: "Mitä?", vaihtoehdot: 
        [{vastaus: "Kyllä.", valittu:false, oikein:false},
        {vastaus: "Ei.", valittu:false, oikein:true},
        {vastaus: "Ehkä.", valittu:false, oikein:false},
        {vastaus: "Tuskin.", valittu:false, oikein:false}]
    },
    {
      kysymys: "Was?", vaihtoehdot: 
        [{vastaus: "Ja.", valittu:false, oikein:true}, 
        {vastaus: "Nein.", valittu:false, oikein:false}, 
        {vastaus: "Vielleicht.", valittu:false, oikein:false}, 
        {vastaus: "Glaube ich nicht.", valittu:false, oikein:false}]
    },
    {
      kysymys: "What?", vaihtoehdot: 
        [{vastaus: "Yes.", valittu:false, oikein:false}, 
        {vastaus: "No.", valittu: false, oikein:false}, 
        {vastaus: "Maybe.", valittu:false, oikein:false}, 
        {vastaus: "Doubt it.", valittu:false, oikein:true}]
    }

  ]
  const [data, setData] = useState(initialData)

  
  //setData(initialData)

  useEffect(() => {

    let jemma = window.localStorage;
    let tempData = jemma.getItem("data")
    if (!tempData) {
      jemma.setItem("data", JSON.stringify(initialData))
      tempData = initialData
    }
    setData(JSON.parse(tempData));

  },
    [])
  useEffect(() => {

    window.localStorage.setItem("data", JSON.stringify(data))

  },
    [data])


const tyhjennaLomake = () => {
  setData(initialData);
}
 
const tyhjennaLocal = () => {
  localStorage.clear()
  setData(initialData);
}


const jotainTapahtuu = (kysymysIndex, vaihtoehtoIndex, event) => {
  

  let uusData = JSON.parse(JSON.stringify(data))
  uusData[kysymysIndex].vaihtoehdot[vaihtoehtoIndex].valittu=event.target.checked
  setData(uusData)
  //console.log(event)

}

/*<input 
      type="checkbox"
      id={item[index]} 
      name={item[index]} 
    ></input> 
    <label for={item[index]}>{initialData[index].vaihtoehdot[value]}</label>
    */

const naytaVaihtoehdot = (vaihtoehdot, kysymysIndex) => {
  return vaihtoehdot.map((vaihtoehto, vaihtoehtoIndex) => <div> 
   
       <input    
          type="checkbox"
          id={vaihtoehto.vastaus} 
          name={vaihtoehto.vastaus} 
          onChange={(event) => jotainTapahtuu(kysymysIndex, vaihtoehtoIndex, event)}
          checked={vaihtoehto.valittu}
        ></input>
        <label for={vaihtoehto.vastaus}>{vaihtoehto.vastaus}</label>
</div>
)};

  return (<div>
    {data.map(( {kysymys, vaihtoehdot}, index) => {
      return <div>
        <p key={kysymys}>{kysymys}</p>
        {naytaVaihtoehdot(vaihtoehdot, index)}
      </div>
    }
    )}
   <button onClick={tyhjennaLomake}>Tyhjenna lomake</button>
   <button onClick={tyhjennaLocal}>Tyhjenna muisti</button>
  </div>
    );
}

export default App;