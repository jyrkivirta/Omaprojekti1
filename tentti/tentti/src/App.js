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



function App () {
 
  const initialData = [
    {tentti: "tentti ykkönen", kysymykset:[
          {
            kysymys: "Kuka seuraavista kirjailijoista ei kuulu tämän vuoden Finlandia-palkintoehdokkaisiin?", vaihtoehdot: 
              [{vastaus: "Tommi Kinnunen", valittu:false, oikein:false},
              {vastaus: "Johannes Ekholm", valittu:false, oikein:true},
              {vastaus: "Ann-Luise Bertell", valittu:false, oikein:false},
              {vastaus: "Anni Kytömäki", valittu:false, oikein:false}]
          },
          {
            kysymys: "Ketkä kolme kirjailijaa ovat voittaneet viimeiset kolme Finlandia-palkintoa?", vaihtoehdot: 
              [{vastaus: "Juha Hurme, Laura Lindstedt, Jukka Viikilä", valittu:false, oikein:false}, 
              {vastaus: "Olli Jalonen, Jukka Viikilä, Laura Lindstedt", valittu:false, oikein:false}, 
              {vastaus: "Pajtim Statovci, Olli Jalonen, Juha Hurme", valittu:false, oikein:true}, 
              {vastaus: "Laura Lindstedt, Olli Jalonen, Pajtim Statovci", valittu:false, oikein:false}]
          },
          {
            kysymys: "Kuka seuraavista kirjailijoista on saanut kaksi Finlandia-palkintoa?", vaihtoehdot: 
              [{vastaus: "Johanna Sinisalo", valittu:false, oikein:false}, 
              {vastaus: "Kari Hotakainen", valittu: false, oikein:false}, 
              {vastaus: "Rosa Liksom", valittu:false, oikein:false}, 
              {vastaus: "Bo Carpelan", valittu:false, oikein:true}]
          },
          {
            kysymys: "Kenen runoilijan elämästä kertoo vuoden 2000 Finlandia-palkintokirja Helena Sinervon Runoilijan talossa?", vaihtoehdot: 
              [{vastaus: "Yrjö Kaijärvi", valittu:false, oikein:false}, 
              {vastaus: "Sirkka Turkka", valittu: false, oikein:false}, 
              {vastaus: "Eeva-Liisa Manner", valittu:false, oikein:true}, 
              {vastaus: "Aila Meriluoto", valittu:false, oikein:false}]
          }
        ]
        },
    {tentti: "tentti kakkonen", kysymykset:[
          {
            kysymys: "Kuksdfsdfeuraavista kirjailijoista ei kuulu tämän vuoden Finlandia-palkintoehdokkaisiin?", vaihtoehdot: 
              [{vastaus: "Tommi Kinnunen", valittu:false, oikein:false},
              {vastaus: "Johannes Ekholm", valittu:false, oikein:true},
              {vastaus: "Ann-Luise Bertell", valittu:false, oikein:false},
              {vastaus: "Anni Kytömäki", valittu:false, oikein:false}]
          },
          {
            kysymys: "Ketkä kolme kirjailijaa ovat voittaneet viimeiset kolme Finlandia-palkintoa?", vaihtoehdot: 
              [{vastaus: "Juha Hurme, Laura Lindstedt, Jukka Viikilä", valittu:false, oikein:false}, 
              {vastaus: "Olli Jalonen, Jukka Viikilä, Laura Lindstedt", valittu:false, oikein:false}, 
              {vastaus: "Pajtim Statovci, Olli Jalonen, Juha Hurme", valittu:false, oikein:true}, 
              {vastaus: "Laura Lindstedt, Olli Jalonen, Pajtim Statovci", valittu:false, oikein:false}]
          },
          {
            kysymys: "Kuka seuraavista kirjailijoista on saanut kaksi Finlandia-palkintoa?", vaihtoehdot: 
              [{vastaus: "Johanna Sinisalo", valittu:false, oikein:false}, 
              {vastaus: "Kari Hotakainen", valittu: false, oikein:false}, 
              {vastaus: "Rosa Liksom", valittu:false, oikein:false}, 
              {vastaus: "Bo Carpelan", valittu:false, oikein:true}]
          },
          {
            kysymys: "Kenen runoilijan elämästä kertoo vuoden 2000 Finlandia-palkintokirja Helena Sinervon Runoilijan talossa?", vaihtoehdot: 
              [{vastaus: "Yrjö Kaijärvi", valittu:false, oikein:false}, 
              {vastaus: "Sirkka Turkka", valittu: false, oikein:false}, 
              {vastaus: "Eeva-Liisa Manner", valittu:false, oikein:true}, 
              {vastaus: "Aila Meriluoto", valittu:false, oikein:false}]
          }
        ]
        }
      ]

  const [data, setData] = useState(initialData)
 
  const [painettu, setPainettu] = useState(false)
  
  const [valittuTentti, setValittuTentti] = useState(0)

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


const jotainTapahtuu = (kysymysIndex, vaihtoehtoIndex, event, valittuTentti) => {
  

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

const inputMuutettu = (event, kysymysIndex, vaihtoehtoIndex, valittuTentti) => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData[valittuTentti].kysymykset[kysymysIndex].vaihtoehdot[vaihtoehtoIndex].vastaus=event.target.value
  setData(uusData);
}

const kysymysMuutettu = (kysymysIndex, event, valittuTentti) => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData[valittuTentti].kysymykset[kysymysIndex].kysymys=event.target.value
  setData(uusData);
}

const poistaVaihtoehto = (kysymysIndex, vaihtoehtoIndex, valittuTentti) => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData[valittuTentti].kysymykset[kysymysIndex].vaihtoehdot.splice(vaihtoehtoIndex, 1)
  setData(uusData);
}

const lisaaVaihtoehto = (kysymysIndex, valittuTentti) => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData[valittuTentti].kysymykset[kysymysIndex].vaihtoehdot.push({vastaus: "", valittu:false, oikein:false})
  setData(uusData)
}
const lisaaKysymys = (valittuTentti) => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData[valittuTentti].kysymykset.push({kysymys:"", vaihtoehdot:[{vastaus: "", valittu:false, oikein:false}]})
  setData(uusData)
}

const aktiivinenTentti = (tenttiIndex) => {
  setValittuTentti(tenttiIndex);
}


const naytaVaihtoehdot = (vaihtoehdot, kysymysIndex, valittuTentti) => {
  return vaihtoehdot.map((vaihtoehto, vaihtoehtoIndex) => <div> 
       <Checkbox
          id={vaihtoehto.vastaus} 
          name={vaihtoehto.vastaus} 
          onChange={(event) => jotainTapahtuu(kysymysIndex, vaihtoehtoIndex, event, valittuTentti)}
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
              
              onChange={(event) => inputMuutettu(event, kysymysIndex, vaihtoehtoIndex, valittuTentti)}
              value={vaihtoehto.vastaus}>
          </TextField>
          {/*tästä kohtaa jos ottaa inputin pois ja laittaa tilalle {vaihtoehto.vastaus}, niin tulee oppilaan näkymä*/}
        </label>
        <IconButton
          onClick={() => poistaVaihtoehto(kysymysIndex, vaihtoehtoIndex)}
        ><Delete />
        </IconButton>
        
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
    <div>
      {data.map((tentti, index) => 
        <Button onClick={() => aktiivinenTentti(index)}> {tentti.tentti} </Button>
      )}
    </div>
    <Card><CardContent>
    {data[valittuTentti].kysymykset.map(( {kysymys, vaihtoehdot}, index) => {
      return <div>
        <p>
          <TextField 
              variant="outlined"
              type="text"
              onChange={(event) => kysymysMuutettu(index, event, valittuTentti)}
              value={kysymys}>
          </TextField>
          {/*tästä kohtaa jos ottaa textfieldin pois ja laittaa tilalle {kysymys}, niin tulee oppilaan näkymä*/}
        </p>
        {naytaVaihtoehdot(vaihtoehdot, index, valittuTentti)}
        <IconButton
          onClick={() => lisaaVaihtoehto(index, valittuTentti)}
        ><AddCircle />
        </IconButton>
      </div>
    }
    )}
    </CardContent>
      <IconButton
          onClick={() => lisaaKysymys(valittuTentti)}
          ><AddCircle />
      </IconButton>
    </Card>
   <p><Button variant="contained" color="primary" onClick={tyhjennaLomake}>Tyhjenna lomake</Button></p>
   <p><Button variant="contained" color="primary" onClick={tyhjennaLocal}>Tyhjenna muisti</Button></p>
   <p><Button variant="contained" color="primary" onClick={vastauksetPainettu}>{painettu ? "Piilota oikeat vastaukset" : "Näytä oikeat vastaukset"}</Button></p>
  </div>
    );
}

export default App;