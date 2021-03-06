import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import store from '../store.js';

import FiltroLenguajes from './FiltroLenguajes.js';
import {ac_addNombreFiltro,ac_initFiltros, ac_changeFiltroAgeMin, ac_changeFiltroAgeMax, ac_accionNula} from '../actionsCreator.js';



//-------------------------------------------------------
// Filtros Parte superior Vista: Lista de Personas 
//-------------------------------------------------------

let   FormularioFiltroListaPersonas = (props) => {
 
    return (        
        <form className="mt-1 ml-10">
           <div className="form-group row">

                    {/*Filtro por Nombres*/}
                    <div className="col-4">
                        <label htmlFor="filtroNombres" className="form-control-sm">Filter by Name</label>
                        <Field name="filtroNombres" component="input"  className="form-control" id="filtro_nombres" placeholder="Enter name"  
                                onChange={(e) => {
                                    const val = e.target.value;
                                    filtroNombresOnChange(val);  
                                }}/>
                    </div>

                    {/*Filtro por Lenguajes*/}
                    <div className="col-6">
                        <div className="form-group">                   
                                {/*Chips Cerrables*/}                     
                                    <FiltroLenguajes />   
                        </div>
                    </div> 

                    {/*Boton nueva persona*/}
                    <div className="col-2 d-flex flex-column">
                        <button type="button" className="btn btn-primary mr-sm-2 d-block" 
                            onClick={(e) => {
                                store.dispatch(ac_initFiltros());
                                props.history.push('/new');                           
                            }}
                        >New</button>
                    </div>

                
            </div>
             
             {/*Filtro por rango de edad*/}
             <div className="form-group row">          
                   
                  
                   <div className="col-3 d-flex flex-column">
                        <label htmlFor="agemin" className="form-control-sm">Minimum Age</label>
                        {/*<Field name="agemin" component={renderCampoHTML} placeholder="Enter Min Age" pminAge={props.ageMin}  pmaxAge={props.ageMax}  */}
                        <Field name="agemin" component="input" type="number" step="10"  className="form-control" id="agemin" placeholder="Enter Min Age"                          
                                onChange={(e) => {                                                         
                                    const val = e.target.value;                                                       
                                    store.dispatch(ac_changeFiltroAgeMin(val));                                                         
                                }}/>
                    </div>

                 

                    <div className="col-3 d-flex flex-column">
                        <label htmlFor="agemax" className="form-control-sm">Maximum Age</label>                                            
                        <Field name="agemax" component="input" type="number" step="10"  className="form-control" id="agemax" placeholder="Enter Max Age"
                                onChange={(e) => {                                
                                    const val = e.target.value;                                                       
                                    store.dispatch(ac_changeFiltroAgeMax(val));                                    
                                }}/>
                    </div>

                              
             
            </div>  

            {/*Mensajes de error*/}
            <div className="form-group row"> 
              { props.error_filtro_rango_edad && <span>ERROR!!! Max age smaller than Min age  </span>}
                  
            </div>     

        </form>     
                 
    );
}   


//Acceso a los valores del store mediante props
const mapStateToProps = (state) => ({

    ageMin: state.mis_datos.ageMin, 
    ageMax: state.mis_datos.ageMax,
    error_filtro_rango_edad: state.mis_datos.error_filtro_rango_edad  
 
});


const mapDispatchToProps = dispatch => {
    return  dispatch(ac_accionNula());
}



FormularioFiltroListaPersonas = reduxForm({ 
    form:'formListaPersonas'
   })(FormularioFiltroListaPersonas)
  
   
FormularioFiltroListaPersonas = connect(
      mapStateToProps,
      mapDispatchToProps
      )(FormularioFiltroListaPersonas);

 
  
export default FormularioFiltroListaPersonas;


const filtroNombresOnChange = (val) =>{                
       store.dispatch(ac_addNombreFiltro(val));
}


  

  


  
  

