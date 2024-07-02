import React, { useState } from "react";
import './ColorCard.css'

const ColorCard = ({ card }) => { 
    const { likes, fecha, colores } = card;
    const [like, setLike] = useState(false);

    const likear = () => {
        setLike(!like);
    };
    const [color, setColor] = useState(colores[0]);
    return (
        <div className="color-card">
            <div className="colores">
                <ColorItemList colores={colores} />
            </div>
            <div className="controles">
                <button className={`btn-like ${like ? 'liked' : ''}`} onClick={likear}>
                    <i className={`bi bi-heart${like ? '-fill' : ''}`}></i> {likes}
                </button>
                <span className="time">{fecha}</span>
            </div>
        </div>
    );
};

const ColorItemList = ({ colores }) => {
    return (
        <>
            {colores.map((color, index) => (
                <ColorItem key={index} color={color} />
            ))}
        </>
    );
};

const ColorItem = ({ color }) => {
    return (
        <div className="color" style={{ backgroundColor: color }}></div>
    );
};

export { ColorCard };
