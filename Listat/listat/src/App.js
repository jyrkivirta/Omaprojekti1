import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

  const [lista, setLista] = useState(['John', 'Paul', 'Ringo','George']);  //vasen lista
  const [listaKakkonen, setListaKakkonen] = useState(['Juhani','Tuomas','Aapo','Simeoni','Timo','Lauri','Eero']); //oikea lista
  const [uusiLista, setUusiLista] = useState([])  //lista johon kirjataan mitä on klikattu
  
  const indexLista = (item, index) => {           //kun klikataan, klikattu nimi tulis tässä listaan
    let listaTila = uusiLista.concat(item)
    setLista(listaTila);
  };

  const siirraOikealle = () => {            // kun nuoli-nappia painetaan, tämä heittää uusiListan oikean listan perään
    let siirtoLista = listaKakkonen.concat(uusiLista);  // ja tähän pitäs sit lisätä nimen poistaminen vasemmasta listasta
    setUusiLista(siirtoLista);
  };
  const siirraVasemmalle = () => {};
  

  return (
    <div> {
      lista.map((item, index) => <p onClick={indexLista(item, index)}>{index + '. ' + item}</p>)
      } 
        <button onClick={siirraVasemmalle()}>{'<-'}</button>
        <button onClick={siirraOikealle()}>{'->'}</button>
        {
      listaKakkonen.map((item, index) => <p onClick={indexLista(item, index)}>{index + '. ' + item}</p>)
      }
    </div>
  );
}

export default App;
