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
                <h2 className='text-[32px] leading-[1.31] f-pretendard-b text-center text-[#12171e]'>지금 바로 테더락에서 <br />
                    페이백을 경험해 보세요</h2>
                <button className='mx-auto mt-[54px] max-w-[526px] w-full h-12 flex justify-center items-center text-center text-base font-bold rounded-[30px] bg-[#0067ff] text-white' onClick={handleClick}>
                    테더락 제휴 거래소 둘러보기
                </button>
            </div>
        </section>
    );
}

export default Banner;
