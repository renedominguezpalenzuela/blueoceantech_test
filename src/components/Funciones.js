import store from '../store';
import { ac_addPersona, ac_updatePersona, ac_addLenguajeFiltro} from '../actionsCreator';

//---------------------------------------------------------------------------------------------------
// filtroPersonas
//---------------------------------------------------------------------------------------------------
// parametros:
//   lista_personas: lista inicial de personas sin filtrar 
//   todos los filtros de la vista ListaPersonas
// Devuelve:
//   Lista de personas filtrada
//-------------------------------------------------------------------------------------------------
const filtroPersonas = (lista_Personas, formPersonas_filtroNombres, fil_Lenguajes, ageMin, ageMax)=>{  

    


    let lista =lista_Personas; 
   
    
    
    
    const criterio1=formPersonas_filtroNombres.toLowerCase();
   
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
    const criterio2=fil_Lenguajes;
   
    let lista_filtro2=[];
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
              if (lista_filtro2.indexOf(unaPersona)===-1){                   
                  lista_filtro2.push(unaPersona);           
              } 
            }
          })
      } else {
        lista_filtro2=lista
      }

      

      //Tercer filtroPersonas por Edad
      let lista_final=[];
       ageMin = parseInt(ageMin, 10);
       ageMax = parseInt(ageMax, 10);
       
      if ( ageMin<=ageMax && (ageMin>0 || ageMax>0) ){

        
        lista_final = lista_filtro2.filter(unaPersona=>unaPersona.age>=ageMin && unaPersona.age<=ageMax);                                         
       

      } else {
  
          lista_final =lista_filtro2;
     
      }

      //chequeo de errores

   
      
    return lista_final;
  };


  
  const salvar = (persona) =>{   

  

    
 
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
  
const getLanguageObjectFromID = id =>{      
    return store.getState().mis_datos.lista_Lenguajes.find(UnLenguaje => UnLenguaje.id === id);                         
}

const getLanguageObjectFromName = name =>{    
     return store.getState().mis_datos.lista_Lenguajes.find(UnLenguaje => UnLenguaje.name === name);                         
}


const selectLenguajeOnChange = (val) =>{     

    const language =getLanguageObjectFromName(val) ;
    
     
    if (val){            
      store.dispatch(ac_addLenguajeFiltro(language));


    }
 }

export {getLanguageObjectFromID, getLanguageObjectFromName, filtroPersonas, salvar, selectLenguajeOnChange};
