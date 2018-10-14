import React from 'react';

//----------------------------------------------------------------------
// Vista Home
//----------------------------------------------------------------------


const   HomePage = (props) => {
    return ( 
         <div>  
            <h1>Started: September 17,  2018</h1>
            <p>Task: React.JS Library</p>                     
                <img src={process.env.PUBLIC_URL + '/img/test.jpg'} alt="Test" height="400px;" />    
         </div>
    );
}



export default HomePage;
