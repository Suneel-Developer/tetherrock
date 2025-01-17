import React from 'react'
import Navbar from '../components/Navbar'
import PartnerExchanges from '../components/home/PartnerExchanges'
import Paidback from '../components/home/Paidback'
import Footer from '../components/Footer'

const Exchange = () => {
    return (
        <main>
            <Navbar />
            <div className='pt-20'>
                <PartnerExchanges text="공식 제휴 거래소" />
                <Paidback />
                <Footer />
            </div>
        </main>
    )
}

export default Exchange