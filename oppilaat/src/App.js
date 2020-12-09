import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([])



  const fetchData = async () => {

      let result = await axios.get ("http://localhost:4000/tuooppilaat")
      setData(result.data);
    }

  fetchData();
  

  return (
    <div>
  <table>  
    <tr>
    <th>Etunimi</th>
    <th>Sukunimi</th>
    <th>Keskiarvo</th>
    </tr>
    {data.map((data) => 
    <tr key={data.id}>
    <td>{data.etunimi}</td>
    <td>{data.sukunimi}</td>
    <td>{data.keskiarvo}</td>
    </tr>)}
  </table>

    </div>
  );
}

export default App;
