import React from 'react';



const   SideBar = (props) => {
    return (
      <div className="content">

          
          <div className="row mt-3"> 
            <div className="sidebar-nav col ml-5" >               
                <a href="/lista">List</a>
            </div>    
          </div> 

          <div className="row"> 
            <div className="sidebar-nav col ml-5" >               
                <a href="/new">New</a>
            </div>    
          </div>      
          
      </div>

    );

}

export default SideBar;