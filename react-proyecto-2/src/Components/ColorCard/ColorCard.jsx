import React from "react";
import './ColorCard.css'

const ColorCard = ({Card}) => {
    const {likes, fecha, colores} = Card;
    return (
        <div className="color-card">
        <div className="colores">
            <ColorItemList colores={colores}/>
        </div>
        <div className="controles">
            <button className="btn-like"><i className="bi bi-heart"></i> {likes}</button>
            <span className="time">{fecha}</span>
        </div>
    </div>
    )
}

const ColorItemList = ({colores}) => {
    return (
        <>

        {colores.map((color) => <ColorItem color={color}/>)}
        </>
    )
}

const ColorItem = ({color}) => {
    return (
        <div className="color" style={{backgroundColor:color}}></div>
    )
}

export {ColorCard}