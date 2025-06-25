import React from 'react'
import './style.css'

function Hero() {
    return(
        <div className='hero-head'>
            <div className='hero-container'>
                <div className='hero-container-top'>
                    <div className='top-cont'>New update roll-out 🎉</div>
                </div>
                <div className='hero-container-content'>
                    <h1 className='content-head'>Trade seamlessly on Sui with
                         <span className='content-style'> low fees + high speeds.</span>
                    </h1>
                    <p className='content-description'>Unlock Features Like DCA, Multi-Wallet Support 
                        & Live Position Tracking
                    </p>
                </div>
                <div className='hero-container-btns'>
                    <button className='container-btns one'>
                        Launch Bot
                    </button>
                     <button className='container-btns one'>
                        Leaderboard
                    </button>
                     <button className='container-btns one'>
                        Litepaper
                    </button>

                </div>
            </div>
        </div>

    )
}
export default Hero