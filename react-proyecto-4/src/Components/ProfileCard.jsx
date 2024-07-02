import React from "react";

const ProfileCard = ({persona}) => {

    const {nombre, apellido, edad, ubicacion} = persona;
    
    return (<div>
        <h2>Nombre completo: {nombre} {apellido}</h2>
        <span><strong>{edad}</strong></span>
        <h3>{ubicacion}</h3>
    </div>);
};

export { ProfileCard };