import React from 'react';
import {ac_togleSideBar} from '../actionsCreator';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {ac_closeDropDownMenu, ac_toogleDropDownMenu} from '../actionsCreator';



//----------------------------------------------------------------------
// Componente Navegacion
//----------------------------------------------------------------------



  const estilo = {
    width:'40px'
  } ;

class  Navegacion extends React.Component {            
  render() {

    
     const classDropDownMenu = 'navbar-dark bg-dark dropdown-menu' + (this.props.dropDownMenuIsToogleOn ? ' show' : '')   
         return ( 

            <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">

           {/* Menu de la Izquierda en el navbar */}
           
              <ul className="navbar-nav mr-auto">

                  {/*Boton de tres barras mostrar/ocultar side bar  */}
                  <li className="nav-item mt-1 mr-sm-2">
                      <span className="navbar-toggler-icon" 
                                                  onClick={(e) => {
                                                      this.props.closeDropDownMenu(e);
                                                      this.props.togleSideBar();
                                                      }}>
                                                  > 
                                                  </span>
                  </li>

                  <li className="nav-item">
                        <NavLink  className="nav-link"  to ="/lista"
                        onClick={(e) => {this.props.closeDropDownMenu(e)}}> List </NavLink> 
                  </li>

                  
                  <li className="nav-item dropdown">  
                      <NavDropdown props={this.props} classDropDownMenu={classDropDownMenu} toogleDropDownMenu={this.props.toogleDropDownMenu} closeDropDownMenu={this.props.closeDropDownMenu} children={this.props.children}>
                           <NavLink  className="nav-link"  to ="/new"   onClick={(e) => {this.props.closeDropDownMenu(e)}} > New </NavLink> 
                            {/* <a className="dropdown-item" href="/">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="/">Something else here</a>*/}
                     </NavDropdown>
                  </li>
                
              </ul>
        

          {/*Imagen central*/}
          <div className="mx-auto order-0">
               <NavLink  className="navbar-brand mx-auto"  to ="/"  onClick={(e) => {this.props.closeDropDownMenu(e)}}> 
                   <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" style={estilo}/> 
                   BlueOcean Tech Test 
               </NavLink>                      
          </div>

          {/*Menu a la derecha*/}
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <NavLink  className="nav-link"  to ="/about"  onClick={(e) => {this.props.closeDropDownMenu(e)}}> 
                        About 
                     </NavLink> 
                  </li>            
              </ul>

      </nav>
    );    
}
}

 

const mapStateToProps = state => {  
    return {
      //Obtiene el estado cart contenido en el store
     //  products: state.products,
      // variable_props: state.variable_estado_1 
      dropDownMenuIsToogleOn: state.mis_datos.dropDownMenuIsToogleOn
        
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return     {
       togleSideBar() {
       // console.log('togle sideBAR');
         dispatch(ac_togleSideBar());
      },

      toogleDropDownMenu(e){
        e.preventDefault();
        dispatch(ac_toogleDropDownMenu());
      },

      closeDropDownMenu(e){
        dispatch(ac_closeDropDownMenu());
      }

    }
    
  }
  

  
export default connect(mapStateToProps, mapDispatchToProps) (Navegacion); 


//componente para el DropDown
const NavDropdown = (props) => {
      
  return (       
         <div>      
            <NavLink  className="nav-link dropdown-toggle"  to ="/" id="navbarDropdown" 
                                                            role="button" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false"
                                                            onClick={(e) => {props.toogleDropDownMenu(e)}}>
              Edit
            </NavLink> 
            
            <div className={props.classDropDownMenu} aria-labelledby="navbarDropdown">   
               {props.children}    
            </div>
 
           </div> 
       )
 }
  
 