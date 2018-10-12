import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import store from '../store.js';

import FiltroLenguajes from './FiltroLenguajes.js';
import {ac_addNombreFiltro, ac_changeFiltroAgeMin, ac_changeFiltroAgeMax, ac_accionNula} from '../actionsCreator.js';



//-------------------------------------------------------
//Filtros Parte superior Vista: Lista de Personas 
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
                                props.history.push('/new');                           
                            }}
                        >New</button>
                    </div>

                
            </div>
             
             {/*Filtro por rango de edad*/}
             <div className="form-group row">          
                   
    {/*
                    <div className="col-3 d-flex flex-column">
                        <label htmlFor="agemin" className="form-control-sm">Minimum Age</label>
                        <Field name="agemin" component="input" type="number" step="10"  className="form-control" id="agemin" placeholder="Enter Min Age"  
                                onChange={(e) => {                                                         
                                    const val = e.target.value;                                                       
                                    store.dispatch(ac_changeFiltroAgeMin(val));                                                         
                                }}/>
                    </div>
   */}
                   
                   <div className="col-3 d-flex flex-column">
                        <label htmlFor="agemin" className="form-control-sm">Minimum Age</label>
                        <Field name="agemin" component={renderCampoHTML} placeholder="Enter Min Age" pminAge={props.ageMin}  pmaxAge={props.ageMax}  
                                onChange={(e) => {                                                         
                                    const val = e.target.value;                                                       
                                    store.dispatch(ac_changeFiltroAgeMin(val));                                                         
                                }}/>
                    </div>

                 

                    <div className="col-3 d-flex flex-column">
                        <label htmlFor="agemax" className="form-control-sm">Maximum Age</label>                     
                        <Field name="agemax" component={renderCampoHTML} placeholder="Enter Max Age" pminAge={props.ageMin}  pmaxAge={props.ageMax}
                                onChange={(e) => {                                
                                    const val = e.target.value;                                                       
                                    store.dispatch(ac_changeFiltroAgeMax(val));                                    
                                }}/>
                    </div>
             
            </div>       

        </form>     
                 
    );
}   



const mapStateToProps = (state) => ({
  
   /* lista_Lenguajes: state.mis_datos.lista_Lenguajes,
    fil_Lenguajes: state.mis_datos.fil_Lenguajes,
    filtroNombres: state.mis_datos.formPersonas_filtroNombres,*/
    ageMin: state.mis_datos.ageMin, 
    ageMax: state.mis_datos.ageMax
 
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


  

  const renderCampoHTML =({input, meta,  placeholder, pminAge, pmaxAge})=>{
      let error1= false;
      let error2= false;

    let minAge = parseInt(pminAge);
    let maxAge = parseInt(pmaxAge);
     
//Tipos de eventos:
      //meta.touched  -- Al salir del control
      //meta.visited -- Onchange
      if (minAge>maxAge  && meta.visited  && (minAge || maxAge)) {
          error1=true;
      } 

      if (minAge===0 && maxAge===0 && meta.visited && (minAge || maxAge) ) {
        error2=true;
      } 

       console.log("Min ", minAge);
       console.log("Max ", maxAge);

     return(
     <div>
     
        {/*…input contiene en los props todos los eventos onChange, onClick etc*/}
        <input {...input} type="number" step="10"  className="form-control" id="agemin" placeholder={placeholder} />
        { error1 && <span>ERROR!!! Max age smaller than Min age  </span>}
        { error2 && <span>ERROR!!! Min age and Max age equal to cero </span>}

     </div>
     );
  }   
 


  
  

