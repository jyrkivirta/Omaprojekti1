import React, { useEffect } from 'react';
import { useState } from 'react'
//import LapsiLista from './LapsiLista.js'
//import './App.css';

function App() {
 
  const [data, setData] = useState([])
  const [dataAlustettu, setDataAlustettu] = useState(false)

  const initialData = [
    {
      kysymys: "Mitä?", vaihtoehdot: 
      [{vaihtoehto1: "Kyllä.", vaihtoehto2: "Ei.", vaihtoehto3: "Ehkä.", vaihtoehto4: "Tuskin."}]
    },
    {
      kysymys: "Was?", vaihtoehdot: 
      [{vaihtoehto1: "Ja.", vaihtoehto2: "Nein.", vaihtoehto3: "Vielleicht.", vaihtoehto4: "Glaube ich nicht."}]
    },
    {
      kysymys: "What?", vaihtoehdot: 
      [{vaihtoehto1: "Yes.", vaihtoehto2: "No.", vaihtoehto3: "Maybe.", vaihtoehto4: "Doubt it."}]
    }

  ]
  /*useEffect(() => {

    let jemma = window.localStorage;
    let tempData = JSON.parse(jemma.getItem("data"))
    if (tempData == null) {
      jemma.setItem("data", JSON.stringify(initialData))
      tempData = initialData
    } 
    setData(tempData);
    setDataAlustettu(true)
  }, [])

  useEffect(() => {
    if (dataAlustettu) {
      window.localStorage.setItem("data", JSON.stringify(data))
    }
  }, [data])
*/

const tyhjennaMuisti = () => {
  setData(initialData);
}

const jotainTapahtuu = (event) => {
  
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
      id={vaihtoehdot.vaihtoehto1} 
      name={vaihtoehdot.vaihtoehto1} 
      //onChange={(event) => jotainTapahtuu(event)}
    ></input>
    <label for={vaihtoehdot.vaihtoehto1}>{vaihtoehdot.vaihtoehto1}</label>
    <input 
      type="checkbox"
      id={vaihtoehdot.vaihtoehto2} 
      name={vaihtoehdot.vaihtoehto2} 
    ></input>
    <label for={vaihtoehdot.vaihtoehto2}>{vaihtoehdot.vaihtoehto2}</label>
    <input 
      type="checkbox"
      id={vaihtoehdot.vaihtoehto3} 
      name={vaihtoehdot.vaihtoehto3} 
    ></input>
    <label for={vaihtoehdot.vaihtoehto3}>{vaihtoehdot.vaihtoehto3}</label>
    <input 
      type="checkbox"
      id={vaihtoehdot.vaihtoehto4} 
      name={vaihtoehdot.vaihtoehto4} 
    ></input>
    <label for={vaihtoehdot.vaihtoehto4}>{vaihtoehdot.vaihtoehto4}</label>
</div>
)};

  return (<div>
    {initialData.map(( {kysymys, vaihtoehdot}) => {
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