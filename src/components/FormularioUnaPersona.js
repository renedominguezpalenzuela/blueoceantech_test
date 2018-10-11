import React from 'react';
import {reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import store from '../store.js';
import FiltroLenguajes from './FiltroLenguajes.js';
import {ac_initFiltroLanguages,  ac_addPersona, ac_updatePersona, ac_accionNula} from '../actionsCreator';






 /*Salvar: 
                    copiarle a una_persona el filtro de lenguajes
                    buscar una_persona en la lista, si existe la modifico sino la agrego*/
                    
                  
                    

let   FormularioUnaPersona = (props) => {

   let persona = props.una_persona;

  
     return ( 
         
         <form className="mt-5 ml-10">
         <div className="col-12">
            <div className="form-group row">             
                 <label htmlFor="filtroNombres" className="form-control-sm">Full Name</label>
                 <Field component='input'  name="nombre" type="text"  className="form-control" id="filtroNombres" placeholder="Enter Full name" />
             </div>
             </div>  
 
 
             <div className="form-group row">
                <div className="col-12">
                    <div className="form-group">                  
                       <FiltroLenguajes/>                                          
                    </div> 
                </div>            
            </div>

              <div className="form-group row">
                <div className="col-12">
                    <div className="form-group">                  
                    <label htmlFor="salario" className="form-control-sm">Salary ($)</label>
                        <Field component='input'  name="salario" type="number"  className="form-control" id="salario" placeholder="Enter Salary" step="10" />                                          
                    </div> 
                </div>            
            </div>

            

             <div className="col-6 d-flex">

             <button type="button" className="btn btn-primary mr-sm-2 d-block"
                
                onClick={(e) => {
                     
                      persona.name = props.nombre;
                     //realizar las validaciones con el metodo de redux-form
                     
                    if (persona.name) {
                      salvar(persona);
                      store.dispatch(ac_initFiltroLanguages());
                      props.history.goBack();
                    }

                 }}            
             >Save</button>

             <button type="button" className="btn btn-primary mr-sm-2 d-block" onClick={(e) => {
                 store.dispatch(ac_initFiltroLanguages());
                 props.history.goBack();

             }

                 
             }>Cancel</button>
            </div>
                    
 
         </form>     
                  
     );
 }   
 


 const mapStateToProps = (state) => ({
    initialValues : {
        nombre: state.mis_datos.una_persona.name
    },
    una_persona: state.mis_datos.una_persona,
     lista_Lenguajes: state.mis_datos.lista_Lenguajes,
     fil_Lenguajes: state.mis_datos.fil_Lenguajes,
     filtroNombres: state.mis_datos.formPersonas_filtroNombres
 });
 
 
 const mapDispatchToProps = dispatch => {
    return  dispatch(ac_accionNula());
 }
 
 FormularioUnaPersona = reduxForm({ 
     form:'formUnaPersona'
     
    })(FormularioUnaPersona)
   


 FormularioUnaPersona = connect(
       mapStateToProps,
       mapDispatchToProps
   )(FormularioUnaPersona);


  // Decorate with connect to read form values
const selector = formValueSelector('formUnaPersona') // <-- same as form name
FormularioUnaPersona = connect(
  state => {
    // can select values individually
    const nombre = selector(state, 'nombre')
    
    // or together as a group
    //const { firstName, lastName } = selector(state, 'firstName', 'lastName')
    return {
      nombre,
    }
  }
)(FormularioUnaPersona)
   
   export default FormularioUnaPersona;



   

   const salvar = (persona) =>{   
       
    
    
    //ERROR Aqui falla en encontrar 
    const vID = persona.id;
    const obj = store.getState().mis_datos.lista_Personas.find(unaPersona => unaPersona.id === vID); 
   
    

    const fil_Lenguajes = store.getState().mis_datos.fil_Lenguajes;
    persona.languages=fil_Lenguajes;
   



    if (obj){
        //console.log('Persona encontrada ', persona);
        const indice =store.getState().mis_datos.lista_Personas.indexOf(persona);
        store.dispatch(ac_updatePersona(persona, indice));        

    } else {
        //console.log('Persona NO encontrada ', persona);
        
        persona.salary=0;
        persona.image="elliot.jpg";
      

        store.dispatch(ac_addPersona(persona));
    }

    
  }
  
 
   
 