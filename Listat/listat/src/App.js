import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const [lista, setLista] = useState(['John', 'Paul', 'Ringo','George']);
const [listaKakkonen, setListaKakkonen] = useState(['Juhani','Tuomas','Aapo','Simeoni','Timo','Lauri','Eero']);

const siirraVasemmalle = () => {};
const siirraOikealle = () => {};

const indexLista = ()

function App() {
  return (
    <div> {
      lista.map((item, index) => <div onClick={}>{index + '. ' + item}</div>)
      } 
        <button onClick={siirraVasemmalle()}>{'<-'}</button>
        <button onClick={siirraOikealle()}>{'->'}</button>
        {
      listaKakkonen.map((item, index) => <div>{index + '. ' + item}</div>)
      }
    </div>
  );
}

export default App;
