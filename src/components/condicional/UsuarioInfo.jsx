import React from "react";
import _If from "./If";

export default props =>{
    const usuario = props.usuario || {}
    return (
        <div>
            <if test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
            </if>
            <if test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão</strong>!
            </if>


        </div>
    )
}