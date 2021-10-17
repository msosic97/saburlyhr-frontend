import React from 'react';
import Card from './card/Card';
import './Cardlist.css';


let cards = [
    { 
        id: 1,
        user: 'Ismail',
        dateFrom : '28.07.2001',
        dateTo : '29.07.2001',
        description: 'Uzivanje'
    },
    { 
        id: 2,
        user: 'Ismo',
        dateFrom : '28.08.2001',
        dateTo : '29.08.2001',
        description: 'Odmor'
    },
]


const CardList = () => {

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