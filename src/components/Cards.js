import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC games!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the Ashes of Creation Alpha"
                        label="MMORPG"
                        path="/games"/>
                        <CardItem 
                        src="images/img-2.jpg"
                        text="New Resident Evil - Village"
                        label="Survival Game"
                        path="/games"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
