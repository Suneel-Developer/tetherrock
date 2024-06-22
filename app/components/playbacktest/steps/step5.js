import React from 'react';
import Footer from '../../Footer';
import ApplyPartner from '../../home/ApplyPartner';
import Paidback from '../../home/Paidback';
import Link from 'next/link';

const Step5 = () => {
    return (
        <>
            <div className='pt-10 bg-white pb-[60px] max-w-[660px] w-full mx-auto px-1'>
                <h2 className='text-center text-xl mx-auto f-pretendard-b tracking-[-0.8px] text-[#212529]'>시드머니, 거래횟수, 레버리지를 <br />
                    기반으로 분석 된 자료에요</h2>
                <div className='max-w-[242px] mx-auto w-full'>
                    <div className='mt-4 flex items-center'>
                        <img src="/assets/money_pocket.png" alt="money_pocket" className='w-[22px] h-7 block object-cover' />

                        <div className='ml-4'>
                            <p className='text-[#909090] text-xs f-pretendard-r'>알아본 결과</p>
                            <p className='text-black mt-[1px] text-base f-pretendard-b'>30일 기준 페이백 예상 기준</p>
                        </div>
                    </div>

                    <div className='mt-[10px] w-full text-lg f-pretendard-b py-5 rounded-xl bg-[#f0f2f5] text-[#3badf0] text-center'>0.08 USDT</div>
                    <p className='mt-[52px] f-pretendard-b text-xl tracking-[-0.8px] text-[#212529]'>여기서 분석하고 확인했어요</p>
                    <div className='mt-4 w-full text-lg f-pretendard-b py-[17px] px-[14px] flex items-center rounded-xl bg-[#f0f2f5]'>
                        <img src="/assets/okx-exchange.png" alt="okx-exchange" className='w-7 h-7 block object-cover' />
                        <p className='ml-[23px] f-pretendard-b text-lg'>OKX</p>
                    </div>

                    <p className='text-[#0798ec] mt-3 text-sm f-pretendard-b'><span className='text-black'>79 명 </span>의 분석 </p>
                    <p className='text-[#0798ec] mt-[2px] text-sm f-pretendard-b'><span className='text-black'>99.2% </span> 일치하는 결과에요 </p>

                    <Link href="#">
                        <button className='w-[242px] h-10 mx-auto mt-[60px] rounded-[30px] text-white bg-black text-sm text-center f-pretendard-m'>Gateio 거래소 가입하기</button>
                    </Link>
                </div>
            </div>


            <div className='py-10 mt-5 bg-white pb-[60px] max-w-[660px] w-[93.6%] mx-auto px-1'>
                <p className='text-center text-[#7c8389] text-xl f-pretendard-sm tracking-[-0.8px]'>테더락과  <span className='text-[#0798ec]'> 6개월 간 </span> 함께 한다면 </p>
                <p className='text-[28px] slg:text-[32px] mt-[7px] text-center f-pretendard-b'><span className='text-[#0798ec]'>0.48 USDT</span> 를
                    받을 수 있어요</p>

                <img src="/assets/dollar.png" alt="dollar" className='mt-[60px] mx-auto w-[142px] h-[158px] object-cover' />
                <ul className='mt-7'>
                    <li>
                        <p className='text-xs text-[#909090] f-pretendard-r text-center'>24. 6.</p>
                        <p className='text-base text-[#212529] f-pretendard-b text-center mt-[1px]'>+0.31 USDT</p>
                    </li>
                    <li className='opacity-80'>
                        <p className='text-xs text-[#909090] f-pretendard-r text-center'>24. 7.</p>
                        <p className='text-base text-[#212529] f-pretendard-b text-center mt-[1px]'>+0.31 USDT</p>
                    </li>
                    <li className='opacity-60'>
                        <p className='text-xs text-[#909090] f-pretendard-r text-center'>24. 8.</p>
                        <p className='text-base text-[#212529] f-pretendard-b text-center mt-[1px]'>+0.31 USDT</p>
                    </li>
                    <li className='opacity-40'>
                        <p className='text-xs text-[#909090] f-pretendard-r text-center'>24. 9.</p>
                        <p className='text-base text-[#212529] f-pretendard-b text-center mt-[1px]'>+0.31 USDT</p>
                    </li>
                    <li className='opacity-20'>
                        <p className='text-xs text-[#909090] f-pretendard-r text-center'>24. 10.</p>
                        <p className='text-base text-[#212529] f-pretendard-b text-center mt-[1px]'>+0.31 USDT</p>
                    </li>
                    <li className='opacity-20'>
                        <p className='text-xs text-[#909090] f-pretendard-r text-center'>24. 11.</p>
                        <p className='text-base text-[#212529] f-pretendard-b text-center mt-[1px]'>+0.31 USDT</p>
                    </li>
                </ul>

                <p className='mt-10 text-xl text-center tracking-[-0.8px] f-pretendard-b text-[#212529]'>이제 버려지는 <br />
                    수수료를 페이백 받으세요.
                </p>
            </div>

            <Paidback />
            <ApplyPartner />
            <Footer />
        </>
    );
};

export default Step5;
