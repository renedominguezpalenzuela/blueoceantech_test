import React from 'react';
import App, { doIncrement, doDecrement, Counter } from '../App';


import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//incorporando redux
import {Provider} from 'react-redux';
import store from '../store';

//Componentes
import Navegacion from '../components/Navegacion';
import SideBar from '../components/SideBar';
import ListaPersonas from '../components/ListaPersonas';
import UnaPersona from '../components/UnaPersona';
import FormularioUnaPersona from '../components/FormularioUnaPersona';

configure({ adapter: new Adapter() });

//Enzyme
describe('Components render tests', () => {
  
  it('<APP> renders OK', () => {  
      const wrapper = render(
                    <Provider store={store} >
                      <App/>
                    </Provider>
      );   
   });

   it('<ListaPersonas> renders OK', () => {  
    const wrapper = render(
                  <Provider store={store} >
                    <ListaPersonas/>
                  </Provider>
    );
  });
    
    it('<FormularioUnaPersona> renders OK', () => {  
      const wrapper = render(
                    <Provider store={store} >
                      <FormularioUnaPersona/>
                    </Provider>
      );
      
  
 });


});
  



