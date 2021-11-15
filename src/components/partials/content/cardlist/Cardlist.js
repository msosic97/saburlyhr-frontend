import React, { useState, useEffect } from 'react';
import Card from './card/Card';
import './Cardlist.css';
import axios from 'axios';



const CardList = () => {

    const url = 'http://localhost:8000/api/cards/'
    const [cards, setCards] = useState([])
    const [IN, setIN] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const config = {
        headers: { Authorization: `Bearer ${token}` }
    }     
        axios.get(url, config)
        .then(response => {
            setCards(response.data)
            setIN(true)
        })
        .catch(err => console.log(err))
    }, [IN])

    
    return (
        <div className="cardList">
            {cards.map((card, id) => {
                return(
                    <Card key={id} card={card}/>
                )
            })}
        </div>
    )
}

export default CardList;