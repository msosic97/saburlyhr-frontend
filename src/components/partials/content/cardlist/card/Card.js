import React from 'react'
import './Card.css';

const Card = ({card}) => {
    const {date_from, date_to, description} = card;
    return (
        <div className="card">
            <p><b>Date from: </b>{date_from}</p>
            <p><b>Date to: </b>{date_to}</p>
            <p><b>Description: </b>{description}</p>
        </div>
    )
}

export default Card