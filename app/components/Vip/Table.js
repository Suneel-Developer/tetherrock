import React from 'react'

const Table = () => {
    return (
        <section className='mt-11'>
            <ul className='pt-9 slg:pt-[26px] pr-3 slg:pr-8 pb-[14px] slg:pb-[6px] pl-3 slg:pl-[26px] rounded-xl bg-white shadow-thumbnailshadow'>
                <li className='pl-[22px] slg:pl-[90px] pr-[25px] slg:pr-[121px]'>
                    <div className='pb-[18px] slg:pb-[9px] flex justify-between items-center gap-2'>
                        <p className='text-lg slg:text-xl f-pretendard-b text-center'>등급</p>
                        <p className='text-lg slg:text-xl f-pretendard-b text-center'>VIP 조건</p>
                        <p className='text-lg slg:text-xl f-pretendard-b text-center'>혜택</p>
                    </div>
                </li>

                <li className='slg:pl-[64px] slg:pr-[57px] pt-[21px] pb-5 border-t border-gray-300'>
                    <div className='flex justify-between items-center'>
                        <p className='w-[45px] slg:w-[90px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>VIP 1</p>
                        <p className='w-auto slg:w-[210px] relative slg:left-[23px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'> 10,000 USDT</p>
                        <p className='w-auto slg:w-[165px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>
                            <span className='border-b-2 border-[#1aa0ee] f-pretendard-b text-[#1aa0ee] mr-1'>1%</span>
                            상향
                        </p>
                    </div>
                </li>
                <li className='slg:pl-[64px] slg:pr-[57px] pt-[21px] pb-5 border-t border-gray-300'>
                    <div className='flex justify-between items-center'>
                        <p className='w-[45px] slg:w-[90px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>VIP 2</p>
                        <p className='w-auto slg:w-[210px] relative slg:left-[23px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'> 30,000 USDT</p>
                        <p className='w-auto slg:w-[165px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>
                            <span className='border-b-2 border-[#1aa0ee] f-pretendard-b text-[#1aa0ee] mr-1'>1.5%</span>
                            상향
                        </p>
                    </div>
                </li>
                <li className='slg:pl-[64px] slg:pr-[57px] pt-[21px] pb-5 border-t border-gray-300'>
                    <div className='flex justify-between items-center'>
                        <p className='w-[45px] slg:w-[90px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>VIP 3</p>
                        <p className='w-auto slg:w-[210px] relative slg:left-[23px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'> 50,000 USDT</p>
                        <p className='w-auto slg:w-[165px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>
                            <span className='border-b-2 border-[#1aa0ee] f-pretendard-b text-[#1aa0ee] mr-1'>2%</span>
                            상향
                        </p>
                    </div>
                </li>

                <li className='slg:pl-[64px] slg:pr-[57px] pt-[21px] pb-5 border-t border-gray-300'>
                    <div className='flex justify-between items-center'>
                        <p className='w-[45px] slg:w-[90px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>VIP 4</p>
                        <p className='w-auto slg:w-[210px] relative slg:left-[23px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'> 100,000 USDT</p>
                        <p className='w-auto slg:w-[165px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>
                            <span className='border-b-2 border-[#1aa0ee] f-pretendard-b text-[#1aa0ee] mr-1'>2.5%</span>
                            상향
                        </p>
                    </div>
                </li>

                <li className='slg:pl-[64px] slg:pr-[57px] pt-[21px] pb-5 border-t border-gray-300'>
                    <div className='flex justify-between items-center'>
                        <p className='w-[45px] slg:w-[90px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>VIP 5</p>
                        <p className='w-auto slg:w-[210px] relative slg:left-[23px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'> 200,000 USDT</p>
                        <p className='w-auto slg:w-[165px] text-sm slg:text-lg tracking-[-0.5px] f-pretendard-m whitespace-nowrap text-center'>
                            <span className='border-b-2 border-[#1aa0ee] f-pretendard-b text-[#1aa0ee] mr-1'>3%</span>
                            상향
                        </p>
                    </div>
                </li>
                
                
            </ul>
        </section>
    )
}

export default Table