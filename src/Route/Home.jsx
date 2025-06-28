import React from 'react'
import Navbar from '../components/Navbar/index.jsx'
import Hero from '../components/Hero/index.jsx'
import Social from '../components/Social/index.jsx'
import Footer from '../components/Footer/index.jsx'



function Home(){
    return(
        <div className='Home'>
            <Navbar />
            <Hero />
            <Social />
            <Footer />
        </div>
    )
}
export default Home