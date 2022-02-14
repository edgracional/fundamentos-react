import React from "react"
// eslint-disable-next-line no-unused-vars
import Aleatorio from "./components/basicos/Aleatorio";
/* fazer um importe relativo  Primeiro que vai ser referenciado dentro da div'*/
import Primeiro from './components/basicos/Primeiro';
/* este componente é baseado em uma função*/
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


/* função Arrow function */
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
   
        
        <div id='app'>
            <h1>Fundamentos React 2</h1>
            <Aleatorio min={1} max={60} />
            <Fragmento />
            <ComParametro
                titulo="Situação do aluno"
                aluno="Pedro"
                nota={9.3} 
            />
            <Primeiro></Primeiro>


        </div>
    
);



/* Forma antiga
export default function(props){
    return(
        <div id='app'> 
        <h1>Fundamentos React 2</h1>
        <Fragmento/>
        <ComParametro 
            titulo="Situação do /aluno" 
            aluno="Pedro" 
            nota={9.3}/>
            <Primeiro></Primeiro>
        

    </div>
    );
} */

        