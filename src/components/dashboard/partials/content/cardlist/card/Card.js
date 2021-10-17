import React from 'react'
import './Card.css';

const Card = ({card}) => {
    const {dateFrom, description, dateTo} = card;
    return (
        <div className="card">
            <p>Date from: {dateFrom}</p>
            <p>Date to: {dateTo}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default Card