import React from 'react'
import Hero from '../components/service/hero'
import Box from '../components/service/box'
import Experincetabs from '../components/service/experincetabs'
import Payback from '../components/service/payback'
import Navbar from '../components/service/Navbar'

const Service = () => {
    return (
        <>
            <Navbar />

            <div className='bg-[#191f28] pb-[60px] slg:pb-[120px]'>

                <Hero />
                <Box />
                <Experincetabs />
                <Payback />
            </div>
        </>
    )
}

export default Service