"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/exchange');
    };

    return (
        <section className='mt-[100px] slg:mt-[120px] bg-white py-[60px]'>
            <div className='max-w-[1000px] w-[93.6%] mx-auto'>
                <h2 className='text-[32px] leading-[1.31] f-pretendard-b text-center text-[#12171e]'>You can experience payback on Tetherrock right now</h2>
                <button className='mx-auto mt-[54px] max-w-[526px] w-full h-12 flex justify-center items-center text-center text-base font-bold rounded-[30px] bg-[#0067ff] text-white' onClick={handleClick}>
                    Go to Partner Exchanges
                </button>
            </div>
        </section>
    );
}

export default Banner;
