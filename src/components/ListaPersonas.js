import React from 'react';
import {connect} from 'react-redux';
import UnaPersona from './UnaPersona';
import FormularioListaPersonas from './FormularioListaPersonas';
import {ac_accionNula} from '../actionsCreator';


//Devuelve arreglo con lista de personas aplicando los filtros
const   ListaPersonas = (props) => {
       return (                        
            <div>
                  <FormularioListaPersonas  history={props.history}/>
                  
       {filtro(props).map(unaPersona =>{
                       {/* {props.lista_Personas.map(unaPersona =>{*/}
                            return (
                                <div key={unaPersona.id}>                      
                                    <UnaPersona persona={unaPersona} history={props.history}  id={unaPersona.id} key={unaPersona.id}/>     
                                </div>
                            );                                                                                                        
                  })}


                     


            </div>
    
         );    
}
 


const mapStateToProps = state => { 
  //console.log('datos ',state.mis_datos.lista_Personas);
    return {
      lista_Personas: state.mis_datos.lista_Personas,  
      fil_Lenguajes:state.mis_datos.fil_Lenguajes,
      
      formPersonas_filtroNombres:state.mis_datos.formPersonas_filtroNombres  
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return  dispatch(ac_accionNula());   
  }

  
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (ListaPersonas);


  const filtro = (props)=>{  

    let lista =props.lista_Personas; 
    const criterio1=props.formPersonas_filtroNombres.toLowerCase();
   
    //Filtrado por nombre
    if (criterio1){   
              lista = lista.filter(unaPersona=>{       
                    if (unaPersona.name.toLowerCase().substring(0,criterio1.length)===criterio1) {
                      return  unaPersona;
                    } else {
                      return null;
                    }
                  }
              
      );           
    }

    //Filtrado por Lenguajes
    const criterio2=props.fil_Lenguajes;
   
    let lista_final=[];
    if (criterio2.length>0) {
      
          

      lista.forEach((unaPersona)=>{  
        
//Recorro los filtros
               
             let arreglo_booleano=[];
             let i=0;
             criterio2.forEach((unLenguajeFiltro)=>{  
              arreglo_booleano.push(false); 
                            
                //Recorro todos criterios si alguno no se cumple no puedo agregar          
                 if (unaPersona.languages.some(unLenguage=>unLenguajeFiltro.id===unLenguage.id)){
                  arreglo_booleano[i]=true;                                                                         
                 }

                 i++; 
              });

            //comprobar antes de agregar que no exista 
            if (arreglo_booleano.every(unbooleano=>unbooleano===true)) {    
              if (lista_final.indexOf(unaPersona)===-1){                   
                  lista_final.push(unaPersona);           
              } 
            }
          })
      } else {
        lista_final=lista
      }

   

    return lista_final;
  };