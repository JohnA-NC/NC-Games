import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/trimmed.mp4" autoPlay loop muted />
            <h1>THE BEST GAMES OF 2021</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SUBSCRIBE</Button> */}
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>KEEP UP TO DATE</Button>
            </div>
        </div>
    )
}

export default HeroSection
