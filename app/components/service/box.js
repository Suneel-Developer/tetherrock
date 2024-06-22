import React from 'react'

const Box = () => {
  return (
    <section className='mt-[60px]'>
        <div className='w-[93.6%] max-w-[1000px] mx-auto'>
            <p className='text-2xl mx-auto text-center max-w-[475px] w-full f-pretendard-b break-keep text-[#7387a5]'>시드를 우상향 시키는 방법 <br/>
트레이더님의 수수료는 '테더락'에 맡기고, <br/>
트레이딩에 '집중'하세요.</p>


            <div className='max-w-[620px] flex justify-center items-center mt-10 gap-3 flex-wrap mx-auto'>
                <div className='bg-[#01478b] px-1 py-[15px] rounded-[30px] w-[156px] h-[200px]'>
                    <img src="/assets/rabbit_circle.png" alt="rabbit_circle" className='w-20 h-20 mx-auto block' />
                    <p className='mt-5 text-sm text-center text-white f-pretendard-r break-keep'>공식 파트너쉽 체결</p>
                    <p className='mt-[10px] text-lg text-center text-white f-pretendard-b'>신뢰성</p>
                </div>
                <div className='bg-[#01478b] px-1 py-[15px] rounded-[30px] w-[156px] h-[200px]'>
                    <img src="/assets/money_circle.png" alt="money_circle" className='w-20 h-20 mx-auto block' />
                    <p className='mt-5 text-sm text-center text-white f-pretendard-r break-keep'>테더락의 이벤트와 대회</p>
                    <p className='mt-[10px] text-lg text-center text-white f-pretendard-b'>유용성</p>
                </div>
                <div className='bg-[#01478b] px-1 py-[15px] rounded-[30px] w-[156px] h-[200px]'>
                    <img src="/assets/check_circle.png" alt="check_circle" className='w-20 h-20 mx-auto block' />
                    <p className='mt-5 text-sm text-center text-white f-pretendard-r break-keep'>빠르고 간편한 페이백</p>
                    <p className='mt-[10px] text-lg text-center text-white f-pretendard-b'>편의성</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Box