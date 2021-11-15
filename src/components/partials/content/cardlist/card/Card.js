import React from 'react'
import './Card.css';

const Card = ({card}) => {
    const {date_from, date_to, description} = card;
    return (
        <div className="card">
            <p>Date from: {date_from}</p>
            <p>Date to: {date_to}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default Card