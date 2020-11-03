import React, { useEffect } from 'react';
//import { useState } from 'react'

function LapsiLista(props) {
   
   return (<div>
        {props.lapsiLista.map((alkio, lapsenIndex) =>
        <div key={lapsenIndex}>

        </div>)}
  </div>
  ); 
}

export default LapsiLista;