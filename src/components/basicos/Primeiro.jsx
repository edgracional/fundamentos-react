import React from "react"



/* esta usando react */
export default function Primeiro(){
    /* dentro dessa função conseguiu criar uma const (msg) e retornar esta msg */
    /* se tiver um jsx tera que ter um import do React */
    /* e quando quizer usar endentado - elvolva com () */
    const msg = 'Seja bem vindo!'
    return (
        /* ejsx dentro de um componente */
        /* interpretou uma váriavel ou const msg dentro do <p>{ msg }</p> 
        para finalizar o primeiro componente*/
        <div>
             <h2>Primeiro Componente </h2>
             <p>{ msg }</p> 
        </div>
    
   
    )
}





/* esta usando react */
/*  export default function Primeiro(){
    return <h2>Primeiro Componente </h2>
}*/