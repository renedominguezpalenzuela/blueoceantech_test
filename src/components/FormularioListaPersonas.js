import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import store from '../store.js';

import FiltroLenguajes from './FiltroLenguajes.js';
import {ac_addNombreFiltro, ac_changeFiltroSalarioMin, ac_changeFiltroSalarioMax, ac_accionNula} from '../actionsCreator';





//-------------------------------------------------------
// Parte superior Vista: Lista de Personas 
//-------------------------------------------------------

let   FormularioListaPersonas = (props) => {
 
    return (        
        <form className="mt-1 ml-10">
           <div className="form-group row">
            <div className="col-4">
                <label htmlFor="filtroNombres" className="form-control-sm">Filter by Name</label>
                <Field name="filtroNombres" component="input"  className="form-control" id="filtro_nombres" placeholder="Enter name"  
                                                    onChange={(e) => {
                                                         const val = e.target.value;
                                                         filtroNombresOnChange(val);  
                                                    }}/>
            </div>

            <div className="col-6">
               <div className="form-group">                   
                       {/*Chips Cerrables*/}                     
                         <FiltroLenguajes />   
                </div>
            </div> 

           <div className="col-2 d-flex flex-column">
           {/*<a className="btn btn-primary mr-sm-2 d-block" href="/new" role="button">New</a>*/}

           <button type="button" className="btn btn-primary mr-sm-2 d-block" 
             onClick={(e) => {
                props.history.push('/new');
               
             }}
           >New</button>
           </div>

           
            </div>

             <div className="form-group row">
            
              <div className="col-3 d-flex flex-column">
              <label htmlFor="salariomin" className="form-control-sm">Min Salary</label>
                <Field name="salariomin" component="input" type="number" step="10"  className="form-control" id="salariomin" placeholder="Min Salary"  
                                                    onChange={(e) => {                                                         
                                                         const val = e.target.value;                                                       
                                                         store.dispatch(ac_changeFiltroSalarioMin(val));
                                                         
                                                    }}/>
              </div>

              <div className="col-3 d-flex flex-column">
              <label htmlFor="salariomax" className="form-control-sm">Max Salary</label>
                <Field name="salariomax" component="input" type="number" step="10"  className="form-control" id="salariomax" placeholder="Max Salary"  
                                                    onChange={(e) => {
                                                     
                                                        const val = e.target.value;                                                       
                                                        store.dispatch(ac_changeFiltroSalarioMax(val));
                                                        
                                                    }}/>
              </div>

            

          


            
            </div>

            
            
  

       
       
        

          

          
           
                   

        

        </form>     
                 
    );
}   


const mapStateToProps = (state) => ({
  
    lista_Lenguajes: state.mis_datos.lista_Lenguajes,
    fil_Lenguajes: state.mis_datos.fil_Lenguajes,
    filtroNombres: state.mis_datos.formPersonas_filtroNombres,
    salarioMin: state.mis_datos.salarioMin, 
    salarioMax: state.mis_datos.salarioMax
 
});


const mapDispatchToProps = dispatch => {
    return  dispatch(ac_accionNula());
}

FormularioListaPersonas = reduxForm({ 
    form:'formListaPersonas'
   })(FormularioListaPersonas)
  
   
FormularioListaPersonas = connect(
      mapStateToProps,
      mapDispatchToProps
  )(FormularioListaPersonas);

 
  
  export default FormularioListaPersonas;


  const filtroNombresOnChange = (val) =>{        
        
       store.dispatch(ac_addNombreFiltro(val));

  }
  
  

