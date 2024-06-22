"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <main>
      <Navbar />
      <div className='pt-[140px] pb-[148px] min-h-screen bg-white w-full max-w-[660px] mx-auto'>
        <form method='POST'>
          <div className='max-w-[580px] w-[93.6%] mx-auto'>
            <h1 className='text-[32px] f-pretendard-b leading-[1.31] uppercase'>회원가입</h1>
            <p className='mt-[18px] text-sm f-pretendard-m text-black'>나가는 돈은 줄이고, 들어오는 돈은 늘리고! <br/>
            수수료 무한 페이백으로 당신의 거래를 지원합니다. 테더락에서 환급의 즐거움을 누려보세요!
            </p>

            <div className='mt-9'>
              <input className="p-5 bg-[#f0f2f5] rounded-xl f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="email" type="email" name="userID" placeholder="이메일을 입력해 주세요" autocomplete="off" required />
              <input className="p-5 bg-[#f0f2f5] rounded-xl mt-4 f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="password" type="password" name="password" placeholder="비밀번호를 입력해 주세요" autocomplete="off" required />

              <div className='flex items-start lg:items-center mt-[6px] flex-col lg:flex-row'>
                <div className='flex items-center'>
                  <img src="/assets/validator.png" alt="validator" className='w-[22px] h-[22px] object-cover block flex-1' />
                  <p className='ml-[7px] text-[#aeb0b2] text-xs f-pretendard-m'>8-20개 사이의 비밀번호를 입력해주세요</p>
                </div>
                <div className='flex items-center mt-[10px] lg:mt-0 lg:ml-[31px]'>
                  <img src="/assets/validator.png" alt="validator" className='w-[22px] h-[22px] object-cover block flex-1' />
                  <p className='ml-[7px] text-[#aeb0b2] text-xs f-pretendard-m'>숫자와 특수문자를 포함하여 입력해주세요</p>
                </div>
              </div>

              <input className="p-5 bg-[#f0f2f5] mt-5 rounded-xl f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="number" type="text" pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}' placeholder="전화번호를 입력해 주세요[선택]" autocomplete="off" required />
              <p className='text-[#aeb0b2] f-pretendard-m text-xs mt-[5px] ml-[10px]'>이메일 찾는데 활용될 수 있습니다.</p>
              <input className="p-5 bg-[#f0f2f5] rounded-xl mt-4 f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="password" type="text" name="number" placeholder="Referral Code(Optional)" autocomplete="off" required />
            </div>
          </div>

          <div className='h-5 w-full bg-[#f7f7f7] mt-[60px]'>
          </div>

          <div className='bg-[#f7f7f7] mt-10 pl-4 pr-[29px] rounded-xl flex items-start py-4 max-w-[580px] w-[93.6%] mx-auto'>
            <label>
              <input
                type="checkbox"
                className='w-[22px] h-[22px] bg-transparent'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </label>
            <div className={`ml-[18px] relative -top-[3px] text-base f-pretendard-b break-keep ${isChecked ? 'text-black' : 'text-[#aeb0b2]'}`}>
            (필수) 테더락의  
              <Link href="/terms" className='border-b-2 border-[#1aa0ee] text-[#1aa0ee]'> 이용약관 </Link>
              및 
              <Link href="/terms" className='border-b-2 border-[#1aa0ee] text-[#1aa0ee]'> 개인정보 보호정책 </Link>
              을 숙지 동의합니다
            </div>
          </div>

          <div className='max-w-[580px] w-[93.6%] mx-auto mt-5'>
            <div className='text-sm f-pretendard-m text-[#7c8389]'>
            혹시 테더락에 가입하신 적이 있으신가요? 
              <Link href="/login" className='f-pretendard-b text-[#1aa0ee] border-b-2 border-[#1aa0ee]'> 로그인 </Link>
            </div>

            <button className='mt-[60px] w-full h-[42px] flex justify-center items-center text-sm f-pretendard-m text-center text-[#7c8389] rounded-[30px] bg-[#f0f2f5]'>회원가입</button>
          </div>
        </form>

      </div>
    </main >
  )
}

export default SignUp