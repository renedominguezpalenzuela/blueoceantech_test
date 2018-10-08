import React from 'react';
import {connect} from 'react-redux';
import UnaPersona from './UnaPersona';
import FormularioListaPersonas from './FormularioListaPersonas';
import {ac_accionNula} from '../actionsCreator';
import UnLenguaje from './UnLenguaje';

//Devuelve arreglo con lista de personas aplicando los filtros
const   ListaPersonas = (props) => {
 
  const filtro = (props)=>{  

    let lista =props.lista_Personas; 
    const criterio1=props.formPersonas_filtroNombres.toLowerCase();
  
  
   
    //Filtrado por nombre
    if (criterio1){   
              lista = lista.filter(unaPersona=>{       
                    if (unaPersona.name.toLowerCase().substring(0,criterio1.length)===criterio1) {
                      return  unaPersona;
                    } 
              }
      );           
    }

    //Filtrado por Lenguajes
    const criterio2=props.formPersonas_filtroLenguajes;
    console.log('criterior 2', criterio2);
   
   /* if (criterio2.length>0) {
      lista = lista.filter(unaPersona=>{
            if (unaPersona.languages.some(x => criterio2.some(y => y === x))){                       
                  return  unaPersona;
               }
            })
    }*/

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

/*
//OR
 let lista_final=[];
    if (criterio2.length>0) {
      //Recorro los filtros
          
          criterio2.forEach((unLenguajeFiltro)=>{  

              lista.forEach((unaPersona)=>{                  
                //Recorro todos los lenguajes de la persona           
                 if (unaPersona.languages.some(unLenguage=>unLenguage.id===unLenguajeFiltro.id)){
                     //comprobar antes de agregar que no exista   
                      if (lista_final.indexOf(unaPersona)===-1){                   
                        lista_final.push(unaPersona);           
                      }                                                                             
                 }
                //}
              });
          })
      } else {
        lista_final=lista
      }
*/
      
     

    return lista_final;
  };

         return (                        
            <div>
                  <FormularioListaPersonas/>
                  
                  {filtro(props).map(unaPersona =>{
                            return (
                                <div key={unaPersona.id}>                      
                                    <UnaPersona persona={unaPersona}  id={unaPersona.id}/>     
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
      formPersonas_filtroLenguajes:state.mis_datos.formPersonas_filtroLenguajes,
      formPersonas_filtroNombres:state.mis_datos.formPersonas_filtroNombres  
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return  dispatch(ac_accionNula());   
  }

  
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (ListaPersonas);


