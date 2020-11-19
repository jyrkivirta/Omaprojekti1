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
//import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import AddCircle from '@material-ui/icons/AddCircle';
//import Icon from '@material-ui/core/Icon/';
import TextField from '@material-ui/core/TextField';
import uuid from 'react-uuid';
//import School from '@material-ui/School';
import { useReducer } from 'react';
import TentinNimiDialog from './TentinNimiDialog.js'

const initialData = [
  {uid:uuid(), tentti: "tentti ykkönen", kysymykset:[
        {
          uid:uuid(), kysymys: "Kuka seuraavista kirjailijoista ei kuulu tämän vuoden Finlandia-palkintoehdokkaisiin?", vaihtoehdot: 
            [{uid:uuid(),vastaus: "Tommi Kinnunen", valittu:false, oikein:false},
            {uid:uuid(),vastaus: "Johannes Ekholm", valittu:false, oikein:true},
            {uid:uuid(),vastaus: "Ann-Luise Bertell", valittu:false, oikein:false},
            {uid:uuid(),vastaus: "Anni Kytömäki", valittu:false, oikein:false}]
        },
        {
          uid:uuid(), kysymys: "Ketkä kolme kirjailijaa ovat voittaneet viimeiset kolme Finlandia-palkintoa?", vaihtoehdot: 
            [{uid:uuid(),vastaus: "Juha Hurme, Laura Lindstedt, Jukka Viikilä", valittu:false, oikein:false}, 
            {uid:uuid(),vastaus: "Olli Jalonen, Jukka Viikilä, Laura Lindstedt", valittu:false, oikein:false}, 
            {uid:uuid(),vastaus: "Pajtim Statovci, Olli Jalonen, Juha Hurme", valittu:false, oikein:true}, 
            {uid:uuid(),vastaus: "Laura Lindstedt, Olli Jalonen, Pajtim Statovci", valittu:false, oikein:false}]
        },
        {
          uid:uuid(), kysymys: "Kuka seuraavista kirjailijoista on saanut kaksi Finlandia-palkintoa?", vaihtoehdot: 
            [{uid:uuid(),vastaus: "Johanna Sinisalo", valittu:false, oikein:false}, 
            {uid:uuid(),vastaus: "Kari Hotakainen", valittu: false, oikein:false}, 
            {uid:uuid(),vastaus: "Rosa Liksom", valittu:false, oikein:false}, 
            {uid:uuid(),vastaus: "Bo Carpelan", valittu:false, oikein:true}]
        },
        {
          uid:uuid(), kysymys: "Kenen runoilijan elämästä kertoo vuoden 2000 Finlandia-palkintokirja Helena Sinervon Runoilijan talossa?", vaihtoehdot: 
            [{uid:uuid(),vastaus: "Yrjö Kaijärvi", valittu:false, oikein:false}, 
            {uid:uuid(),vastaus: "Sirkka Turkka", valittu: false, oikein:false}, 
            {uid:uuid(),vastaus: "Eeva-Liisa Manner", valittu:false, oikein:true}, 
            {uid:uuid(),vastaus: "Aila Meriluoto", valittu:false, oikein:false}]
        }
      ]
      },
  {uid:uuid(), tentti: "tentti kakkonen", kysymykset:[
        {
          uid:uuid(), kysymys: "Uusi kysymys ykkönen", vaihtoehdot: 
            [{uid:uuid(),vastaus: "vastaus I", valittu:false, oikein:false},
            {uid:uuid(),vastaus: "vastaus II", valittu:false, oikein:true}]
        },
        {
          uid:uuid(), kysymys: "Uusi kysymys kakkonen", vaihtoehdot: 
            [{uid:uuid(),vastaus: "vastaus 1", valittu:false, oikein:false}, 
            {uid:uuid(),vastaus: "vastaus 2", valittu:false, oikein:false}]
        },
        {
          uid:uuid(), kysymys: "Uusi kysymys kolmonen", vaihtoehdot: 
            [{uid:uuid(),vastaus: "vastaus a", valittu:false, oikein:false}, 
            {uid:uuid(),vastaus: "vastaus b", valittu: false, oikein:false} 
            ]
        },
        {
          uid:uuid(), kysymys: "Uusi kysymys nelonen", vaihtoehdot: 
            [{uid:uuid(),vastaus: "vastaus x", valittu:false, oikein:false}, 
            {uid:uuid(),vastaus: "vastaus y", valittu: false, oikein:false}]
        }
      ]
      }
    ]


function reducer(state, action) {
  
  let uusData = JSON.parse(JSON.stringify(state))
 
  switch (action.type) {
    case "INIT_DATA":
      return action.data;

    case "TEMP_DATA":
      return action.data;

    case "JOTAIN_TAPAHTUU":
      uusData[action.data.valittuTentti].kysymykset[action.data.kysymysIndex].vaihtoehdot[action.data.vaihtoehtoIndex].valittu=action.data.event.target.checked;
      return uusData;

    case "INPUT_MUUTETTU":
      uusData[action.data.valittuTentti].kysymykset[action.data.kysymysIndex].vaihtoehdot[action.data.vaihtoehtoIndex].vastaus=action.data.event.target.value;
      return uusData;
    
    case "KYSYMYS_MUUTETTU":
      uusData[action.data.valittuTentti].kysymykset[action.data.kysymysIndex].kysymys=action.data.event.target.value;
      return uusData;
      
    case "POISTA_VAIHTOEHTO":
      uusData[action.data.valittuTentti].kysymykset[action.data.kysymysIndex].vaihtoehdot.splice(action.data.vaihtoehtoIndex, 1);
      return uusData;

    case "LISÄÄ_VAIHTOEHTO":
      uusData[action.data.valittuTentti].kysymykset[action.data.kysymysIndex].vaihtoehdot.push({uid:uuid(), vastaus: "", valittu: false, oikein: false});
      return uusData;
      
    case "LISÄÄ_KYSYMYS":
      uusData[action.data.valittuTentti].kysymykset.push({uid:uuid(), kysymys:"", vaihtoehdot:[{uid:uuid(),vastaus: "", valittu:false, oikein:false}]});
      return uusData;
      
    case "POISTA_KYSYMYS":
      uusData[action.data.valittuTentti].kysymykset.splice(action.data.kysymysIndex);
      return uusData;

    case "LISÄÄ_TENTTI":
      uusData.push({uid:uuid(),tentti:"Uusi tentti", kysymykset:[{uid:uuid(), kysymys:"", vaihtoehdot:[{uid:uuid(),vastaus: "", valittu:false, oikein:false}] }] });
      return uusData;

    case "POISTA_TENTTI":
      uusData.splice(-1,1);
      return uusData;

    default:
      throw new Error();
  }
}

function App () {
 
  const [state, dispatch] = useReducer(reducer, initialData);

  // const [data, setData] = useState(initialData)
 
  const [painettu, setPainettu] = useState(false)
  
  const [valittuTentti, setValittuTentti] = useState(0)


// USE EFFECTIT


  useEffect(() => {
    let jemma = window.localStorage;
    let tempData = jemma.getItem("data")
    if (!tempData) {
      jemma.setItem("data", JSON.stringify(initialData))
      tempData = initialData
    }
    dispatch({ type: "TEMP_DATA", data: JSON.parse(tempData) })
    //setData(JSON.parse(tempData));
  },
    [])
    
  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(state))
  },
    [state])


//FUNKTIOT


const aktiivinenTentti = (tenttiIndex) => {
  setValittuTentti(tenttiIndex);
}

const tyhjennaLomake = () => {
  dispatch({type:"INIT_DATA", data: initialData});
  // setData(initialData);
  //nämä funktiot olisi ehkä voinut laittaa myös reduceriin, mutta en ollut varma voiko reducerin sisällä tehdä lenkkiä
}
 
const tyhjennaLocal = () => {
  localStorage.clear()
  dispatch({type:"INIT_DATA", data: initialData});
  // setData(initialData);
}

const vastauksetPainettu = () => {
  let nappi = painettu
  nappi = !nappi
  setPainettu(nappi)
}

const [dialogiNaytto, setDialogiNaytto] = useState(false);

const naytaDialogi = () => {
  let dialogiNappi = dialogiNaytto
  dialogiNappi = !dialogiNappi
  setDialogiNaytto(dialogiNappi)

}

const naytaVaihtoehdot = (vaihtoehdot, kysymysIndex, valittuTentti) => {
  return vaihtoehdot.map((vaihtoehto, vaihtoehtoIndex) => <div> 
    <CardContent key={vaihtoehto.uid}>
       <Checkbox
          id={vaihtoehto.vastaus} 
          name={vaihtoehto.vastaus} 
          onChange={(event) => dispatch({type:"JOTAIN_TAPAHTUU", data: {kysymysIndex: kysymysIndex, vaihtoehtoIndex: vaihtoehtoIndex, event: event, valittuTentti: valittuTentti} }) }
          checked={vaihtoehto.valittu}
        ></Checkbox>
       {painettu && 
         <Checkbox
          id={vaihtoehto.vastaus} 
          name={vaihtoehto.vastaus} 
          checked={vaihtoehto.oikein}
          disabled
        ></Checkbox>
       }
        <label for={vaihtoehto.vastaus}>
          <TextField
              
              variant="outlined"
              type="text"
              style = {{width: 450}}
              onChange={(event) => dispatch({type:"INPUT_MUUTETTU", data: {event: event, kysymysIndex: kysymysIndex, vaihtoehtoIndex: vaihtoehtoIndex, valittuTentti: valittuTentti} }) }
              value={vaihtoehto.vastaus}>
          </TextField>
          {/*tästä kohtaa jos ottaa inputin pois ja laittaa tilalle {vaihtoehto.vastaus}, niin tulee oppilaan näkymä*/}
        </label>
        <IconButton
          onClick={() => dispatch({type:"POISTA_VAIHTOEHTO", data:{kysymysIndex: kysymysIndex, vaihtoehtoIndex: vaihtoehtoIndex, valittuTentti: valittuTentti} }) }
        ><Delete />
        </IconButton>
  </CardContent>      
</div>
)};

  return (<div>
    <AppBar position="static">
          <Toolbar>
          {/* <Icon edge="start" color="inherit"><School/>         
          </Icon> */}
          </Toolbar>
    </AppBar>
    <Card><CardContent>
    <div>
      {state.map((tentti, index) => 
        <Button key={index.uid} onClick={() => aktiivinenTentti(index)}> 
        {tentti.tentti} </Button>
      )}
      <IconButton onClick={ () => { 
                        naytaDialogi();  
                        dispatch({type: "LISÄÄ_TENTTI", data:{}  });  
                            }      
                      }
                  ><AddCircle />
      </IconButton>
      {dialogiNaytto && <TentinNimiDialog></TentinNimiDialog>}
    </div>
    {state[valittuTentti].kysymykset.map(( {kysymys, vaihtoehdot}, index) => {
      return (
       <div>
        <CardContent key={index.uid}>
          <TextField 
              
              variant="outlined"
              type="text"
              style = {{width: 800}}
              onChange={(event) => dispatch({type:"KYSYMYS_MUUTETTU", data: {kysymysIndex:index, event: event, valittuTentti: valittuTentti} }) }
              value={kysymys}>
          </TextField>
          {/*tästä kohtaa jos ottaa textfieldin pois ja laittaa tilalle {kysymys}, niin tulee oppilaan näkymä*/}
        
          <IconButton
            onClick={() => dispatch({type:"POISTA_KYSYMYS", data:{kysymysIndex: index, valittuTentti:valittuTentti} }) }
            ><Delete />
          </IconButton>
        
        {naytaVaihtoehdot(vaihtoehdot, index, valittuTentti)}
          <IconButton
            onClick={() => dispatch({type:"LISÄÄ_VAIHTOEHTO", data: {kysymysIndex: index, valittuTentti: valittuTentti} }) }
          ><AddCircle />
          </IconButton>
        </CardContent> 
      </div>
      )
    }
    )}</CardContent></Card>
      <IconButton
          onClick={() => dispatch({type:"LISÄÄ_KYSYMYS", data:{valittuTentti: valittuTentti} }) }
          ><AddCircle />
      </IconButton>
      {/* <Button
        variant="outlined"
        type="text">
      </Button> */}
     

   <p><Button variant="contained" color="primary" onClick={tyhjennaLomake}>Tyhjenna lomake</Button></p>
   <p><Button variant="contained" color="primary" onClick={tyhjennaLocal}>Tyhjenna muisti</Button></p>
   <p><Button variant="contained" color="primary" onClick={vastauksetPainettu}>{painettu ? "Piilota oikeat vastaukset" : "Näytä oikeat vastaukset"}</Button></p>
  </div>
    );
}

export default App;