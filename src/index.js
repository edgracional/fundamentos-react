/* fazer um importe relativo  './index.css'*/
import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

/* fazer um importe relativo  Primeiro que vai ser referenciado dentro da div'*/
import Primeiro from './components/basicos/Primeiro'
/* este componente é baseado em uma função*/
import ComParametro from './components/basicos/ComParametro'


ReactDom.render(
   /* Os componentes são referenciados dentro do jsx como tag <Primeiro></Primeiro>  */
    /* As duas propriedades titulo e subtitulo serão passadas como parametro (props) para a 
    função ComParametro */
    /* Essa é a idéia do componentes você pode utilizar qauntas vezes for necessário  */
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do /aluno" 
            aluno="Pedro" 
            nota={9.3}/>
        <ComParametro 
            titulo="Situação do /aluno" 
            aluno="Maria" 
            nota={9.9} />
    </div>,
    document.getElementById('root')
)

/* pode ser dessar forma:
ComParametro titulo="Segundo Componente" subtitulo="Muito legal"></ComParametro> */
