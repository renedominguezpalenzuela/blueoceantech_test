import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { devToolsEnhancer } from 'redux-devtools-extension';
import UnaPersona from './components/UnaPersona';




//------------------------------------------------------------------
//Objeto JS que guarda el estado
//------------------------------------------------------------------
//TODO: redux no permite el uso de extructuras complejas
//      crear varios estados y combinarlos 
const estado_global = {
    /*una_persona: {},*/
    lista_Personas: [],
    lista_Lenguajes:[],
    formPersonas_filtroLenguajes:[],
    formPersonas_filtroNombres:"",    
     mostrarSideBar:false
}


//------------------------------------------------------------------
// Funciones de Ayuda
//------------------------------------------------------------------
//Devuelve:
//  El estado anterior
//  Las variables del nuevo estado modificadas (separadas por coma) 

//Mostrando-Ocultando  el sideBar de vista principal
const toggleSideBar = (estado_global, action)=>{
    return {
        ...estado_global,
        mostrarSideBar: !estado_global.mostrarSideBar
    }
}

const inicializarDatos = (p_estado_global, action)=>{ 
    return {
        ...p_estado_global,
        lista_Personas: action.lista_Personas,
        lista_Lenguajes: action.lista_Lenguajes
    }
}

const addLenguajeFiltro = (p_estado_global, action)=>{    

    //console.log('Lista lenguajes ',p_estado_global.formPersonas_filtroLenguajes)

    const f = (p_estado_global, action)=>{
            if (p_estado_global.formPersonas_filtroLenguajes.indexOf(action.lenguaje)===-1) {                                  
                return p_estado_global.formPersonas_filtroLenguajes.concat(action.lenguaje)
            }  else  {
                return p_estado_global.formPersonas_filtroLenguajes
            }  
    } 

    return {
        ...p_estado_global,
        formPersonas_filtroLenguajes:f(p_estado_global, action)
   }                                  
       
}


const delLenguajeFiltro = (p_estado_global, action)=>{    
    return {
        ...p_estado_global,
        formPersonas_filtroLenguajes: p_estado_global.formPersonas_filtroLenguajes.filter(unLenguaje=>unLenguaje.id!==action.lenguaje.id)                                         
    }    
}

const delPersona = (p_estado_global, action)=>{ 
    console.log('Persona ', action.persona);  
    return {
        ...p_estado_global,
        lista_Personas: p_estado_global.lista_Personas.filter(unaPersona=>unaPersona.id!==action.persona.id)                                         
    }    
}

const addNombreFiltro = (p_estado_global, action)=>{ 
    //console.log("nombre ",action.nombre)
    return {
        ...p_estado_global,
        formPersonas_filtroNombres: action.nombre
        
    }
}

//------------------------------------------------------------------
// funcion reductora
//------------------------------------------------------------------
//Devuelve:
//  El estado anterior
//  Las variables del nuevo estado modificadas (separadas por coma) 
//  llama a la funcion de ayuda
const reducer = (state =estado_global, action) => {

switch(action.type)   {

    case 'MOSTRAR_OCULTAR_SIDE_BAR':{
        return  toggleSideBar(state,action);
    }
     
    case 'INICIALIZAR_DATOS':{
        return  inicializarDatos(state,action);
    }

    case 'ADD_NOMBRE_FILTRO':{
        return addNombreFiltro(state, action);
    }

    case 'ADD_LENGUAJE_FILTRO':{
        return addLenguajeFiltro(state, action);
    }

    case 'DEL_LENGUAJE_FILTRO':{
        return delLenguajeFiltro(state, action);
    }

    case 'DEL_PERSONA':{
        return delPersona(state, action);
    }

    case 'ACCION_NULA':{
        return state;
    }


  default:
    return state
 } 
 
};

//------------------------------------------------------------------
// Funcion Central que intercepta todos los dispatchs (applyMiddleware)
//------------------------------------------------------------------
/*const mylogger = store => next => action => {
    console.log('dispatching', action)
    console.log('Datos',action.product)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }*/






//----------------------------------------------------------------------------------
// Crear el store combinando Funcion reductora principal y el componente redux-form
//----------------------------------------------------------------------------------
const rootReducer = combineReducers({
    mis_datos: reducer,          //nombre del store principal: store.getState().mis_datos
    form:formReducer
});
const store = createStore(rootReducer, devToolsEnhancer()); 

export default store;
