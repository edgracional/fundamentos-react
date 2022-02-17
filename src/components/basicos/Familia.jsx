import React, { cloneElement } from "react"



export default props => {


    return (
        <div>
            {props.children.map( (child,i) =>{
                
                
                return cloneElement(child , {...props, key: i });
           })}
        </div>
    );
};

/* passando as propriedades do pai
export default props => {
        
    return (

            <div>
            //cloneElement para cada um dos elementos
            passando as propriedades do pai para os filhos
            para que todos os filhso tenham acesso as propriedades do pai..
            essa é a forma quando vc não tem acesso direto aos filhos.
                {React.children.map(props.children, child =>{
                    return cloneElement(child , props);
                })}
            </div>
                
        );
    };

        */