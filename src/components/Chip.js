import React from 'react';
import store from '../store.js';
import {ac_delLenguajeFiltro} from '../actionsCreator';


//----------------------------------------------------------------------
// TAGs habilidades
//----------------------------------------------------------------------


const   Chip = (props) => {

  //console.log("un lenguaje ",props.unLenguaje.name)
    return ( 

        <span>
           <span className="badge badge-info" key={props.unLenguaje.id}>
                {props.unLenguaje.name}

                {/*Mostrando el boton de cerrar en funcion de variable botonCerrarVisible*/} 
                { props.botonCerrarVisible
                ?
                   <span className="badge badge-pill badge-light ml-2  btn" onClick={(e) => {
                                                                          const lenguaje = props.unLenguaje;
                                                                        
                                                                          store.dispatch(ac_delLenguajeFiltro(lenguaje));
                                                                          }}>X</span>         
                  :
                  ''                   
                }                                                         
           </span> 
           <span className="px-1"></span>
        </span>             
    );
}

export default Chip;

