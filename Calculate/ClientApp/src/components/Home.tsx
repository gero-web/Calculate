import * as React from 'react';
import {useState,useEffect} from 'react'
import {getAllData} from '../services/dataservices'
interface IData{
  id : number
  dateRegistration: string
  dateLastActivity: string
}
const Home = () => {
  const [serverData, setServerData] = useState<IData[] | []>([]);
  useEffect(() => {
    getAllData(setServerData)
  }, [])
  
  return (
    <div>
      <ul>
        {serverData.map(v=> <li>{ v.dateLastActivity }</li>) }
      </ul>
    </div>
  );
};

export default Home;
