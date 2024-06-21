import React from 'react'
import Table from './Table'

const Hero = () => {
    return (
        <section className='pt-20 lg:pt-20'>
            <div className='pt-20 lg:pt-[100px]'>
                <div className='max-w-[1000px] w-[93.6%] mx-auto'>
                    <img src="/assets/logo_icon.png" alt="logo" className='w-[33px] lg:w-[59px] h-[33px] lg:h-[58px] block object-cover text-center mx-auto' />
                    <h1 className='f-pretendard-b mt-5 lg:mt-[23px] text-[38px] lg:text-[82px] leading-[1.2767] lg:leading-[1.22] break-keep text-center'>Tetherrock's powerful VIP benefit</h1>
                    <img src="/assets/card.png" alt="card" className='mt-[60px] lg:mt-[68px] mx-auto w-[255px] lg:w-[361px] h-[168px] lg:h-[238px] relative -left-[25px]' />
                    <h2 className='mt-[70px] text-[42px] f-pretendard-b leading-[1.21] text-center hidden lg:block'>
                        You can enjoy more powerful benefits,higher levels <br />
                        The more you trade, the more benefits you get
                        You can trade smarter and more advantageously with Tetherrock</h2>
                </div>
            </div>

            {/* Grade table section  */}

            <div className='max-w-[984px] mx-auto w-[93.6%]'>
                <div className='mt-[100px] lg:mt-[120px]'>
                    <div>
                        <div className='flex items-center justify-between flex-col lg:flex-row gap-6 relative'>
                            <div className='pt-28 lg:pt-20 pb-14 lg:pb-10 h-auto lg:h-[600px] overflow-hidden relative bg-white rounded-xl shadow-thumbnailshadow w-full lg:w-[50%] '>
                                <img src="/assets/thumbnail.jpeg" alt="thumbnail" className='mt-1 w-full object-cover block h-auto lg:h-[388px]' />
                            </div>
                            <div className='px-10 py-32 lg:py-10 relative bg-[#1aa0ee] h-auto lg:h-[600px] rounded-xl shadow-thumbnailshadow w-full lg:w-[50%] flex justify-center items-center'>
                                <p className='text-center text-2xl f-pretendard-sm break-keep text-white'>Tetherrock VIP is a special benefit that is only enjoyable on Tetherrock, <br/>
                                which is automatically applied when you meet a trading level</p>
                            </div>
                        </div>

                    </div>
                </div>

                <Table/>
            </div> 
        </section>
    )
}

export default Hero