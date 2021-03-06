//import React from 'react';

//-------------------------------------------------------------
// Funciones llamadas en el metodo dispatch
//-------------------------------------------------------------
// Parametros
// la variable 
// Devuelve
// type: "CADENA_TEXTO_IDENTIFICAR_ACCION"
// lista de variables modificadas en el componente

const ac_togleSideBar = mostrarSideBar =>{
    return {    
            type: "MOSTRAR_OCULTAR_SIDE_BAR",
            mostrarSideBar: mostrarSideBar
    }
}


//Carga la lista de productos desde el json
const ac_cargarDatos = () =>{
    const persons = require('./data/persons.json');
    const lenguajes = require('./data/languages.json');
    
   

     return {
       type: "INICIALIZAR_DATOS",      
       lista_Lenguajes: lenguajes,
       lista_Personas: persons
     }
 }

   
 const ac_addLenguajeFiltro = (lenguaje) =>{
    
   
    return {    
            type: "ADD_LENGUAJE_FILTRO",
            lenguaje: lenguaje
            
    }
}
 

const ac_delLenguajeFiltro = (lenguaje) =>{
   
    return {    
            type: "DEL_LENGUAJE_FILTRO",
            lenguaje: lenguaje
            
    }
}


const ac_delPersona = (persona) =>{
   
    return {    
            type: "DEL_PERSONA",
            persona: persona
            
    }
}



const ac_EditPersona = (persona) =>{
    
   
    return {    
            type: "EDIT_PERSONA",
            persona: persona
            
    }
}


const ac_addNombreFiltro = (nombre) =>{
    return {    
            type: "ADD_NOMBRE_FILTRO",
            nombre: nombre
            
    }
}

const ac_accionNula = (persona) =>{
    return {    
            type: "ACCION_NULA",
            persona: persona
            
    }
}






const ac_initFiltros = () =>{
    return {    
            type: "INIT_FILTRO_LANGUAJES"                        
    }
}





const ac_addPersona = (persona) =>{   
    return {    
            type: "ADD_PERSONA",
            persona: persona
            
    }
}

const ac_updatePersona = (persona, indice) =>{   
    return {    
            type: "UPDATE_PERSONA",
            persona: persona,
            indice: indice
            
    }
}


const ac_changeFiltroAgeMax = ( ageMax) =>{ 
      
    return {    
            type: "CHANGE_FILTRO_AGE_MAX",
                ageMax: ageMax                        
    }
}

const ac_changeFiltroAgeMin = (  ageMin) =>{   
    return {    
            type: "CHANGE_FILTRO_AGE_MIN",
                ageMin: ageMin                        
    }
}


const ac_toogleDropDownMenu = (  ) =>{   
    return {    
            type: "TOGGLE_DROP_DOWN_MENU"
    }
}

const ac_closeDropDownMenu = (  ) =>{   
    return {    
            type: "CLOSE_DROP_DOWN_MENU"
    }
}










export {ac_updatePersona,ac_addPersona, ac_initFiltros, ac_EditPersona, ac_delPersona, ac_togleSideBar, ac_cargarDatos, ac_addLenguajeFiltro, ac_addNombreFiltro, ac_delLenguajeFiltro, ac_accionNula,
    ac_changeFiltroAgeMin,ac_changeFiltroAgeMax, ac_toogleDropDownMenu, ac_closeDropDownMenu};
