import React from "react";
import _If, { Else } from "./If";

export default props =>{
    const usuario = props.usuario || {};
    return (
        <div>
            <if test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
                <else>
                Seja bem vindo <strong>Amigão</strong>!
                </else>
            </if>

        </div>
    );
};