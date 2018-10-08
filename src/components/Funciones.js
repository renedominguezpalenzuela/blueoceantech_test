import store from '../store';

const getLanguageObjectFromID = id =>{      
    return store.getState().mis_datos.lista_Lenguajes.find(UnLenguaje => UnLenguaje.id === id);                         
}

const getLanguageObjectFromName = name =>{    
     return store.getState().mis_datos.lista_Lenguajes.find(UnLenguaje => UnLenguaje.name === name);                         
}


export {getLanguageObjectFromID, getLanguageObjectFromName};

