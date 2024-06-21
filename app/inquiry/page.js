import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Inquiry = () => {
    return (
        <>
            <Navbar />

            <section className='pb-[60px] pt-10 slg:pt-20'>
                <div className='mt-20 max-w-[660px] slg:max-w-[1000px] mx-auto w-[93.6%]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-black f-pretendard-b text-xl'>Inquiry Bulletin Board</h1>
                            <Link href="#" className='h-auto text-center w-fit p-3 rounded-xl bg-[#f0f2f5] text-lg f-pretendard-b flex justify-center items-center'>Write</Link>
                    </div>

                    <ul className='grid grid-cols-1 md:grid-cols-2 slg:grid-cols-3 gap-1 md:gap-3 mt-5'>
                        <li className='bg-white border border-[#e0e0e0] cursor-pointer rounded-xl px-5 pt-3 md:pt-[19px] pb-3 slg:pb-[22px] flex justify-between flex-col'>
                            <p className='text-lg f-pretendard-b mt-[10px] w-[90%] overflow-hidden text-ellipsis display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical break-all'>Lorem Ipsum is simply dummy text</p>
                            <p className='text-[#7c8389] text-right text-xs f-pretendard-sm mt-3'>2024-06-21</p>
                        </li>
                        <li className='bg-white border border-[#e0e0e0] cursor-pointer rounded-xl px-5 pt-3 md:pt-[19px] pb-3 slg:pb-[22px] flex justify-between flex-col'>
                            <p className='text-lg f-pretendard-b mt-[10px] w-[90%] overflow-hidden text-ellipsis display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical break-all'>Lorem Ipsum is simply</p>
                            <p className='text-[#7c8389] text-right text-xs f-pretendard-sm mt-3'>2024-06-21</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Inquiry