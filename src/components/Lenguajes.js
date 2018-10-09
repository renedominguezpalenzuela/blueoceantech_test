import React from 'react';
import store from '../store.js';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';


import {ac_addLenguajeFiltro} from '../actionsCreator';

import {getLanguageObjectFromName} from './Funciones';

import Chip from './Chip.js';

//--------------------------------------------------
//Combobox seleccion de lenguajes
//--------------------------------------------------

let   Lenguajes = (props) => {

  //console.log("Lenguajes2 ",props.una_persona.languages)

    return ( 
<span>
        <label htmlFor="filtroLenguajes" className="form-control-sm">Skills</label>
 
                     <Field name="filtroLenguajes" component="select"  className="custom-select"  onChange={(e) => {
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
                      <Chip unLenguaje={unLenguaje} key={unLenguaje.id} id={unLenguaje.id}/>)
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
  /*  return  dispatch(ac_accionNula());*/
}

Lenguajes = reduxForm({ 
    form:'formListaPersonas'
   })(Lenguajes)
  
   
   Lenguajes = connect(
      mapStateToProps,
      mapDispatchToProps
  )(Lenguajes);
  
  export default Lenguajes;

  const selectLenguajeOnChange = (val) =>{     

    const language =getLanguageObjectFromName(val) ;
    
     
    if (val){            
      store.dispatch(ac_addLenguajeFiltro(language));


    }
 }
  



  

