import React from "react"

import Card from "./components/layout/card";
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

            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento">
                    <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro">   
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.3} 
                />
            </Card>
           
            <Card titulo="#01 - Primeiro Componente">   
                <Primeiro></Primeiro>
            </Card>



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

        