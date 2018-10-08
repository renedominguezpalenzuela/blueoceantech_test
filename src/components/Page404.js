import React from 'react';

const   Page404 = (props) => {
    return ( 
         <div>                                       
                <img src={process.env.PUBLIC_URL + '/img/page404.png'} alt="Test" height="400px;" />    
         </div>
    );
}

export default Page404;