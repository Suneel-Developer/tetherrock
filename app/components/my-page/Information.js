"use client"
import React, { useState } from 'react'
import ConnectingExchangeModal from './ConnectingExchangeModal';

const Information = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <section className='mt-5 max-w-[660px] w-full mx-auto bg-white relative px-0 slg:px-6 pt-10 pb-[60px] slg:pb-10'>
            <div className='max-w-[660px] w-[93.6%] mx-auto flex justify-center flex-col'>
                <p className='text-2xl f-pretendard-b text-black text-left'>연동 정보</p>
                <img src="/assets/wallet (1).png" alt="wallet" className='absolute left-1/2 -translate-x-[60%] top-[75px] mt-[40px] mx-auto w-[314px] h-[180px] block object-cover' />
                <p className='mt-[247px] text-xl font-bold tracking-[-0.8px] text-center text-black'>아직은 연동된 거래소가 없어요</p>
                <p className='mt-[10px] text-sm f-pretendard-m text-center mx-auto'>거래소 연동 & 업데이트를 기다려주세요 <br/>
                환급액 업데이트는 거래소마다 상이합니다</p>
                <button className='mt-[60px] mx-auto w-[160px] text-sm f-pretendard-m text-center text-white rounded-[30px] bg-[#1aa0ee] h-10' onClick={openModal}>거래소 연동하기</button>
                {showModal && (
                    <ConnectingExchangeModal onClose={closeModal} />
                )}
            </div>
        </section>
    )
}

export default Information