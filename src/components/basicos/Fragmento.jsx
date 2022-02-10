import React from "react"

export default function Franmento(props){
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )

}

/* Pode ser desta maneira  sem div etc -- deixar em branco a não ser se for usar algum atributo:
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )

*/