import React from 'react'

const Box = () => {
  return (
    <section className='mt-[60px]'>
        <div className='w-[93.6%] max-w-[1000px] mx-auto'>
            <p className='text-2xl mx-auto text-center max-w-[475px] w-full f-pretendard-b break-keep text-[#7387a5]'>How to increase your seed to the upward
            Trader can entrust their fee to Tetherrock and only focus on trading.</p>


            <div className='max-w-[620px] flex justify-center items-center mt-10 gap-3 flex-wrap mx-auto'>
                <div className='bg-[#01478b] px-1 py-[15px] rounded-[30px] w-[156px] h-[200px]'>
                    <img src="/assets/rabbit_circle.png" alt="rabbit_circle" className='w-20 h-20 mx-auto block' />
                    <p className='mt-5 text-sm text-center text-white f-pretendard-r break-keep'>Quick & Easy</p>
                    <p className='mt-[10px] text-lg text-center text-white f-pretendard-b'>Convenience</p>
                </div>
                <div className='bg-[#01478b] px-1 py-[15px] rounded-[30px] w-[156px] h-[200px]'>
                    <img src="/assets/money_circle.png" alt="money_circle" className='w-20 h-20 mx-auto block' />
                    <p className='mt-5 text-sm text-center text-white f-pretendard-r break-keep'>Competitions&Events</p>
                    <p className='mt-[10px] text-lg text-center text-white f-pretendard-b'>Benefits</p>
                </div>
                <div className='bg-[#01478b] px-1 py-[15px] rounded-[30px] w-[156px] h-[200px]'>
                    <img src="/assets/check_circle.png" alt="check_circle" className='w-20 h-20 mx-auto block' />
                    <p className='mt-5 text-sm text-center text-white f-pretendard-r break-keep'>Official Partnership </p>
                    <p className='mt-[10px] text-lg text-center text-white f-pretendard-b'>Trustworthy</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Box