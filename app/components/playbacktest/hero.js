import React from 'react'

const Hero = ({ handleButtonClick }) => {
    return (
        <section className='block'>
            <div className='pt-10 bg-white slg:pt-[54px] pb-[60px] slg:pb-[84px] max-w-[660px] w-full mx-auto px-1'>
                <img src="/assets/wallet (1).png" alt="wallet" className='w-[138px] slg:w-[168px] h-[108px] slg:h-[110px] relative -left-[15px] block object-cover mx-auto' />
                <h1 className='mt-[10px] slg:mt-0 text-[28px] slg:text-[32px] leading-[1.29] slg:leading-[1.31] f-pretendard-b text-center'>If I use Tetherrock, <br />
                    how much payback will I get?</h1>
            </div>

            <div className='mt-5 pt-10 bg-white slg:pt-10 pb-[93px] slg:pb-[60px] max-w-[660px] w-full mx-auto px-1'>
                <p className='text-[22px] leading-[1.4] f-pretendard-b text-center mx-auto tracking-[-0.8px]'>With a simple check, you can view your payback</p>

                <ul className='mt-7 mx-auto max-w-[246px] w-full flex flex-col items-start'>
                    <li className='flex items-center justify-center'>
                        <img src="/assets/bybit.png" alt="bybit" className='w-9 h-9' />
                        <div className='ml-[18px]'>
                            <p className='text-[#909090] text-xs f-pretendard-r'>From now on</p>
                            <p className='mt-[1px] text-base f-pretendard-b'>You can get the  <span className='text-[#0798ec]'>30%</span>fee payback
                                Even participate in exchange competitions</p>
                        </div>
                    </li>
                    <li className='flex items-center justify-center mt-10'>
                        <img src="/assets/binance-exchange.png" alt="binance-exchange" className='w-9 h-9' />
                        <div className='ml-[18px]'>
                            <p className='text-[#909090] text-xs f-pretendard-r'>Higher benefits</p>
                            <p className='mt-[1px] text-base f-pretendard-b'>Get <span className='text-[#0798ec]'>20%</span> fee payback  <br />
                                The smartest way to use the exchange</p>
                        </div>
                    </li>
                    <li className='flex items-center justify-center mt-10'>
                        <img src="/assets/bitget-exchange.png" alt="bitget-exchange" className='w-9 h-9' />
                        <div className='ml-[18px]'>
                            <p className='text-[#909090] text-xs f-pretendard-r'>Now is the perfect time</p>
                            <p className='mt-[1px] text-base f-pretendard-b'>Get <span className='text-[#0798ec]'>50%</span>fee payback <br />
                                It would be the chance of a lifetime</p>
                        </div>
                    </li>
                </ul>

                <div className='flex justify-center'>
                    <button onClick={handleButtonClick} className='mt-[60px] mx-auto rounded-[30px] w-[308px] text-white bg-black h-[42px] text-sm f-pretendard-m text-center'>
                        Check Your Estimated Payback
                    </button>
                </div>
            </div>


        </section>
    )
}

export default Hero