// ConnectingExchangeModal.jsx

import React, { useState } from 'react';

const ConnectingExchangeModal = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('BingX');

    const toggleDropdown = (e) => {
        e.stopPropagation(); // Stop propagation to prevent closing modal
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-150 ease-linear bg-black bg-opacity-50">
            <div className="bg-white rounded-[0.5rem] px-6 py-8 max-w-[412px] w-full mx-auto" onClick={(e) => e.stopPropagation()}>
                <form>
                    <div className='flex justify-between items-center gap-2'>
                        <p className='text-2xl f-pretendard-b text-black'>Connecting Exchanges</p>
                        <button onClick={onClose} type='button'>
                            <img src="/assets/close.png" alt="close" className='w-4 h-4' />
                        </button>
                    </div>

                    <div className='mt-7 relative'>
                        <button type='button' onClick={toggleDropdown} className='flex justify-between items-center gap-2 py-5 px-4 rounded-xl border border-[#aeb0b2] w-full'>
                            <p className='text-lg font-semibold text-black'>{selectedItem}</p>
                            <img src="/assets/dropDown.png" alt="dropDown" className={`w-[19px] h-[15px] transform ${isOpen ? 'rotate-90' : ''}`} />
                        </button>

                        {isOpen && (
                            <ul className='absolute top-[79px] border border-[#aeb0b2] py-5 px-4 rounded-xl w-full h-[118px] overflow-y-scroll text-lg font-semibold overflow-x-hidden bg-white'>
                                <li onClick={() => handleSelect('Bitget')}>Bitget</li>
                                <li onClick={() => handleSelect('BingX')}>BingX</li>
                                <li onClick={() => handleSelect('Digifinex')}>Digifinex</li>
                                <li onClick={() => handleSelect('OKX')}>OKX</li>
                                <li onClick={() => handleSelect('Weex')}>Weex</li>
                                <li onClick={() => handleSelect('Gateio')}>Gateio</li>
                                <li onClick={() => handleSelect('Bybit')}>Bybit</li>
                                <li onClick={() => handleSelect('TAPBIT')}>TAPBIT</li>
                                <li onClick={() => handleSelect('Kucoin')}>Kucoin</li>
                                <li onClick={() => handleSelect('Binance')}>Binance</li>
                                <li onClick={() => handleSelect('Pionex')}>Pionex</li>
                            </ul>
                        )}

                    </div>
                    <input className=" mt-[17px] p-5 outline-none bg-[#f0f2f5] rounded-xl w-full h-[62px] text-lg f-pretendard-b" type="text" name="uid" placeholder="Enter your UID of exchange" autoComplete="off" required="" />
                    <div className='mt-[170px]'>
                        <button type='button' className='text-sm f-pretendard-m text-center bg-[#f0f2f5] rounded-[30px] flex justify-center items-center h-[42px] w-full text-[#7c8389]'>Connect UID</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConnectingExchangeModal;
