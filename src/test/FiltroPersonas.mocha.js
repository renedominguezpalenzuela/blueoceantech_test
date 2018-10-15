
import App, { doIncrement, doDecrement, Counter } from '../App';


import { expect } from 'chai';
import {filtroPersonas} from '../components/Funciones';




describe('filtroPersonas() function tests', () => {
    


    const lista_inicial = require('../data/persons.json');
  
    let filtro_nombres='';
    let fil_Lenguajes=[];
    let ageMin = 0;
    let ageMax = 0;

    
    

    it('should return the full list', () => {      

      let lista_final=filtroPersonas(lista_inicial, filtro_nombres, fil_Lenguajes, ageMin, ageMax);
      expect(lista_final).to.eql(lista_inicial);

    });
  
    it('Name filter test', () => {

        const resultado_esperado = [
            { 
                "id": 8, "name": "Susan Green", "age": 56,  "image": "susan.png" ,
                 "languages": [{"id": 1, "name": "Java"}, {"id": 19, "name": "Visual Basic"},{"id": 4, "name": "C#"}, {"id": 10, "name": "MatLab"},{"id": 19, "name": "Visual Basic"}],
                 "description" : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "           
               }
        ]
      
        filtro_nombres='susan';
        let lista_final=filtroPersonas(lista_inicial, filtro_nombres, fil_Lenguajes, ageMin, ageMax);
        expect(lista_final).to.eql(resultado_esperado);

    });


  
it('Age filter test', () => {

    const resultado_esperado = [
        { 
            "id": 4, "name": "Alan White", "age": 30,  "image": "matthew.png" ,
             "languages": [{"id": 19, "name": "Visual Basic"},{"id": 18, "name": "Scratch"},{"id": 13, "name": "Assembly"}],
             "description" : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "           
           },
           { 
             "id": 5, "name": "Jhon Doe", "age": 20,  "image": "elliot.jpg" ,
              "languages": [{"id": 1, "name": "Java"}, {"id": 19, "name": "Visual Basic"},{"id": 4, "name": "C#"},{"id": 13, "name": "Assembly"}],
              "description" : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "           
            } ,
            { 
                "id": 6, "name": "Jake Taylor", "age": 24,  "image": "jane.png" ,
                 "languages": [{"id": 1, "name": "Java"}, {"id": 19, "name": "Visual Basic"},{"id": 4, "name": "C#"}, {"id": 10, "name": "MatLab"},{"id": 19, "name": "Visual Basic"}],
                 "description" : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "           
               }      
    ]
  
    
    ageMin = 10;
    ageMax = 30;
    filtro_nombres='';

    let lista_final=filtroPersonas(lista_inicial, filtro_nombres, fil_Lenguajes, ageMin, ageMax);
    expect(lista_final).to.eql(resultado_esperado);

});


it('Skills filter test', () => {

    const resultado_esperado = [
        { 
            "id": 1, "name": "Don Miller", "age": 100,  "image": "avatar.jpg" , 
             "languages": [{"id": 1, "name": "Java"},{"id": 4, "name": "C#"},{"id": 9, "name": "PHP"},{"id": 12, "name": "Objective-C"}] ,
             "description" : "AAA Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "     
           }   
    ]
  
    
    ageMin = 0;
    ageMax = 0;
    filtro_nombres='';
    fil_Lenguajes =[{"id": 1, "name": "Java"},{"id": 4, "name": "C#"}, {"id": 9, "name": "PHP"}];

    let lista_final=filtroPersonas(lista_inicial, filtro_nombres, fil_Lenguajes, ageMin, ageMax);
    expect(lista_final).to.eql(resultado_esperado);

});




});