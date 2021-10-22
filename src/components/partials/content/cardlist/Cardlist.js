import React, { useState, useEffect } from 'react';
import Card from './card/Card';
import './Cardlist.css';
import axios from 'axios';



const CardList = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/cards/')
            .then(res => {
                setCards(res.data)})
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="cardList">
            {cards.map(card => {
                return(
                    <Card key={card.id} card={card} />
                )
            })}
        </div>
    )
}

export default CardList;