import * as React from 'react';
import {useState} from 'react'
import {createData,formatDate} from '../services/dataservices'
import '../css/Form.css'
interface IData{
  DateRegistration:string,
  DateLastActivity:string,
}
const NewUser = () => {

       const [DateRegistration, setDateRegistration] = useState("")
       const [DateLastActivity, setDateLastActivity] = useState("")
       const [user, setUser] = useState<IData[] | undefined>(undefined)
      const handleSubmit = (event:React.FormEvent) =>{
            event.preventDefault();
            createData(user)
            
        }
      const onKeyDown = (event:React.KeyboardEvent)=>{
            if(DateRegistration !== "" && DateLastActivity !== "")
              if(event.key === 'Enter')
              {
                  if(!user)
                    setUser([{ 'DateRegistration':DateRegistration,'DateLastActivity':DateLastActivity}])
                  else
                    setUser([...user,{ 'DateRegistration':DateRegistration,'DateLastActivity':DateLastActivity}])
                  setDateRegistration("")
                  setDateLastActivity("")
                }
                
        }
      const onLastActivity = (event:React.FormEvent<HTMLInputElement>)=>{
            const desk = event.currentTarget.value;
            setDateLastActivity(desk);
        }
      const onRegistration = (event:React.FormEvent<HTMLInputElement>)=>{
                    const desk = event.currentTarget.value;
                    setDateRegistration(desk);
        }
  return (
    <div>
        
      <table className="table" onKeyDown={onKeyDown}>
        <thead> 
          <tr>
             <td> <label className="label">Дата регистрации</label></td>
             <td> <label className="label">Дата последней активности</label> </td>
          </tr>
        </thead>
        <tbody>
            {user && user.map((item,i)=><tr key={i}>
              <td>{ formatDate(item.DateRegistration)}</td>
              <td>{ formatDate(item.DateLastActivity)}</td>
            </tr>)}
            <tr>
              <td><input className="input" placeholder="Введите дату регистрации" type="date" value={DateRegistration}  onChange={onRegistration} /></td>
              <td> <input className="input" placeholder="Введите дату последней активности" type="date" value={DateLastActivity} onChange={onLastActivity} /></td>
            </tr>
        </tbody>
       
      </table>
     
        <input className="create" type="submit" onClick={handleSubmit} value="Save" />
     
    </div>
  );
};

export default NewUser;
