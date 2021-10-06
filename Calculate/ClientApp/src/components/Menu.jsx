import * as React from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/Frame.css'


export default function Menu() {
       return (
              <Container className="Container">
              <div className="menu">
              <hr className="Line"></hr>
              <NavLink to="/">
                     <div className="button-menu">
                            <svg className="vector" xmlns="http://www.w3.org/2000/svg">
                                   <g> 
                                          <line    y2="23.39353" x2="10.93488" y1="0.19306" x1="11.67693" />
                                          <line   y2="11.57299" x2="24.18976" y1="11.95587" x1="-0.84272" />
                                          <line   y2="-14.55836" x2="37.03646" y1="-13.97442" x1="37.91238"  />
                                          <line   y2="-5.3613" x2="-12.45253" y1="-5.3613" x1="-7.781" opacity="NaN"  />
                                   </g>
                            </svg> 
                            Add
                     </div>
              </NavLink>
              <hr className="Line"></hr>
              <NavLink to="/calck">
                     <div className="button-menu">
                            Calculete
                     </div>
              </NavLink>
              <hr className="Line"></hr>
              </div>  
          </Container>
       );
}
