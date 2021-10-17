import React from 'react'
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <p>Date from: {props.dateFrom}</p>
            <p>Date to: {props.dateTo}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Card