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

export {ac_delPersona, ac_togleSideBar, ac_cargarDatos, ac_addLenguajeFiltro, ac_addNombreFiltro, ac_delLenguajeFiltro, ac_accionNula};
