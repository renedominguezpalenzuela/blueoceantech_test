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
    //expect(wrapper.find(UnaPersona)).to.have.length(5);
  
 });


});
  



/*
describe('Local State', () => {
    it('should increment the counter in state', () => {
      //se inicializa el contador a 0
      const state = { counter: 0 };
      //se le pasa a la funcion de incrementar en 1
      const newState = doIncrement(state);
  
      //se espera que el resultado sea igual a 1
      expect(newState.counter).to.equal(1);
    });
  
    it('should decrement the counter in state', () => {
      const state = { counter: 0 };
      const newState = doDecrement(state);
  
      expect(newState.counter).to.equal(-1);
    });
  });

*/
