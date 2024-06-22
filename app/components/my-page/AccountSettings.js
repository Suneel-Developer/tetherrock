import Link from 'next/link'
import React from 'react'

const AccountSettings = () => {
    return (
        <section className='mt-5 max-w-[660px] w-full mx-auto bg-white relative px-0 slg:px-6 pt-10 pb-[60px] slg:pb-10'>
            <div className='max-w-[660px] w-[93.6%] mx-auto flex justify-center flex-col'>
                <p className='text-2xl f-pretendard-b text-black text-left'>계정 설정</p>

                <Link href="/update" className='mt-[38px] rounded-xl bg-[#f0f2f5] p-5 w-full text-lg f-pretendard-m text-left'>회원정보 수정</Link>
                <Link href="/terms" className='mt-[10px] rounded-xl bg-[#f0f2f5] p-5 w-full text-lg f-pretendard-m text-left'>서비스 약관</Link>
                <button className='mt-[10px] rounded-xl bg-[#f0f2f5] p-5 w-full text-lg f-pretendard-m text-left'>로그아웃</button>
                <Link href="/inquiry" className='mt-[10px] rounded-xl bg-[#f0f2f5] p-5 w-full text-lg f-pretendard-m text-left'>문의게시판</Link>
            </div>
        </section>
    )
}

export default AccountSettings