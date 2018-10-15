import React from 'react';
import {connect} from 'react-redux';
import UnaPersona from './UnaPersona';
import FormularioFiltroListaPersonas from './FormularioFiltroListaPersonas';
import {ac_accionNula} from '../actionsCreator';
import {filtroPersonas} from './Funciones';



//----------------------------------------------------------------------
// Lista de personas aplicando los filtros
//----------------------------------------------------------------------

const   ListaPersonas = (props) => {
       return (                        
            <div className="col-10">
                  <FormularioFiltroListaPersonas  history={props.history}/>                 
                  {filtroPersonas(props.lista_Personas, props.formPersonas_filtroNombres, props.fil_Lenguajes, props.ageMin, props.ageMax).map(unaPersona =>{     
                   
                            return (
                                <div key={unaPersona.id}>                      
                                    <UnaPersona unaPersona={unaPersona} history={props.history}  id={unaPersona.id} key={unaPersona.id}/>          
                                </div>
                            );                                                                                                        
                  })}
            </div>
    
         );    
}
 

//Acceso a los valores del store mediante props
const mapStateToProps = state => { 
 
    return {
      inicializando:state.mis_datos.inicializando,
      lista_Personas: state.mis_datos.lista_Personas,  
      fil_Lenguajes:state.mis_datos.fil_Lenguajes,   
      formPersonas_filtroNombres:state.mis_datos.formPersonas_filtroNombres,
      ageMin:state.mis_datos.ageMin,  
      ageMax:state.mis_datos.ageMax
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return  dispatch(ac_accionNula());   
  }

  
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (ListaPersonas);


  