import React, { Component } from 'react';
import './App.css';
import Navegacion from './components/Navegacion';
import SideBar from './components/SideBar';
import HomePage from './components/Home';
import Page404 from './components/Page404';
import About from './components/About';
import ListaPersonas from './components/ListaPersonas';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import FormularioUnaPersona from './components/FormularioUnaPersona';
import store from './store';
import {ac_cargarDatos} from './actionsCreator';

class App extends Component {


  constructor(props){
    super(props);

    
  
  }

  componentDidMount(){
        
       
    
  }

  render() {



    const mostrarSideBar_ClassSTR = "bg-dark d-flex align-items-stretch "+(this.props.mostrarSideBar ? 'toggled' : '');
  
    return (   
      
      <BrowserRouter>    
      <div>  
        <div className="row">
           <div className="col" >          
           
            <Navegacion/>
           </div>             
        </div>
       
        <div className="row h-100"> 
       
            <div id="wrapper" className={mostrarSideBar_ClassSTR}>
               <div  id="sidebar-wrapper">             
              
               <SideBar/>
               </div>
            </div>

            <div className="col d-flex justify-content-center">
              {/*Contenido principal*/}             
              <Switch>
                <Route path="/"  component={HomePage} exact/>
                <Route path="/lista"  component={ListaPersonas} exact/>
                <Route path="/edit"  component={FormularioUnaPersona} exact/>
                <Route path="/about"  component={About} exact/>
                <Route path="/new"  component={FormularioUnaPersona} exact/>
                <Route component={Page404}/>
             </Switch>  
            </div> 
         </div>
       
    </div>    
    </BrowserRouter>

      
 
      
    );
  }
}


const mapStateToProps = state => {  
  return {
    mostrarSideBar: state.mis_datos.mostrarSideBar       
  }
}

const mapDispatchToProps = dispatch => {
  return     {
   /* addToCart(product) {
      console.log('add');
       dispatch(ac_addToCart(product));
    },*/
  }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(App)


