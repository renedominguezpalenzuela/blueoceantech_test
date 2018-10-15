import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {selectLenguajeOnChange} from './Funciones';


import { ac_accionNula} from '../actionsCreator.js';



import Chip from './Chip.js';

//--------------------------------------------------
//  Combobox filtro seleccion de lenguajes
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
    fil_Lenguajes: state.mis_datos.fil_Lenguajes
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


  



  

