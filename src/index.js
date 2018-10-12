import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ac_cargarDatos} from './actionsCreator';


  
//Inicializando (llamando API (fake) devuelve datos en json)
if (store.getState().mis_datos.inicializando){
    //console.log('inicializando');
    store.dispatch(ac_cargarDatos());
  }


ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root')
);
