import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
    const [scrollY, setscrollY] = useState(0);

    useEffect(() => {
        console.log("Moviendo el Scroll");

        const detectarScroll = () => setscrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        // Este return significa que en el desmontaje(El componente sea eliminado) remueva el evento
        return () => { 
            window.removeEventListener("scroll", detectarScroll) 
        };

    }, [scrollY]); //[scrollY] = Que este useEffect se ejecute solo cuando la variable scrollY tenga cambios

    useEffect(() => {
        console.log("Fase de montaje");
    }, []); // [] = Al estar vacio solo se ejecutara una vez el useEffect

    useEffect(() => {
        console.log("Fase de actualizacion");
    }); // Al no tener el arrego vacio el se va a estar ejecutando cada vez que se renderice

    useEffect(() => {
        return () => {
            console.log("Fase de desmontaje");
        };
    }); //



    return (
        <>
            <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    );
}
