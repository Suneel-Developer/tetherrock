import React from 'react'

const Hero = ({ handleButtonClick }) => {
    return (
        <section className='block'>
            <div className='pt-10 bg-white slg:pt-[54px] pb-[60px] slg:pb-[84px] max-w-[660px] w-full mx-auto px-1'>
                <img src="/assets/wallet (1).png" alt="wallet" className='w-[138px] slg:w-[168px] h-[108px] slg:h-[110px] relative -left-[15px] block object-cover mx-auto' />
                <h1 className='mt-[10px] slg:mt-0 text-[28px] slg:text-[32px] leading-[1.29] slg:leading-[1.31] f-pretendard-b text-center'>테더락을 이용한다면 <br />
                    얼만큼의 페이백을 받을 수 있을까?</h1>
            </div>

            <div className='mt-5 pt-10 bg-white slg:pt-10 pb-[93px] slg:pb-[60px] max-w-[660px] w-full mx-auto px-1'>
                <p className='text-[22px] leading-[1.4] f-pretendard-b text-center mx-auto tracking-[-0.8px]'>간단한 확인을 통해
                    내 페이백을 조회해 볼 수 있어요</p>

                <ul className='mt-7 mx-auto max-w-[246px] w-full flex flex-col items-start'>
                    <li className='flex items-center justify-center'>
                        <img src="/assets/bybit.png" alt="bybit" className='w-9 h-9' />
                        <div className='ml-[18px]'>
                            <p className='text-[#909090] text-xs f-pretendard-r'>당장 지금부터</p>
                            <p className='mt-[1px] text-base f-pretendard-b'>수수료<span className='text-[#0798ec]'> 30% </span>를 페이백 받고
                                거래소 대회까지 참여 가능해요</p>
                        </div>
                    </li>
                    <li className='flex items-center justify-center mt-10'>
                        <img src="/assets/binance-exchange.png" alt="binance-exchange" className='w-9 h-9' />
                        <div className='ml-[18px]'>
                            <p className='text-[#909090] text-xs f-pretendard-r'>더 높은 혜택</p>
                            <p className='mt-[1px] text-base f-pretendard-b'>수수료 <span className='text-[#0798ec]'> 20%</span> 페이백 가장 똑똑한 거래소 이용 방법</p>
                        </div>
                    </li>
                    <li className='flex items-center justify-center mt-10'>
                        <img src="/assets/bitget-exchange.png" alt="bitget-exchange" className='w-9 h-9' />
                        <div className='ml-[18px]'>
                            <p className='text-[#909090] text-xs f-pretendard-r'>지금이 절호의 찬스</p>
                            <p className='mt-[1px] text-base f-pretendard-b'>수수료  <span className='text-[#0798ec]'>50% </span>페이백 <br />
                                다시는 돌아오지 않을 기회에요</p>
                        </div>
                    </li>
                </ul>

                <div className='flex justify-center'>
                    <button onClick={handleButtonClick} className='mt-[60px] mx-auto rounded-[30px] w-[308px] text-white bg-black h-[42px] text-sm f-pretendard-m text-center'>
                        지금 바로 거래 수수료 환급 받기
                    </button>
                </div>
            </div>


        </section>
    )
}

export default Hero