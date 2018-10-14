
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
import SideBar from './components/SideBar';

import TestRenderer from 'react-test-renderer';



configure({ adapter: new Adapter() });


//Comprobando que <App/> se ejecuta sin errores
it('JEST: <App/> renders without crashing', () => {
    const wrapper = render(
                            <Provider store={store}>
                              <App/>
                            </Provider>
    );  

  
});

