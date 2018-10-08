import React from 'react';
import {getLanguageObjectFromID} from './Funciones';

/*Genera el chip del lenguaje*/

const   UnLenguaje = (props) => {
    const nombre_lenguaje=getLanguageObjectFromID(props.lenguaje.id);
    return ( 
                 <span className="badge badge-info" key={props.lenguaje.id} >
                     {nombre_lenguaje.name}
                {/* <span className="badge badge-pill badge-light ml-2  btn">X</span>*/}
                </span>    
    );
}

export default UnLenguaje;