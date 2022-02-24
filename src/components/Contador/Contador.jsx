import "./Contador.css"
import React, { Component } from "react";

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from "./PassoForm";

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
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
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
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        );
    };

};


/* pode exportar no final é indiferente - pode colocar em cima...*/
export default Contador





/* Teremos o componete Pai Contador.jsx */

/* Teremos os componetes Filhos Botoes.jsx, Display.jsx e PassoForm.jsx */