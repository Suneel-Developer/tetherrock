import React from 'react'

const Withdrawalhistory = () => {
    return (
        <section className='mt-5 max-w-[660px] w-full mx-auto bg-white relative px-0 slg:px-6 pt-10 pb-[60px] slg:pb-10'>
            <div className='max-w-[660px] w-[93.6%] mx-auto flex justify-center flex-col'>
                <p className='text-2xl f-pretendard-b text-black text-left'>출금 내역<span className='ml-[10px] text-xl'>0.00 USDT</span></p>
                <img src="/assets/wallet (1).png" alt="wallet" className='absolute left-1/2 -translate-x-[60%] top-[75px] mt-[40px] mx-auto w-[314px] h-[180px] block object-cover' />
                <p className='mt-[247px] text-xl f-pretendard-b tracking-[-0.8px] text-center text-black'>아직은 출금 내역이 없어요</p>
                <p className='mt-[10px] text-sm f-pretendard-m text-center mx-auto'>거래소 연동 후 출금 신청해 주세요 <br/>
                환급액 업데이트는 거래소마다 상이합니다</p>

            </div>
        </section>
    )
}

export default Withdrawalhistory