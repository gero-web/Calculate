import axios from 'axios';

export function getAllData(state){
       return axios.get(`home`)
       .then(res => {
              state(res.data)
       });
}

export function getRolling(state){
       return axios.get(`home/RollingRetention7day`)
       .then(res => {
              state(res.data)
       });
}
export  function formatDate(value) {
       let date = new Date(value);
       const day = date.toLocaleString('default', { day: '2-digit' });
       const month = date.toLocaleString('default', { month: '2-digit' });
       const year = date.toLocaleString('default', { year: 'numeric' });
       return day + '.' + month + '.' + year;
}
export function createData(user){
      
       axios.post(`home/create`,user,{
              headers: {
                  'Content-Type': 'application/json',
              }})
}

