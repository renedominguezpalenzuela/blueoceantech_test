import React from 'react';
import { connect } from 'react-redux';

import store from '../store';


import Chip from './Chip';

import {ac_delPersona} from '../actionsCreator';
import {ac_EditPersona} from '../actionsCreator';



//------------------------------------------------------------------
// Muestra los datos de una persona en la listadePersonas
//------------------------------------------------------------------
let   UnaPersona = (props) => {

 //\img\photos
    return ( 
         <div>
             <form>
                <div className="container py-3">
                    <div className="card">
                        <div className="row">
                            <div className="col-2">                    
                                <img src={process.env.PUBLIC_URL + '/img/photos/'+props.persona.image} className="w-100" alt=""/>
                            </div>

                            <div className="col-8 px-3">
                                <div className="card-block px-3">
                                <h4 className="card-title">{props.persona.name}</h4>
                                <h6>Age: {props.persona.age} </h6>

                                <p className="card-text"> {props.persona.description}</p>
                                <div>
                                {props.persona.languages.map(unLenguaje =>{
                                    return (
                                            
                                                <span className="px-1" key={unLenguaje.id}> 

                                                       <Chip unLenguaje={unLenguaje} key={unLenguaje.id} id={unLenguaje.id} botonCerrarVisible={false}/>

                                                </span>                                                                                             
                                            );                                                                                                        
                                    })}
                                </div>
                                    
                                </div>
                            </div>
                            
                            <div className="col-2">
                                <div className="d-flex flex-column"> 
                               
                                        <button type="button" className="btn btn-primary d-block mt-5 mr-3"                                                         
                                                             onClick={(e) => {  
                                                                
                                                                store.dispatch(ac_EditPersona(props.persona));

                                                                props.history.push('/new');
                                                                   
                                                             }}>
                                        
                                        Edit</button>                                  

                                        <button type="button" className="btn btn-primary d-block mt-1 mr-3" 
                                                           onClick={(e) => {                                                                                                                                                             
                                                               
                                                                store.dispatch(ac_delPersona(props.persona));
                                                           }}>
                                        Delete</button>  
                                                                                                                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
       </div>



    );
}




const mapStateToProps = (state) => ({
    name: state.mis_datos.una_persona.name,
    lista_Lenguajes: state.mis_datos.lista_Lenguajes,
    fil_Lenguajes: state.mis_datos.fil_Lenguajes,
    filtroNombres: state.mis_datos.formPersonas_filtroNombres,
    lista_Personas: state.mis_datos.lista_Personas  /*AGREGADO*/
});


const mapDispatchToProps = dispatch => {
  /* return  dispatch(ac_accionNula());*/
}


  export default connect(mapStateToProps, mapDispatchToProps) (UnaPersona);

  


