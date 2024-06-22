"use client"
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/playbacktest/hero'
import Steps from '../components/playbacktest/steps'

const PlaybackTest = () => {

    const [showHero, setShowHero] = useState(true);

    const handleButtonClick = () => {
        setShowHero(false);
    };
    return (
        <>
            <Navbar />
            <div className='pt-20'>
                {showHero ? <Hero handleButtonClick={handleButtonClick} /> : <Steps />}
            </div>
        </>
    )
}

export default PlaybackTest