import React, { Component } from "react";

export default class AjaxApi extends Component {

    state = {
        pokemons: [],
    };

    render() {
        return (
            <>
                <h2>Peticiones Asincronas en Componentes de Clase</h2>
                { this.state.pokemons.length === 0 
                    ? <h3>Cargando...</h3> 
                    : this.state.pokemons.map(element => <Pokemon key={element.id} name={element.name} avatar={element.avatar} />)
                } 
            </>
        );
    }

    componentDidMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
              //  console.log(json)
                
                json.results.forEach(element => {

                    fetch(element.url)
                        .then(resp => resp.json())
                        .then(json => {
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            };

                            let pokemons = [...this.state.pokemons, pokemon];

                            this.setState({pokemons});
                        });

                });
            });
    }

}

function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}
