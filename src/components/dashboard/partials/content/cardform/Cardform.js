import React from 'react'
import './Cardform.css'

let visible

const CardForm = (props) => {

    if (!props.isVisible){
        visible = {
            display: 'none'
        }
    }

    return (
        <div style={visible} className="cardForm">
            <form className="cardF">
                <div className="formDiv">
                    <label className="cardLabel" for="dateFrom">Date from: &nbsp; </label>
                    <input type="date" name="dateFrom"/>
                    <label className="cardLabel" for="dateTo">Date to: &nbsp;</label>
                    <input type="date" name="dateTo"/>
                    <label className="cardLabel">Description: &nbsp;</label>
                    <textarea cols="40" rows="10"></textarea>
                </div>

                <div className="submitDiv">
                    <input className="submitbtn" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default CardForm;