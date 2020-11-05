import React, { useEffect } from 'react';
import { useState } from 'react';
//import { makeStyles } from '@material-ui/core/styles/'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
//import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import './App.css';



function App () {
 
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
    },
    {
      kysymys: "dfgdg?", vaihtoehdot: 
        [{vastaus: "Ydfgdfg.", valittu:false, oikein:false}, 
        {vastaus: "dfg.", valittu: false, oikein:false}, 
        {vastaus: "Mdfgfg.", valittu:false, oikein:true}, 
        {vastaus: "sfdt.", valittu:false, oikein:false}]
    }
  ]
  const [data, setData] = useState(initialData)
 
  const [painettu, setPainettu] = useState(false)
  

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

const vastauksetPainettu = () => {
  let nappi = painettu
  nappi = !nappi
  setPainettu(nappi)
} 

const naytaVaihtoehdot = (vaihtoehdot, kysymysIndex) => {
  return vaihtoehdot.map((vaihtoehto, vaihtoehtoIndex) => <div> 
   
       <Checkbox
          id={vaihtoehto.vastaus} 
          name={vaihtoehto.vastaus} 
          onChange={(event) => jotainTapahtuu(kysymysIndex, vaihtoehtoIndex, event)}
          checked={vaihtoehto.valittu}
        ></Checkbox>
       {painettu ? 
         <Checkbox
          id={vaihtoehto.vastaus} 
          name={vaihtoehto.vastaus} 
          checked={vaihtoehto.oikein}
          disabled
        ></Checkbox> : ''
       }
        <label for={vaihtoehto.vastaus}>{vaihtoehto.vastaus}</label>
</div>
)};

  return (<div>
    <AppBar position="static">
          <Toolbar>
          <IconButton edge="start" color="inherit">         
          </IconButton>
          <Button variant="contained" color="primary">
            TENTIT
          </Button>
          </Toolbar>
    </AppBar>
    <Card><CardContent>
    {data.map(( {kysymys, vaihtoehdot}, index) => {
      return <div>
        <p key={kysymys}>{kysymys}</p>
        {naytaVaihtoehdot(vaihtoehdot, index)}
      </div>
    }
    )}
    </CardContent></Card>
   <p><Button position="end" variant="contained" color="primary" onClick={tyhjennaLomake}>Tyhjenna lomake</Button></p>
   <p><Button edge="end" variant="contained" color="primary" onClick={tyhjennaLocal}>Tyhjenna muisti</Button></p>
   <p><Button variant="contained" color="primary" onClick={vastauksetPainettu}>Näytä oikeat vastaukset</Button></p>
  </div>
    );
}

export default App;