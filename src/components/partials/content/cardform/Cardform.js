import React from 'react'
import './Cardform.css'

const CardForm = (props) => {

    return (
        <div className="cardForm">
            <form className="cardF">
                <div className="formDiv">
                    <label className="cardLabel">Date from: &nbsp; </label>
                    <input type="date" name="dateFrom"/>
                    <label className="cardLabel">Date to: &nbsp;</label>
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