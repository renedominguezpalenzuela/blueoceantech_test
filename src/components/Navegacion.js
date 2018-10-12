import React from 'react';
import {ac_togleSideBar} from '../actionsCreator';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

//componente para el DropDown
class NavDropdown extends React.Component {
    constructor(props) {
      super(props);
      //Estado asociado con el DropDown si esta visible o no
      this.state = {
        isToggleOn: false
      };
    }

 //Evento que se ejecuta al hacer clic en el DropDown
    showDropdown(e) {
      e.preventDefault();
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    
    render() {
      const classDropdownMenu = 'navbar-dark bg-dark dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
      return (
        
        <div>
          <a className="nav-link dropdown-toggle " href="/" id="navbarDropdown" 
                                                          role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"
            onClick={(e) => {this.showDropdown(e)}}>
            {this.props.name}
          </a>
          <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
            {this.props.children}
          </div>
          </div> 
        
        
      )
    }
  }


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
                  <li className="nav-item dropdown">
                     {/* <a className="nav-link" href="/edit">Edit</a>*/}
                      <NavDropdown name="Edit">
                        <a className="nav-link" href="/new">New</a>
                       {/* <a className="dropdown-item" href="/">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Something else here</a>*/}
                     </NavDropdown>

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
       // console.log('togle sideBAR');
         dispatch(ac_togleSideBar());
      },
    }
    
  }
  

  
export default connect(mapStateToProps, mapDispatchToProps) (Navegacion); 


