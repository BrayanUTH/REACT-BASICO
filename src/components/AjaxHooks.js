import React, { useState, useEffect } from 'react';

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([])

    // useEffect(() => {
    //     let url = 'https://pokeapi.co/api/v2/pokemon/';
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(json => {

    //             json.results.forEach(element => {

    //                 fetch(element.url)
    //                     .then(resp => resp.json())
    //                     .then(json => {
    //                         let pokemon = {
    //                             id: json.id,
    //                             name: json.name,
    //                             avatar: json.sprites.front_default
    //                         };

    //                         setPokemons((pokemons) => [...pokemons, pokemon]);
    //                     });

    //             });
    //         });

    // }, []);

    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        const getPokemons = async (url) => {

            let res = await fetch(url);
            let json = await res.json();

            json.results.forEach(async element => {
                let response = await fetch(element.url);
                let json = await response.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);

            });
        }

        getPokemons(url);

    }, []);


    return (
        <>
            <h2>Peticiones Asincronas en Hooks</h2>
            {pokemons.length === 0
                ? <h3>Cargando...</h3>
                : pokemons.map(element => <Pokemon key={element.id} name={element.name} avatar={element.avatar} />)
            }
        </>
    );
}

function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}