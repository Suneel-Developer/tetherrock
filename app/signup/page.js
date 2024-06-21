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
            <h1 className='text-[32px] f-pretendard-b leading-[1.31] uppercase'>Welcome,Traders</h1>
            <p className='mt-[18px] text-sm f-pretendard-m text-black'>We support your trading with unlimited fee payback
              <br />
              Enjoy the benefit of getting a payback on Tetherrock!
            </p>

            <div className='mt-9'>
              <input className="p-5 bg-[#f0f2f5] rounded-xl f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="email" type="email" name="userID" placeholder="Enter your Email address" autocomplete="off" required />
              <input className="p-5 bg-[#f0f2f5] rounded-xl mt-4 f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="password" type="password" name="password" placeholder="Enter your Password" autocomplete="off" required />

              <div className='flex items-start lg:items-center mt-[6px] flex-col lg:flex-row'>
                <div className='flex items-center'>
                  <img src="/assets/validator.png" alt="validator" className='w-[22px] h-[22px] object-cover block flex-1' />
                  <p className='ml-[7px] text-[#aeb0b2] text-xs f-pretendard-m'>Enter your password in the range of 8-20</p>
                </div>
                <div className='flex items-center mt-[10px] lg:mt-0 lg:ml-[31px]'>
                  <img src="/assets/validator.png" alt="validator" className='w-[22px] h-[22px] object-cover block flex-1' />
                  <p className='ml-[7px] text-[#aeb0b2] text-xs f-pretendard-m'>Enter your password with numbers and special characters</p>
                </div>
              </div>

              <input className="p-5 bg-[#f0f2f5] mt-5 rounded-xl f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="number" type="text" pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}' placeholder="Enter your phone number (optional)" autocomplete="off" required />
              <p className='text-[#aeb0b2] f-pretendard-m text-xs mt-[5px] ml-[10px]'>The information entered can be used to find your email.</p>
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
              (Mandatory) I hereby agree to be fully aware of
              <Link href="/terms" className='border-b-2 border-[#1aa0ee] text-[#1aa0ee]'> Terms of Service </Link>
              and
              <Link href="/terms" className='border-b-2 border-[#1aa0ee] text-[#1aa0ee]'> Privacy Policy </Link>
              on Tetherrock
            </div>
          </div>

          <div className='max-w-[580px] w-[93.6%] mx-auto mt-5'>
            <div className='text-sm f-pretendard-m text-[#7c8389]'>
              Already have an account?
              <Link href="/login" className='f-pretendard-b text-[#1aa0ee] border-b-2 border-[#1aa0ee]'> Login </Link>
            </div>

            <button className='mt-[60px] w-full h-[42px] flex justify-center items-center text-sm f-pretendard-m text-center text-[#7c8389] rounded-[30px] bg-[#f0f2f5]'>Join</button>
          </div>
        </form>

      </div>
    </main >
  )
}

export default SignUp