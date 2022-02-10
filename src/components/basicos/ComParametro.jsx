import React from "react"


export default function ComParametro(props){
    /* criou uma condição */
    const status = props.nota >= 7 ? ' Aprovado ' : 'Recuperação'

    /* pode ser feito assim também utilizando const - exemplo com sub */
    /*  const sub = props.subtitulo */


    /* com a{} vai fazer a interpretação para estar impimindo os valores do componente */
    return(
        /*titulo e subtitulo serão passadas como parametro (props) para a 
    função ComParametro */
    /*E serão passadas a partir da interpolação*/
        <div>
            <h2>{ props.titulo }</h2>
            <p>
               <strong>{ props.aluno } </strong>
               tem nota
               <strong> {props.nota}</strong>
                e foi
               <strong>{ status }</strong>
               </p> 
        </div>
    )
}