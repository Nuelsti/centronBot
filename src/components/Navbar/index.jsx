import React from 'react'
import Logo from '../../assets/Group 88.png'
import './style.css'

function Navbar() {
    return(
        <div className='nav-header'>
            <div className='nav-header-container'>
                
                <div className='nav-logo'>
                    <div className='nav-logo-img'>
                        <img className='logo-img' src={Logo}/>
                    </div>
                    <div className='nav-logo-content'>
                        <p className='logo-cont'>Centron<span className='sub-logo-cont'>Bot</span></p>
                    </div>
                </div>
                <div className='nav-btn'>
                    <button className='btn-btn'>Trade Now</button>
                </div>
            </div>
        </div>

        // <style jsx{``}></style>

    );
}
export default Navbar