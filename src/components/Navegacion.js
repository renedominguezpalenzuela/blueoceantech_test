import React from 'react';
import {ac_togleSideBar} from '../actionsCreator';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';


const   Navegacion = (props) => {

        const estilo = {
            width:'40px'
          } ;        


        return ( 

            <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">

           {/* Menu de la Izquierda en el navbar */}
           
              <ul className="navbar-nav mr-auto">

                  {/*Boton de tres barras mostrar/ocultar side bar  */}
                  <li className="nav-item mt-1 mr-sm-2">
                      <span className="navbar-toggler-icon" onClick={props.togleSideBar}></span>
                  </li>

                  <li className="nav-item">
                
                      <a className="nav-link" href="/lista">List</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/edit">Edit</a>
                  </li>
              
              </ul>
        

          {/*Imagen central*/}
          <div className="mx-auto order-0">          
              <a className="navbar-brand mx-auto" href="/"> <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" style={estilo}/> BlueOcean Tech Test</a>          
          </div>

          {/*Menu a la derecha*/}
        
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="/about">About</a>
                  </li>            
              </ul>
      

      </nav>
  


    );    
}
 

const mapStateToProps = state => {  
    return {
      //Obtiene el estado cart contenido en el store
     //  products: state.products,
      // variable_props: state.variable_estado_1 
        
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return     {
       togleSideBar() {
        console.log('togle sideBAR');
         dispatch(ac_togleSideBar());
      },
    }
    
  }
  

  
export default connect(mapStateToProps, mapDispatchToProps) (Navegacion); 


