import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/my-page/Hero'
import Information from '../components/my-page/Information'
import Withdrawalhistory from '../components/my-page/Withdrawalhistory'
import AccountSettings from '../components/my-page/AccountSettings'

const Mypage = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Information />
            <Withdrawalhistory />
            <AccountSettings />
        </main>
    )
}

export default Mypage