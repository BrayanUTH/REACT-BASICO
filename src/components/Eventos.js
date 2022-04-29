import React, { Component } from "react";

export class EventosES6 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        console.log('Sumando');
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar(e) {
        console.log('Restar');
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clases ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }

}


// PROPERTIES INITIALIZER
export class EventosES7 extends Component {

    state = {
        contador: 0,
    }

    //Arrow functions = Heredan el this del contexto donde se encuentran es decir el this de la clase Actual
    sumar = (e) => {
        console.log('Sumando');
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = (e) => {
        console.log('Restar');
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clases ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }

}

// const Boton = (props) => {
//     return (
//         <button onClick={props.myOnClick}>Boton hecho componente</button>
//     );
// }

// const Boton = (props) => <button onClick={props.myOnClick}>Boton hecho componente</button>

/* Componenten en Arrow Functions y con Destructuracion */
const Boton = ({ myOnClick }) => <button onClick={myOnClick}>Boton hecho componente</button>

export class MasSobreEventos extends Component {

    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }

    render() {
        return (
            <div>
                <h2>Mas Sobre Eventos</h2>
                <button
                    onClick={(e) =>
                        this.handleClick(e, 'Hola pasando parametro desde un Evento')
                    }
                >Saludar</button>

                {/* Evento Personalizado */}
                <Boton
                    myOnClick={(e) =>
                        this.handleClick(e, 'Hola pasando parametro desde un Evento')
                    }
                />
            </div>
        );
    }


}
