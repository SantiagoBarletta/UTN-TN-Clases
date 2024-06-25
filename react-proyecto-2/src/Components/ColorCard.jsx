import React from "react";
import './ColorCard.css'

const ColorCard = ({Card}) => {
    const {likes, fecha, colores} = Card;
    return (
    
        <div class="color-card">
        <div class="colores">
            <div className="color" style={{backgroundColor:colores[0]}}></div>
            <div className="color" style={{backgroundColor:colores[1]}}></div>
            <div className="color" style={{backgroundColor:colores[2]}}></div>
            <div className="color" style={{backgroundColor:colores[3]}}></div>
        </div>
        <div className="controles">
            <button className="btn-like"><i class="bi bi-heart"></i> {likes}</button>
            <span className="time">{fecha}</span>
        </div>
    </div>
    )
}

export {ColorCard}