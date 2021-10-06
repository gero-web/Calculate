import * as React from 'react';
import {useState} from 'react'
import {getRolling} from '../services/dataservices'
import '../css/Form.css'
import Bar from './Bar';
const Home = () => {

       const [dayX, setDayX] = useState()
       const handleSubmit = (event:React.FormEvent) =>{
            event.preventDefault();
            getRolling(setDayX)
       }
     
     
  return (
    <div className="chart">
       {dayX && (<Bar data={dayX}/>)}
       <div className="calculete">
              <input className="create" type="submit" onClick={handleSubmit} value="Calculate" />
       </div>
    </div>
  );
};

export default Home;
