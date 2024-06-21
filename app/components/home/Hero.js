"use client"
import React, { useState } from 'react';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        name: 'Bybit',
        imgSrc: '/assets/bybit.png',
    });

    const options = [
        { name: 'Bybit', imgSrc: '/assets/bybit.png' },
        { name: 'Binance', imgSrc: '/assets/binance-exchange.png' },
        { name: 'Bitget', imgSrc: '/assets/bitget-exchange.png' },
        { name: 'Digifinex', imgSrc: '/assets/digifinex-exchange.png' },
        { name: 'Gateio', imgSrc: '/assets/gateio-exchange.png' },
        { name: 'Pionex', imgSrc: '/assets/PIONEX 로고.png' },
        { name: 'Bingx', imgSrc: '/assets/Bingx.png' },
        { name: 'OKX', imgSrc: '/assets/okx-exchange.png' },
        { name: 'TAPBIT', imgSrc: '/assets/tapbit-exchange.png' },
        { name: 'Weex', imgSrc: '/assets/weex-exchange.png' },
        { name: 'Kucoin', imgSrc: '/assets/kucoin-exchange.png' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <section className='py-10 hero-bg mt-24'>
            <div className='w-[93.6%] max-w-[1000px] mx-auto'>
                <div className="flex lg:items-end flex-col lg:flex-row-reverse justify-between max-w-[640px] mx-auto">
                    <img className="w-[67px] lg:w-[98px] h-[44px] lg:h-[64px] relative -top-[10px]" src="/assets/wallet.png" />
                    <h1 className="text-[32px] f-pretendard-b leading-[1.31] mt-[18px] lg:mt-0">Experience everything in payback Easier and faster on Tetherrock!</h1>
                </div>

                <div className='relative block w-full max-w-[660px] mt-10 mx-auto'>
                    <div className={`px-5 h-[49px] lg:h-14 rounded-[300px] flex justify-between items-center w-full border border-[#e0e0e0] ${isOpen ? 'bg-white bg-opacity-60' : 'bg-white'}`}>
                        <div>
                            <button className='w-[97px] lg:w-[114px] flex items-center' onClick={toggleDropdown}>
                                <img src={selectedOption.imgSrc} alt={selectedOption.name} className='w-5 lg:w-[26px] h-5 lg:h-[26px] object-cover' />
                                <p className='mx-[6px] text-sm lg:text-xl f-pretendard-b text-[#5b6065] overflow-hidden text-ellipsis break-all break-words line-clamp-1'>{selectedOption.name}</p>
                                <img src="/assets/dropDown.png" alt="dropDown" className='w-[14px] h-[11px]' />
                            </button>
                            {isOpen && (
                                <div className='absolute top-0 left-0'>
                                    <div className='bg-white border border-[#e0e0e0] relative px-3 lg:px-5 pt-4 rounded-[24px] lg:rounded-[29px] w-[128px] lg:w-[152px]'>
                                        <img src="/assets/dropUp.png" alt="dropUp" className='w-[14px] h-[11px] cursor-pointer absolute top-[22px] right-5' onClick={toggleDropdown} />
                                        {options.map((option) => (
                                            <button key={option.name} className='flex items-center mb-5' onClick={() => handleOptionClick(option)}>
                                                <img src={option.imgSrc} alt={option.name} className='w-5 lg:w-[26px] h-5 lg:h-[26px] object-cover' />
                                                <p className='mx-[6px] text-sm lg:text-xl f-pretendard-b text-[#5b6065]'>{option.name}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <input type="text" placeholder='Enter your exchange UID' className='ml-5 mr-1 w-[calc(100%-164px)] text-sm lg:text-xl tracking-[-0.8px] border-none f-pretendard-b outline-none bg-transparent h-full' />
                        <button className='w-5 lg:w-8 h-5 lg:h-8'>
                            <img src="/assets/search.png" alt="search" className='w-full object-cover block' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
