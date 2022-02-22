import React from "react";

export default props => {
    const cb = props.quandoClicar
    
    return (
        <div>
          <div>Filho</div>
          <button onClick={_ => cb('Eder', 40, true)}>
              Fornecer Informações
          </button>
        </div>
    )
}


/*  Outra froma de fazer
<button onClick={
              function (e) {
                props.quandoClicar('Eder', 40, true)
              }
          }>Fornecer Informações</button>
        </div> */