import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import store from '../store.js';
import Lenguajes from './Lenguajes.js';
import {ac_addNombreFiltro} from '../actionsCreator';


//-------------------------------------------------------
// Parte superior Vista: Lista de Personas 
//-------------------------------------------------------

let   FormularioListaPersonas = (props) => {
 
    return (        
        <form className="mt-1 ml-10">
           <div className="form-group row">
            <div className="col-4  ">
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
                         <Lenguajes />   
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
                   

        </form>     
                 
    );
}   


const mapStateToProps = (state) => ({
    lista_Lenguajes: state.mis_datos.lista_Lenguajes,
    fil_Lenguajes: state.mis_datos.fil_Lenguajes,
    filtroNombres: state.mis_datos.formPersonas_filtroNombres
});


const mapDispatchToProps = dispatch => {
    //return  dispatch(ac_accionNula());
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
    // if (val){      
        
       store.dispatch(ac_addNombreFiltro(val));
     //}
  }
  

