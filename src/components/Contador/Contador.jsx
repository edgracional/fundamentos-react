import "./Contador.css"
import React, { Component } from "react";


/* temos uma classe que é extends components*/
class Contador extends Component{

/* definir estado dentro do nosso componente baseado em classe*/
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial|| 5,
    };

    /* criar uma função que vai incrementa o valor do meu contador - dentro da função vou alterar o valor de numero (estado)*/
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    /* criar uma função alterar passo */
    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        });
    };

  


    /* se quizer utilizar o construtor:
    
    constructor(props){
        super(props)

reinicializa o state dentro do construtor 
        this.state = {
            numero: props.numeroInicial
        }
    }*/


/*temos uma função render e o que for retornado é exatamente nosso jsx */
    render(){
        return (
            <div className="Contador"> 
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" 
                    value={this.state.passo} 
                    onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    };

};


/* pode exportar no final é indiferente - pode colocar em cima...*/
export default Contador