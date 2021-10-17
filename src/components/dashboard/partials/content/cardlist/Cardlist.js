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

let visible

const CardList = (props) => {
    if (props.isVisible){
        visible = {
            display: 'none'
        }
    }
    return (
        <div style={visible} className="cardList">
            {cards.map(card => {
                return(
                    <Card id={card.id} dateFrom={card.dateFrom} dateTo={card.dateTo} description={card.description} />
                )
            })}
        </div>
    )
}

export default CardList;