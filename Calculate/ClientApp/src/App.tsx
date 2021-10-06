import * as React from 'react';
import Layout from './components/Layout';
import NewUser from './components/NewUser';
import NavMenu from './components/NavMenu';
import RollingRetention from './components/RollingRetention7day';
import Menu from './components/Menu';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './css/Frame.css'

export default () => {

return (
   <BrowserRouter>
      <div className="Frame">
         <NavMenu/>
         <Menu/>
        <Layout >
           <Switch>
               <Route exact path="/">
                  <NewUser/> 
               </Route>
               <Route exact path="/calck">
                  <RollingRetention/>
               </Route>
           </Switch>
                
        </Layout>
      </div>
   </BrowserRouter>
       
 )
}

