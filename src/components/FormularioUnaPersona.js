import React from 'react';
import {reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import store from '../store.js';
import FiltroLenguajes from './FiltroLenguajes.js';
import {ac_initFiltroLanguages,  ac_addPersona, ac_updatePersona, ac_accionNula} from '../actionsCreator';
                     

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
                    <label htmlFor="age" className="form-control-sm">Age</label>
                        <Field component='input'  name="age" type="number"  className="form-control" id="age" placeholder="Enter Age" step="10" />                                          
                    </div> 
                </div>            
            </div>

            

             
             <div className="col-6 d-flex">

            {/*Boton Salvar*/}
             <button type="button" className="btn btn-primary mr-sm-2 d-block"
                
                onClick={(e) => {
                     
                      persona.name = props.nombre;
                      persona.age = props.age;
                     //realizar las validaciones con el metodo de redux-form
                     
                    if (persona.name) {
                      salvar(persona);
                      store.dispatch(ac_initFiltroLanguages());
                      //props.history.goBack();
                      props.history.push('/lista');
                    }

                 }}            
             >Save</button>


             {/*Boton Cancelar*/}
             <button type="button" className="btn btn-primary mr-sm-2 d-block" onClick={(e) => {
                 store.dispatch(ac_initFiltroLanguages());
                 //props.history.goBack();
                 props.history.push('/lista');

             }

                 
             }>Cancel</button>
            </div>
                    
 
         </form>     
                  
     );
 }   
 


 const mapStateToProps = (state) => ({
    initialValues : {
        nombre: state.mis_datos.una_persona.name,
        age: state.mis_datos.una_persona.age
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
    const age = selector(state, 'age')
    
    
    // or together as a group
    //const { firstName, lastName } = selector(state, 'firstName', 'lastName')
    return {
      nombre,
      age
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
            persona.image="elliot.jpg";
            store.dispatch(ac_addPersona(persona));
        }

        console.log('formPersona  ',store.getState().mis_datos.lista_Personas);
    
  }
  
 
   
 