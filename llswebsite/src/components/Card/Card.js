import React from 'react';

function Card(props) {
    return (
        <div className={`card ${props.className || ''}`}>
            <div className="container">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;