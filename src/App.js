import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [ cent , setCent ] = useState([692591, 693144,692588])

  useEffect(async () => {
    if(data.length == 0){
      const {data} = await axios.get(
        'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=394&date=04-05-2021'
      );
        console.log('centers', data);
      setData(data.centers.filter((cen) => cent.includes(cen.center_id)));
    }
  })


  return (
    <div className="App">
     {
       data.length > 0 && data.map((cov) => (
           <div>
              <h2> {cov.name}</h2>
              {
                cov.sessions.map((ses) => (

                  <h4> {ses.min_age_limit} ::::  {ses.available_capacity} </h4>
                ))
              }
           </div>
       ))
     }
    </div>
  );
}

export default App;
