import React from 'react';
import store from '../store.js';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';


import {ac_addLenguajeFiltro, ac_accionNula} from '../actionsCreator.js';

import {getLanguageObjectFromName} from './Funciones.js';

import Chip from './Chip.js';

//--------------------------------------------------
//Combobox seleccion de lenguajes
//--------------------------------------------------

let   FiltroLenguajes = (props) => {

  //console.log("Lenguajes2 ",props.una_persona.languages)

    return ( 
<span>
        <label htmlFor="selectLenguaje" className="form-control-sm">Skills</label>
 
                     <Field name="selectLenguaje" component="select"  className="custom-select"  onChange={(e) => {
                                                                           //console.log("Extructura ", e.target.value);
                                                                           const val = e.target.value;
                                                                           //const texto = e.target.data-key;
                                                                           //const val = e.target.dato;
                                                                           selectLenguajeOnChange(val); 
                                                                          }}>  
                         <option/>
                             {props.lista_Lenguajes.map(unLenguaje =>                                       
                                       <option  key={unLenguaje.id}>        
                                          {unLenguaje.name}    
                                       </option> )
                             } 
                     </Field>          
                      {
                      props.fil_Lenguajes.map(unLenguaje =>                                                        
                      <Chip unLenguaje={unLenguaje} key={unLenguaje.id} id={unLenguaje.id} botonCerrarVisible={true}/>)
                      }
               </span>  
            
    );
}



const mapStateToProps = (state) => ({
    lista_Lenguajes: state.mis_datos.lista_Lenguajes,
    //una_persona: state.mis_datos.una_persona
    fil_Lenguajes: state.mis_datos.fil_Lenguajes
    //filtroNombres: state.mis_datos.formPersonas_filtroNombres
});


const mapDispatchToProps = dispatch => {
    return  dispatch(ac_accionNula());
}

FiltroLenguajes = reduxForm({ 
    form:'formListaPersonas'
   })(FiltroLenguajes)
  
   
   FiltroLenguajes = connect(
      mapStateToProps,
      mapDispatchToProps
  )(FiltroLenguajes);
  
  export default FiltroLenguajes;

  const selectLenguajeOnChange = (val) =>{     

    const language =getLanguageObjectFromName(val) ;
    
     
    if (val){            
      store.dispatch(ac_addLenguajeFiltro(language));


    }
 }
  



  

