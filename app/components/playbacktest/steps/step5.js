import React from 'react';
import Footer from '../../Footer';
import ApplyPartner from '../../home/ApplyPartner';
import Paidback from '../../home/Paidback';
import Link from 'next/link';

const Step5 = () => {
    return (
        <>
            <div className='pt-10 bg-white pb-[60px] max-w-[660px] w-full mx-auto px-1'>
                <h2 className='text-center text-xl mx-auto f-pretendard-b tracking-[-0.8px] text-[#212529]'>This data is analyzed based on <br /> seed money, number of trades, and leverage.</h2>
                <div className='max-w-[242px] mx-auto w-full'>
                    <div className='mt-4 flex items-center'>
                        <img src="/assets/money_pocket.png" alt="money_pocket" className='w-[22px] h-7 block object-cover' />

                        <div className='ml-4'>
                            <p className='text-[#909090] text-xs f-pretendard-r'>Check result</p>
                            <p className='text-black mt-[1px] text-base f-pretendard-b'>Expected payback based on 30 days</p>
                        </div>
                    </div>

                    <div className='mt-[10px] w-full text-lg f-pretendard-b py-5 rounded-xl bg-[#f0f2f5] text-[#3badf0] text-center'>0.08 USDT</div>
                    <p className='mt-[52px] f-pretendard-b text-xl tracking-[-0.8px] text-[#212529]'>Analyzed and checked it here</p>
                    <div className='mt-4 w-full text-lg f-pretendard-b py-[17px] px-[14px] flex items-center rounded-xl bg-[#f0f2f5]'>
                        <img src="/assets/okx-exchange.png" alt="okx-exchange" className='w-7 h-7 block object-cover' />
                        <p className='ml-[23px] f-pretendard-b text-lg'>OKX</p>
                    </div>

                    <p className='text-[#0798ec] mt-3 text-sm f-pretendard-b'>Analysis of 88 <span className='text-black'>Traders</span> </p>
                    <p className='text-[#0798ec] mt-[2px] text-sm f-pretendard-b'>99.2% <span className='text-black'>matched results</span> </p>

                    <Link href="#">
                        <button className='w-[242px] h-10 mx-auto mt-[60px] rounded-[30px] text-white bg-black text-sm text-center f-pretendard-m'>Sign up for exchange</button>
                    </Link>
                </div>
            </div>


            <div className='py-10 mt-5 bg-white pb-[60px] max-w-[660px] w-[93.6%] mx-auto px-1'>
                <p className='text-center text-[#7c8389] text-xl f-pretendard-sm tracking-[-0.8px]'>If you enjoy a trading on Tetherrock <span className='text-[#0798ec]'>for 6 months, </span> you'll receive </p>
                <p className='text-[28px] slg:text-[32px] mt-[7px] text-center f-pretendard-b'><span className='text-[#0798ec]'>0.48 USDT</span> USDT as payback</p>

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

                <p className='mt-10 text-xl text-center tracking-[-0.8px] f-pretendard-b text-[#212529]'>You can now receive payback <br />
                    on any lost fee in the meantime</p>
            </div>

            <Paidback />
            <ApplyPartner />
            <Footer />
        </>
    );
};

export default Step5;
