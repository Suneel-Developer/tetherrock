import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Login = () => {
  return (
    <main>
      <Navbar />
      <div className='pt-[140px] min-h-screen bg-white w-full max-w-[660px] mx-auto'>
        <div className='max-w-[580px] w-[93.6%] mx-auto'>
          <h1 className='text-[32px] f-pretendard-b leading-[1.31] uppercase'>로그인</h1>
          <p className='mt-[18px] text-sm f-pretendard-m text-[#7c8389]'>가장 안전한 글로벌 페이백 플랫폼 테더락입니다 <br />
            회원가입하고&nbsp;
            <span className='f-pretendard-b text-[#1aa0ee]'>테더락만의 이벤트 혜택까지 만나보세요</span>
          </p>

          <form method='POST'>
            <div className='mt-9'>
              <input className="p-5 bg-[#f0f2f5] rounded-xl f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="email" type="email" name="userID" placeholder="이메일을 입력해 주세요" autocomplete="off" required />
              <input className="p-5 bg-[#f0f2f5] rounded-xl mt-4 f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="password" type="password" name="password" placeholder="비밀번호를 입력해 주세요" autocomplete="off" required />
            </div>

            <div className='mt-[18px]'>
              <div className='text-sm f-pretendard-m text-[#7c8389]'>
                계정정보를 잊어버리셨나요?
                <Link href="#" className='f-pretendard-b text-[#1aa0ee] border-b-2 border-[#1aa0ee]'> 이메일 찾기  </Link>
                /
                <Link href="#" className='f-pretendard-b text-[#1aa0ee] border-b-2 border-[#1aa0ee]'> 비밀번호 찾기</Link>
              </div>
              <div className='text-sm f-pretendard-m text-[#7c8389] mt-[6px]'>
                아직 가입을 안하셨나요?
                <Link href="/signup" className='f-pretendard-b text-[#1aa0ee] border-b-2 border-[#1aa0ee] ml-1'>테더락에 가입하기  </Link>              </div>
            </div>

            <button className='mt-[60px] w-full h-[42px] flex justify-center items-center text-sm f-pretendard-m text-center text-[#7c8389] rounded-[30px] bg-[#f0f2f5]'>로그인</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login