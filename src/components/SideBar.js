import React from 'react';
import { NavLink } from 'react-router-dom';

//------------------------------------------------------------------------------
// Side Bar
//------------------------------------------------------------------------------

const   SideBar = (props) => {
    return (
      <div className="content">
         
          <div className="row mt-3"> 
            <div className="sidebar-nav col ml-5" >               
               <NavLink  className="nav-link"  to ="/lista"> List </NavLink> 
            </div>    
          </div> 

          <div className="row"> 
            <div className="sidebar-nav col ml-5" >               
                <NavLink  className="nav-link"  to ="/new"> New </NavLink> 
            </div>    
          </div>      
          
      </div>

    );

}

export default SideBar;