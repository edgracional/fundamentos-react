import React from "react";

export default props => {
    const cb = props.quandoClicar;
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
    const gerarNerd = () => Math.random() > 0.5;

    
    return (
        <div>
          <div>Filho</div>
          <button onClick={_ => cb('Eder', gerarIdade, gerarNerd())}>
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