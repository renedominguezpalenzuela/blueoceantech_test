
import React from 'react';
import App from './App';


//enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

//incorporando redux
import {Provider} from 'react-redux';
import store from './store';


import Navegacion from './components/Navegacion';

configure({ adapter: new Adapter() });


//Comprobando que <App/> se ejecuta sin errores
it('JEST: <App/> renders without crashing', () => {

const wrapper = shallow(
 <Provider store={store}>
  <App/>
 </Provider>
);


});

//Comprobando que existe componente navegacion
/*
it('<Navegacion/> component exists', () => {

  const wrapper = shallow(
   <Provider store={store}>
    <App/>
   </Provider>
  );
  
  expect(wrapper.find('Navegacion').length).toBe(1);
  //expect(wrapper.find('Navegacion')).toBe(1);
   });
*/

  
 

