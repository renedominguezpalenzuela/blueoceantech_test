import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import store from '../store.js';
import Chip from './Chip';
import {ac_addLenguajeFiltro} from '../actionsCreator';
import {ac_addNombreFiltro} from '../actionsCreator';
import {getLanguageObjectFromName} from './Funciones';
import {ac_accionNula} from '../actionsCreator';



const selectLenguajeOnChange = (val) =>{     

    const language =getLanguageObjectFromName(val) ;
    //console.log("texto",language); 
    if (val){            
      store.dispatch(ac_addLenguajeFiltro(language));
    }
 }
 

 const filtroNombresOnChange = (val) =>{        
   // if (val){      
       
      store.dispatch(ac_addNombreFiltro(val));
    //}
 }

 


let   FormularioListaPersonas = (props) => {
   // console.log("Lista props", props.filtroLenguajes );
    return ( 
        
        <form className="mt-1 ml-10">
           <div className="form-group row">
            <div className="col-4  ">
                <label htmlFor="filtroNombres" className="form-control-sm">Filter by Name</label>
                <Field name="filtroNombres" component="input"  className="form-control" id="filtro_nombres" placeholder="Enter name"  onChange={(e) => {
                                                                          const val = e.target.value;
                                                                          filtroNombresOnChange(val);  }}/>

            </div>



             <div className="col-6">
               <div className="form-group">
                    <label htmlFor="filtroLenguajes" className="form-control-sm">Filter by Skills</label>

                    <Field name="filtroLenguajes" component="select"  className="custom-select"  onChange={(e) => {
                                                                          console.log("Extructura ", e.target.value);
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
                       {/*Chips*/}                     
                           {  
                              
                               props.filtroLenguajes.map(unLenguaje =>                                                        
                                  <Chip unLenguaje={unLenguaje} key={unLenguaje.id} /> )
                               
                           }

                     

                     
                       

                                        
                </div>


           </div>  
           <div className="col-2 d-flex flex-column">
           <button type="button" className="btn btn-primary mr-sm-2 d-block">New</button>
           </div>
           </div>
                   

        </form>     
                 
    );
}   


const mapStateToProps = (state) => ({
    lista_Lenguajes: state.mis_datos.lista_Lenguajes,
    filtroLenguajes: state.mis_datos.formPersonas_filtroLenguajes,
    filtroNombres: state.mis_datos.formPersonas_filtroNombres
});


const mapDispatchToProps = dispatch => {
  /*  return  dispatch(ac_accionNula());*/
}

FormularioListaPersonas = reduxForm({ 
    form:'formListaPersonas'
   })(FormularioListaPersonas)
  
   
FormularioListaPersonas = connect(
      mapStateToProps,
      mapDispatchToProps
  )(FormularioListaPersonas);
  
  export default FormularioListaPersonas;

  

