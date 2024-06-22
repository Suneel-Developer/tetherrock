import Link from 'next/link'
import React from 'react'

const Payback = () => {
    return (
        <section className='mt-[100px] lg:mt-[120px]'>
            <div className='max-w-[989px] w-[93.6%] mx-auto'>
                <h2 className='text-center f-pretendard-b text-[32px] text-white'>어떻게 페이백을 받을 수 있는건가요?</h2>
                <img src="/assets/flow_icon.png" alt="flow_icon" className='w-[159x] slg:w-[240.2px] h-[176px] slg:h-[266px] mt-[60px] mx-auto' />
                <p className='mt-[60px] slg:mt-20 text-2xl f-pretendard-b text-[#7387a5] break-keep text-center'>테더락은 거래소에서 <br />
                    환급받은 레퍼럴 수익을 <br />
                    다시 고객님께 <br />
                    돌려드리는 서비스에요</p>
            </div>
            <img src="/assets/en_pc.png" alt="en_pc" className='mt-[68px] mx-auto max-w-[984px] w-full hidden slg:block' />
            <img src="/assets/en_mo.png" alt="en_mo" className='mt-[68px] mx-auto max-w-[660px] w-full block slg:hidden' />

            <div className='max-w-[989px] w-[93.6%] mx-auto'>
                <h2 className='mt-[100px] slg:mt-[120px] text-center text-[32px] f-pretendard-b text-white'>지금 바로 테더락에서 <br/>
                페이백을 경험해 보세요</h2>
                <Link href="/exchange" className='bg-[#0067ff] rounded-[30px] text-base f-pretendard-b flex justify-center items-center text-center max-w-[526px] mx-auto h-[48px] mt-[54px] text-white'>테더락 제휴 거래소 둘러보기</Link>
            </div>

        </section>
    )
}

export default Payback