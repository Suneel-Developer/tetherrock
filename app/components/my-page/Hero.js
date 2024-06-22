"use client"
import React, { useState } from 'react';

const Hero = () => {
    const referralCode = 'CwmT0ouO';

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(referralCode);
            alert('Copied!');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <section className='mt-20'>
            <div className='max-w-[660px] px-4 mx-auto pt-10 slg:pt-[60px] pb-10 slg:pb-[68px] w-full bg-[#1aa0ee]'>
                <div>
                    <p className="text-xl f-pretendard-b text-white text-center">24년 6월 22일  </p>
                    <p className="text-[32px] slg:text-[42px] mt-5 f-pretendard-b leading-[26px] text-white text-center">0.00 USDT</p>
                    <p className="text-sm mt-6 f-pretendard-m opacity-70 text-white text-center">업데이트 기준은 각 거래소마다 상이합니다.</p>
                </div>
            </div>

            <div className='mt-5 max-w-[660px] w-full mx-auto bg-white'>
                <div className='flex justify-between items-center p-5 gap-2'>
                    <p className='text-2xl f-pretendard-b'>Referral Code : {referralCode} (0/4)</p>
                    <button onClick={handleCopyClick}>
                        <img src="/assets/copy.svg" alt="copy-icon" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero