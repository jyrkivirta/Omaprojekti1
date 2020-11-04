import React, { useEffect } from 'react';
import { useState } from 'react'
//import LapsiLista from './LapsiLista.js'
//import './App.css';

function App() {
 
  
  //const [dataAlustettu, setDataAlustettu] = useState(false)

  const initialData = [
    {
      kysymys: "Mitä?", vaihtoehdot: 
        [{vastaus: "Kyllä.", valittu:0, oikein:0},
        {vastaus: "Ei.", valittu:0, oikein:1},
        {vastaus: "Ehkä.", valittu:0, oikein:0},
        {vastaus: "Tuskin.", valittu:0, oikein:0}]
    },
    {
      kysymys: "Was?", vaihtoehdot: 
        [{vastaus: "Ja.", valittu:0, oikein:1}, 
        {vastaus: "Nein.", valittu:0, oikein:0}, 
        {vastaus: "Vielleicht.", valittu:0, oikein:0}, 
        {vastaus: "Glaube ich nicht.", valittu:0, oikein:0}]
    },
    {
      kysymys: "What?", vaihtoehdot: 
        [{vastaus: "Yes.", valittu:0, oikein:0}, 
        {vastaus: "No.", valittu: 0, oikein:0}, 
        {vastaus: "Maybe.", valittu:0, oikein:0}, 
        {vastaus: "Doubt it.", valittu:0, oikein:1}]
    }

  ]
  const [data, setData] = useState([])

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


const tyhjennaMuisti = () => {
  setData(initialData);
}
 


//setData(initialData)

const jotainTapahtuu = (vaihtoehdot) => {
  let uusData = data
  uusData = {...vaihtoehdot.valittu = 1}
  setData(uusData)
  console.log(vaihtoehdot)

}

/*<input 
      type="checkbox"
      id={item[index]} 
      name={item[index]} 
    ></input> 
    <label for={item[index]}>{initialData[index].vaihtoehdot[value]}</label>
    */

const naytaVaihtoehdot = (vaihtoehdot) => {
  return vaihtoehdot.map((vaihtoehdot) => <div> 
   
       <input    
          type="checkbox"
          id={vaihtoehdot.vastaus} 
          name={vaihtoehdot.vastaus} 
          //onChange={(vaihtoehdot) => jotainTapahtuu(vaihtoehdot)}
          //checked={vaihtoehdot.valittu ? 'checked' : ''}
        ></input>
        <label for={vaihtoehdot.vastaus}>{vaihtoehdot.vastaus}</label>
</div>
)};

  return (<div>
    {data.map(( {kysymys, vaihtoehdot}) => {
      return <div>
        <p key={kysymys}>{kysymys}</p>
        {naytaVaihtoehdot(vaihtoehdot)}
      </div>
    }
    )}
   <button onClick={tyhjennaMuisti}>Tyhjenna</button>
  </div>
    );
}

export default App;