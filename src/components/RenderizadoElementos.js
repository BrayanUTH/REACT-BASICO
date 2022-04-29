import React, { Component } from "react";
import data from "../helpers/data.json"

function ElementoLista(props) {
    return (
        <li>
            <a href={props.element.web} target="_blank" >{props.element.name}</a>
        </li>
    );
}

export default class RenderizadoElementos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
        }
    
    }

    render() {
        // console.log(data);

        return (
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    { this.state.seasons.map( (item, index) => <li key={index}>{item}</li> ) }
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map( item => (
                            <ElementoLista key={item.id} element={item}/>
                        ))
                    }
                </ul>
            </div>
        );
    }

}