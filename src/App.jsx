import './App.css'
import React from "react"

import Card from "./components/layout/card";

import Mega from './components/Mega/Mega';
import Contador from './components/Contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
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
   
        
        <div className='App'>
            <h1>Fundamentos React 2</h1>
                <div className="Cards">
                    
                    <Card titulo="#13 - Componente Megasena" color="#B9006E">
                        <Mega qtde={8}></Mega>
                    </Card>

                    <Card titulo="#12 - Contador" color="#424242">
                        <Contador numeroInicial={10}></Contador>
                    </Card>

                    <Card titulo="#11 - Componente Controlado" color="#E45F56">
                        <Input></Input>
                    </Card>

                    <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                        <IndiretaPai></IndiretaPai>
                    </Card>

                    <Card titulo="#09 - Comunicação Direta" color="#59323C">
                        <DiretaPai></DiretaPai>
                    </Card>

                    <Card titulo="#08 - Renderização Condicional" color="#982395">
                        <ParOuImpar numero={23}></ParOuImpar>
                        <UsuarioInfo usuario={{nome: 'Fernando' }} />   
                        {/* <UsuarioInfo usuario={{email: 'fernando@arrombado.com' }} />  */}
                    </Card>

                    <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                        <TabelaProdutos></TabelaProdutos>
                           
                    </Card>
                    
                    <Card titulo="#06 - repetição" color="#FF4C65">
                        <ListaAlunos></ListaAlunos>
                           
                    </Card>

                    <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
                        <Familia sobrenome="Ferreira">
                            <FamiliaMembro nome="Pedro" />
                            <FamiliaMembro nome="Ana" /> 
                            <FamiliaMembro nome="Gustavo" />
                        </Familia>
                    </Card>

                    <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                        <Aleatorio min={1} max={60} />
                    </Card>

                    <Card titulo="#03 - Fragmento" color= "#E94C6F">
                        <Fragmento />
                    </Card>

                    <Card titulo="#02 - Com Parâmetro" color= "#E8B71A">   
                        <ComParametro
                        titulo="Situação do aluno"
                        aluno="Pedro"
                        nota={9.3} 
                    />
                    </Card>
            
                <Card titulo="#01 - Primeiro Componente" color= "#588C73">   
                    <Primeiro></Primeiro>
                </Card>

                </div>

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

        