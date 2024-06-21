"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuClass, setMenuClass] = useState('');
    const [transletormenuOpen, setTransletorMenuOpen] = useState(false);


    const handleMenuToggle = () => {
        if (menuOpen) {
            setMenuClass('menu-exit');
            setTimeout(() => {
                setMenuOpen(false);
                setMenuClass('');
            }, 300);
        } else {
            setMenuOpen(true);
            setMenuClass('menu-enter');
        }
    };



    const handleTransletorMenuToggle = () => {
        setTransletorMenuOpen(!transletormenuOpen);
    };
    return (
        <header className='py-[18px] slg:py-5 bg-white fixed top-0 z-50 w-full'>
            <div className='max-w-[660px] slg:max-w-[1100px] m-auto w-[88.266666%]'>
                <div className='flex justify-between items-center w-full'>
                    <div className='block slg:hidden' onClick={handleMenuToggle}>
                        <img
                            src={menuOpen ? "/assets/close-tggole.png" : "/assets/menu.png"}
                            alt="menu"
                            className='w-6 h-6 object-cover'
                        />
                    </div>
                    <div className='block'>
                        <Link href='/' className=''>
                            <img src="/assets/logo.png" alt="Tetherrock" className='w-[158px]' />
                        </Link>
                    </div>


                    {/* Desktop Links  */}
                    <div className='hidden slg:block'>
                        <ul className='flex items-center ml-11 gap-3'>
                            <li><Link href="#" className='f-pretendard-b text-base text-sky-blue text-nowrap tracking-[-0.64px]'>Notice</Link></li>
                            <li><Link href="/exchange" className='f-pretendard-b text-base text-sky-blue text-nowrap tracking-[-0.64px]'>Partner Exchanges</Link></li>
                            <li><Link href="/service" className='f-pretendard-b text-base text-sky-blue text-nowrap tracking-[-0.64px]'>Service</Link></li>
                            <li><Link href="/vip" className='f-pretendard-b text-base text-sky-blue text-nowrap tracking-[-0.64px]'>VIP</Link></li>
                            <li><Link href="/playback-test" className='f-pretendard-b text-base text-sky-blue text-nowrap tracking-[-0.64px]'>Payback Test</Link></li>
                        </ul>
                    </div>

                    {/* Mobile Links  */}
                    {menuOpen && (
                        <div className={`block slg:hidden fixed top-0 left-0 right-0 w-full h-screen bg-white z-[-2] ${menuClass}`}>
                            <div className='max-w-[660px] slg:max-w-[1100px] m-auto w-[88.266666%] pt-[122px]'>
                                <div className='flex items-center'>
                                    <Link href="/login" className='bg-blue_100 text-white border-none w-[82px] h-10 flex justify-center items-center text-sm font-medium f-pretendard-m text-center rounded-[30px]'>Login</Link>
                                    <Link href="/signup" className='bg-white text-blue_100 border border-blue_100 w-[82px] h-10 flex justify-center items-center text-sm f-pretendard-m font-medium text-center rounded-[30px] ml-2'>Join</Link>

                                    {/* If user login then show  */}
                                    {/* <Link href="/my-page" className='bg-blue_100 text-white border-none w-[82px] h-10 hidden slg:flex justify-center items-center text-sm font-medium f-pretendard-m text-center rounded-[30px]'>My Info</Link> */}
                                </div>
                                <ul className='mt-[50px]'>
                                    <li><Link href="#" className='f-pretendard-b text-2xl text-sky-blue text-nowrap tracking-[-0.96px]'>Notice</Link></li>
                                    <li className='mt-8'><Link href="/exchange" className='f-pretendard-b text-2xl text-sky-blue text-nowrap tracking-[-0.96px]'>Partner Exchanges</Link></li>
                                    <li className='mt-8'><Link href="/service" className='f-pretendard-b text-2xl text-sky-blue text-nowrap tracking-[-0.96px]'>Service</Link></li>
                                    <li className='mt-8'><Link href="/vip" className='f-pretendard-b text-2xl text-sky-blue text-nowrap tracking-[-0.96px]'>VIP</Link></li>
                                    <li className='mt-8'><Link href="/playback-test" className='f-pretendard-b text-2xl text-sky-blue text-nowrap tracking-[-0.96px]'>Payback Test</Link></li>
                                </ul>
                            </div>
                        </div>
                    )}
                    <div className='flex slg:ml-10 relative items-center'>
                        <Link href="/login" className='bg-blue_100 text-white border-none w-[82px] h-10 hidden slg:flex justify-center items-center text-sm font-medium f-pretendard-m text-center rounded-[30px]'>Login</Link>
                        <Link href="/signup" className='bg-white text-blue_100 border border-blue_100 w-[82px] h-10 hidden slg:flex justify-center items-center text-sm f-pretendard-m font-medium text-center rounded-[30px] ml-2'>Join</Link>

                        {/* If user login then show  */}
                        {/* <Link href="/my-page" className='bg-blue_100 text-white border-none w-[82px] h-10 hidden slg:flex justify-center items-center text-sm font-medium f-pretendard-m text-center rounded-[30px]'>My Info</Link> */}


                        <div className='slg:ml-5 relative'>
                            <button className='flex justify-center items-center cursor-pointer' onClick={handleTransletorMenuToggle}>
                                <img src="/assets/transletor.svg" alt="언어설정 버튼" className='w-[18px] slg:w-6 h-[18px] slg:h-6' />
                            </button>


                            {transletormenuOpen && (
                                <ul className='absolute top-7 right-0 py-[15px] px-[10px] bg-white border border-[#e5e5e5] rounded-lg flex justify-center items-center flex-col gap-2'>
                                    <li className='w-auto slg:w-[200px] text-sm slg:text-lg f-pretendard-m text-center cursor-pointer'>한국어</li>
                                    <li className='w-auto slg:w-[200px] text-sm slg:text-lg f-pretendard-m text-center cursor-pointer'>English</li>
                                    <li className='w-auto slg:w-[200px] text-sm slg:text-lg f-pretendard-m text-center cursor-pointer'>Español</li>
                                    <li className='w-auto slg:w-[200px] text-sm slg:text-lg f-pretendard-m text-center cursor-pointer'>繁體中文</li>
                                    <li className='w-auto slg:w-[200px] text-sm slg:text-lg f-pretendard-m text-center cursor-pointer'>Türkçe</li>
                                    <li className='w-auto slg:w-[200px] text-sm slg:text-lg f-pretendard-m text-center cursor-pointer'>عربي</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Navbar