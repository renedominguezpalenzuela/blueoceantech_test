import React from 'react';

import UnLenguaje from './UnLenguaje';
import store from '../store';
import {ac_delPersona} from '../actionsCreator';



const   UnaPersona = (props) => {

  //  console.log(props.persona.id);

  //\img\photos
    return ( 
         <div>
                <div className="container py-3">
                    <div className="card">
                        <div className="row">
                            <div className="col-2">                    
                                <img src={process.env.PUBLIC_URL + '/img/photos/'+props.persona.image} className="w-100" alt=""/>
                            </div>

                            <div className="col-8 px-3">
                                <div className="card-block px-3">
                                <h4 className="card-title">{props.persona.name}</h4>
                                <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <div>
                                {props.persona.languages.map(unLenguaje =>{
                                    return (
                                            
                                                <span className="px-1" key={unLenguaje.id}>                      
                                                    <UnLenguaje lenguaje={unLenguaje}/>   
                                                </span>                                                                                             
                                            );                                                                                                        
                                    })}
                                </div>
                                    
                                </div>
                            </div>
                       
                            <div className="col-2">
                                <div className="d-flex flex-column">                               
                                        <button type="button" className="btn btn-primary d-block mt-5 mr-3">Edit</button>                                  
                                        <button type="button" className="btn btn-primary d-block mt-1 mr-3"   onClick={(e) => {
                                                                               
                                                                              
                                                                               store.dispatch(ac_delPersona(props.persona));
                                                                          }}
                                        >Delete</button>                                                                                                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       </div>



    );
}



export default UnaPersona;