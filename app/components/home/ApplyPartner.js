import Link from 'next/link'
import React from 'react'

const ApplyPartner = () => {
    return (
        <section>
            <div className='py-[38px] bg-[#f0f6f8]'>
                <div className='max-w-[660px] mx-auto flex justify-between flex-col slg:flex-row items-center'>
                    <div>
                        <p className='text-[#4b4b4b] text-base f-pretendard-m text-center slg:text-start'>테더락과 함께할 수 있는</p>
                        <h2 className='text-black f-pretendard-b mt-[1px] text-2xl text-center slg:text-start'>파트너로 활동해 보세요</h2>
                        <button className='w-[130px] h-10 text-sm f-pretendard-m text-center mt-7 rounded-[30px] text-white bg-black hidden slg:block'>파트너 신청하기</button>
                    </div>

                    <div className='mt-5 slg:mt-0 flex flex-col justify-center items-center'>
                        <img src="/assets/partner.png" alt="" className='w-[230px] h-[238px] relative -left-[30px]' />
                    <button className='w-[130px] h-10 text-sm f-pretendard-m text-center rounded-[30px] text-white bg-black block slg:hidden'>파트너 신청하기</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApplyPartner