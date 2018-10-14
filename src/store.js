import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { devToolsEnhancer } from 'redux-devtools-extension';

//------------------------------------------------------------------
//Objeto JS que guarda el estado
//------------------------------------------------------------------
//TODO: redux no permite el uso de extructuras complejas
//      crear varios estados y combinarlos 
const estado_global = {
    dropDownMenuIsToogleOn:false,
    una_persona: {},
    lista_Personas: [],
    lista_Lenguajes:[],
    fil_Lenguajes:[],
    formPersonas_filtroNombres:"",    
     mostrarSideBar:false,
     inicializando:true,
     ageMin:0,
     ageMax:0,
     error_filtro_rango_edad:false,
     prueba:"",
    
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
        lista_Lenguajes: action.lista_Lenguajes,
        inicializando: false
    }
}

//ERROR si entra en el edit person duplica los lenguajes
const addLenguajeFiltro = (p_estado_global, action)=>{  

    const f = (p_estado_global, action)=>{
          
          const vID = action.lenguaje.id;
          const obj = p_estado_global.fil_Lenguajes.find(UnLenguaje => UnLenguaje.id === vID);  
         

           // if (p_estado_global.fil_Lenguajes.indexOf(action.lenguaje)!==-1) { 

            if (obj) {
               // console.log('Encontrado ',action.lenguaje);  
                return p_estado_global.fil_Lenguajes
                
            }  else  {
             

               // console.log('no encontrado ',action.lenguaje);                                 
                return p_estado_global.fil_Lenguajes.concat(action.lenguaje)
            }  
    } 
    



    return {
        ...p_estado_global,
        fil_Lenguajes:f(p_estado_global, action)
   }    
   
 
       
}


const delLenguajeFiltro = (p_estado_global, action)=>{    
    return {
        ...p_estado_global,
        fil_Lenguajes: p_estado_global.fil_Lenguajes.filter(unLenguaje=>unLenguaje.id!==action.lenguaje.id)                                         
    }    
}

const delPersona = (p_estado_global, action)=>{  
    return {
        ...p_estado_global,
        lista_Personas: p_estado_global.lista_Personas.filter(unaPersona=>unaPersona.id!==action.persona.id)                                         
    }    
}

const editPersona = (p_estado_global, action)=>{ 
   // console.log('Persona lenguajes ', action.persona.languages)
    return {
        ...p_estado_global,
        una_persona: action.persona, 
        fil_Lenguajes: action.persona.languages        
        
    }    
}


//ERROR: si se elimina alguna persona del medio quedan huecos en el id
// al agregar una nueva puede ser que se repita el id

const addPersona = (p_estado_global, action)=>{
   
    
    const total= p_estado_global.lista_Personas.length;


    //console.log('total ',total);
    action.persona.id = total+1;

    //console.log('persona ',action.persona);

    p_estado_global.lista_Personas.push(action.persona)


    return {
        ...p_estado_global,
         lista_Personas:p_estado_global.lista_Personas,
         una_persona:[]

    }    
 }

const updatePersona = (p_estado_global, action)=>{
   // action.persona.languages=p_estado_global.filtroLenguajes;
   //console.log('Persona.lenguage', action.persona);
    p_estado_global.lista_Personas[action.indice]=action.persona;
    return {
        ...p_estado_global,
        lista_Personas: p_estado_global.lista_Personas
    }    
}



const addNombreFiltro = (p_estado_global, action)=>{ 
    //console.log("nombre ",action.nombre)
    return {
        ...p_estado_global,
        formPersonas_filtroNombres: action.nombre
        
    }
}

const initFiltroLanguages = (p_estado_global, action)=>{ 
    //console.log("nombre ",action.nombre)
    return {
        ...p_estado_global,
        fil_Lenguajes: [],
        una_persona:[],
        ageMin:0,
        ageMax:0

        
    }
}


const comprobarError1 = (ageMin, ageMax) => {
    let error1 = false;

    ageMax = parseInt(ageMax, 10);
    ageMin = parseInt(ageMin, 10);

    if (ageMax<0 || !ageMax) {ageMax=0;}
    if (ageMin<0 || !ageMin) {ageMin=0;}

    if (ageMax<ageMin ){
      error1 = true;
    }

 

    return error1;
}

const changeFiltroAgeMin = (p_estado_global, action)=>{ 
    const error1 = comprobarError1(action.ageMin, p_estado_global.ageMax );
   
    return {
        ...p_estado_global,
        ageMin: action.ageMin,
        error_filtro_rango_edad:error1           
    }
}

const changeFiltroAgeMax = (p_estado_global, action)=>{ 
    const error1 = comprobarError1(p_estado_global.ageMin, action.ageMax );
    return {
        ...p_estado_global,
        ageMax: action.ageMax ,
        error_filtro_rango_edad: error1         
    }
}



const toggleDropDownMenu = (p_estado_global, action)=>{ 
 
    return {
        ...p_estado_global,
        dropDownMenuIsToogleOn: !p_estado_global.dropDownMenuIsToogleOn        
    }
}

const closeDropDownMenu = (p_estado_global, action)=>{ 
 
    return {
        ...p_estado_global,
        dropDownMenuIsToogleOn: false        
    }
}

const prueba = (p_estado_global, action)=>{ 
   // console.log("nombre ",action.prueba)
    return {
        ...p_estado_global,
        prueba: action.prueba
        
     
        
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


    
    case 'INIT_FILTRO_LANGUAJES':{
        return initFiltroLanguages(state, action);
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

    case 'EDIT_PERSONA':{
        return editPersona(state, action);
    }

    case 'ADD_PERSONA':{
        return addPersona(state, action);
    }

    case 'UPDATE_PERSONA':{
        return updatePersona(state, action);
    }


    

    case 'CHANGE_FILTRO_AGE_MIN':{
        return changeFiltroAgeMin(state, action);
    }

    case 'CHANGE_FILTRO_AGE_MAX':{
        return changeFiltroAgeMax(state, action);
    }


    case 'PRUEBA':{
        return prueba(state, action);
    }


    case 'TOGGLE_DROP_DOWN_MENU':{

       return toggleDropDownMenu(state, action);
    }

    case 'CLOSE_DROP_DOWN_MENU':{

        return closeDropDownMenu(state, action);


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
