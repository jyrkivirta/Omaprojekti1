import React, { useEffect } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles/'
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
import axios from 'axios';



function App () {
 
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

  const [data, setData] = useState(initialData)

  const [dataAlustettu, setDataAlustettu] = useState(false)

  const [painettu, setPainettu] = useState(false)
  
  const [valittuTentti, setValittuTentti] = useState(0)

  //const [selected, setSelected] = useState([])

  const useStyles = makeStyles(() => ({
    flexTyyli: {
      flex: 1,
    }
  }));
  
  const classes = useStyles();

  useEffect(() => {
    const createData = async() => {
      
      try {

        let result = await axios.post("http://localhost:3005/tentit", initialData)
        setData(initialData)
        setDataAlustettu(true)

      } catch (exception) {
        alert("Tietokannan alustaminen epäonnistui")
      }
    }

    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:3005/tentit")
        if (result.data.length > 0) {
          setData(result.data);
          setDataAlustettu(true)
        } else {
          throw ("Nyt pitää data kyllä alustaa!")
        }
      }
      catch (exception) {
        createData();
        console.log(exception)
      }
    }
    fetchData();

    // let jemma = window.localStorage;
    // let tempData = jemma.getItem("data")
    // if (!tempData) {
    //   jemma.setItem("data", JSON.stringify(initialData))
    //   tempData = initialData
    // }
    // setData(JSON.parse(tempData));
  },
    [])
  
  useEffect(() => {
    const updateData = async () => {
      try {
        let result = await axios.put("http://localhost:3005/tentit", data)
      } catch (exception) {
        console.log("Datan päivitys ei onnistunut")
      }
    }
  
    if (dataAlustettu) {
      updateData();
    }
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
  uusData[valittuTentti].kysymykset[kysymysIndex].vaihtoehdot[vaihtoehtoIndex].valittu=event.target.checked
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
  uusData[valittuTentti].kysymykset[kysymysIndex].vaihtoehdot.push({uid:uuid(),vastaus: "", valittu:false, oikein:false})
  setData(uusData)
}
const lisaaKysymys = (valittuTentti) => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData[valittuTentti].kysymykset.push({uid:uuid(), kysymys:"", vaihtoehdot:[{uid:uuid(),vastaus: "", valittu:false, oikein:false}]})
  setData(uusData)
}

const poistaKysymys = (kysymysIndex, valittuTentti) => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData[valittuTentti].kysymykset.splice(kysymysIndex, 1)
  setData(uusData);
}

const lisaaTentti = (dataIndex) => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData.push({uid:uuid(),tentti:"Uusi tentti", kysymykset:[{uid:uuid(), kysymys:"", vaihtoehdot:[{uid:uuid(),vastaus: "", valittu:false, oikein:false}]}]})
  setData(uusData)
}

const poistaTentti = () => {
  let uusData = JSON.parse(JSON.stringify(data))
  uusData.splice(-1, 1)
  setData(uusData);
}

const aktiivinenTentti = (tenttiIndex) => {
  setValittuTentti(tenttiIndex);
}


const naytaVaihtoehdot = (vaihtoehdot, kysymysIndex, valittuTentti) => {
  return vaihtoehdot.map((vaihtoehto, vaihtoehtoIndex) => <div> 
    <CardContent key={vaihtoehto.uid}>
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
              style = {{width: 450}}
              onChange={(event) => inputMuutettu(event, kysymysIndex, vaihtoehtoIndex, valittuTentti)}
              value={vaihtoehto.vastaus}>
          </TextField>
          {/*tästä kohtaa jos ottaa inputin pois ja laittaa tilalle {vaihtoehto.vastaus}, niin tulee oppilaan näkymä*/}
        </label>
        <IconButton
          onClick={() => poistaVaihtoehto(kysymysIndex, vaihtoehtoIndex, valittuTentti)}
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
      {data.map((tentti, index) => 
        <Button key={tentti.uid} onClick={() => aktiivinenTentti(index)}> {tentti.tentti} </Button>
      )}
      <IconButton onClick={() => lisaaTentti()}
        ><AddCircle />
      </IconButton>
    </div>
    {data[valittuTentti].kysymykset.map(( {kysymys, vaihtoehdot}, index) => {
      return (
       <div>
        <CardContent key={index.uid}>
          <TextField 
              
              variant="outlined"
              type="text"
              style = {{width: 800}}
              onChange={(event) => kysymysMuutettu(index, event, valittuTentti)}
              value={kysymys}>
          </TextField>
          {/*tästä kohtaa jos ottaa textfieldin pois ja laittaa tilalle {kysymys}, niin tulee oppilaan näkymä*/}
        
          <IconButton
            onClick={() => poistaKysymys(index, valittuTentti)}
            ><Delete />
          </IconButton>
        
        {naytaVaihtoehdot(vaihtoehdot, index, valittuTentti)}
          <IconButton
            onClick={() => lisaaVaihtoehto(index, valittuTentti)}
          ><AddCircle />
          </IconButton>
        </CardContent> 
      </div>
      )
    }
    )}</CardContent></Card>
      <IconButton
          onClick={() => lisaaKysymys(valittuTentti)}
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