import React from "react";
import FamiliaMembro from './FamiliaMembro';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {


    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome= {props.sobrenome} />
            <FamiliaMembro nome="Ana" {...props} /> 
            <FamiliaMembro nome="Gustavo" sobrenome="Silva" />
        </div>
    )
}

/* 3 maneira diferente de passar os valores

     <div>
            pegou uma das propeirdades e passou para co componente filho
            <FamiliaMembro nome="Pedro" sobrenome= {props.sobrenome} />

            usou sprad passou todas as proproedades para componente filho
            <FamiliaMembro nome="Ana" {...props} /> 

            Aqui ele simplesmente passou o sobrenome diferente direto
            <FamiliaMembro nome="Gustavo" sobrenome="Silva" />
        </div>
    )

*/