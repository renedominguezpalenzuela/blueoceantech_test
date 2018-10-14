import React, {Component} from 'react';
import {reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import store from '../store.js';
import FiltroLenguajes from './FiltroLenguajes.js';
import {ac_initFiltroLanguages,  ac_addPersona, ac_updatePersona, ac_accionNula} from '../actionsCreator.js';
import md5 from 'md5';

                     


//---------------------------------------------------------------------------------------------------
// Crear , modificar personas
//---------------------------------------------------------------------------------------------------
/*
  -- se mapean los campos del formulario a props


*/
let   FormularioUnaPersona = (props) => {

   let persona = props.una_persona;
   let imagen = '';
   if (props.una_persona.image) {
     imagen = process.env.PUBLIC_URL + '/img/photos/'+props.una_persona.image;
   } else {
    imagen = process.env.PUBLIC_URL + '/img/photos/nofoto2.jpg';
   }
  
     return ( 
         
        

         <form className="mt-5 ml-10 col-8">

         <div className="form-group row"> 

                 {/*Foto */}
                 <div className="col-3"> 
                                
                     <div className="form-group row">                                       
                        <img src={imagen} className="w-75" alt=""/>  
                     </div>   
                     <div className="form-group row col-2"> 
                          
                     {/*<ImageUpload/>*/}
                          
                        <Field  name="image" component="input" type="file" className="fileInput"  />                                                
                        <button className="btn btn-sm btn-primary mr-sm-2" onClick={this.uploadHandler}>Upload!</button>
                        
                        
                     </div>   

                        
                 </div>                               
            
                 <div className="col-9">
         
                 <div className="form-group row">
                         {/*Nombre */}
                        <div className="col-12">
                                    
                            <label htmlFor="filtroNombres" className="form-control-sm">Full Name</label>
                            <Field component='input'  name="nombre" type="text"  className="form-control" id="filtroNombres" placeholder="Enter Full name" />
                        </div>
                  </div>  
 
 

                   <div className="form-group row">

                        {/*Filtro lenguajes */}            
                        <div className="col-8">                    
                            <FiltroLenguajes/>                                              
                        </div>    

                        {/*Edad */}
                        <div className="col-4">                    
                            <label htmlFor="age" className="form-control-sm">Age</label>
                                <Field component='input'  name="age" type="number"  className="form-control" id="age" placeholder="Enter Age" step="10" />                                          
                            </div> 
                        </div>   
                        </div>        
                        
                </div>  


                  {/*Description */}
                  <div className="form-group row">
                        <div className="col-12">            
                            <label htmlFor="description" className="form-control-sm">Description</label>
                                <Field component='textarea'  name="description"  className="form-control" id="description" placeholder="Enter Description"  />                                          
                        </div>                            
                  </div>

            

             
             <div className="col-6 d-flex">

            {/*Boton Salvar*/}
             <button type="button" className="btn btn-primary mr-sm-2 d-block"
                
                onClick={(e) => {
                     
                      persona.name = props.nombre;
                      persona.age = props.age;
                      persona.description = props.description;
                     //realizar las validaciones con el metodo de redux-form
                     console.log('Persona ',persona);
                     
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
                 props.history.goBack();
                 //props.history.push('/lista');

             }

                 
             }>Cancel</button>
            </div>
                    
 
         </form>     
                  
     );
 }   
 


 const mapStateToProps = (state) => ({
    initialValues : {
        nombre: state.mis_datos.una_persona.name,
        age: state.mis_datos.una_persona.age,
        description: state.mis_datos.una_persona.description

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
  //Mapeando campos del formulario a props
const selector = formValueSelector('formUnaPersona') // <-- same as form name
FormularioUnaPersona = connect(
  state => {
    // can select values individually
    const nombre = selector(state, 'nombre')
    const age = selector(state, 'age')
    const description = selector(state, 'description')
    
    
    // or together as a group
    //const { firstName, lastName } = selector(state, 'firstName', 'lastName')
    return {
      nombre,
      age,
      description
    }
  }
)(FormularioUnaPersona)
   
   export default FormularioUnaPersona;



   

   const salvar = (persona) =>{   

    let fecha =new  Date().toISOString();
    let ficheroenServidor = md5(persona.image)+persona.image.split('.').pop();;
 
   console.log(ficheroenServidor);
//console.log(fecha);
    
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
           // persona.image="elliot.jpg";
            store.dispatch(ac_addPersona(persona));
        }

        console.log('formPersona  ',store.getState().mis_datos.lista_Personas);
    
  }
  
 
   
 