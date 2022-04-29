import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
    return(
        <div>
            <h2>{props.titulo}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{ props.booleano ? "Verdadero" : "Falso" }</li>
                <li>{ props.arreglo.join(", ") }</li>
                <li>{ props.objeto.nombre + " - " + props.objeto.correo }</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{ props.elementoReact }</li>
                <li>{ props.componenteReact }</li>

            </ul>
        </div>
    );
}

// defaultProps = Es un elemento por defecto en React
Propiedades.defaultProps = {
    titulo: "Las Props",
}

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired, //Obligando a que esa propiedad solo reciba numeros y que sea obligatoria de enviar
}

