import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Login = () => {
  return (
    <main>
      <Navbar />
      <div className='pt-[140px] min-h-screen bg-white w-full max-w-[660px] mx-auto'>
        <div className='max-w-[580px] w-[93.6%] mx-auto'>
          <h1 className='text-[32px] f-pretendard-b leading-[1.31] uppercase'>Login</h1>
          <p className='mt-[18px] text-sm f-pretendard-m text-[#7c8389]'>Tetherrock, the most secure global automated payback platform <br />
            <span className='f-pretendard-b text-[#1aa0ee]'>Sign up as a member and enjoy event benefits provided only by Tetherrock</span>
          </p>

          <form method='POST'>
            <div className='mt-9'>
              <input className="p-5 bg-[#f0f2f5] rounded-xl f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="email" type="email" name="userID" placeholder="Enter your Email address" autocomplete="off" required />
              <input className="p-5 bg-[#f0f2f5] rounded-xl mt-4 f-pretendard-b text-lg text-black h-[62px] w-full border-none outline-none" id="password" type="password" name="password" placeholder="Enter your Password" autocomplete="off" required />
            </div>

            <div className='mt-[18px]'>
              <div className='text-sm f-pretendard-m text-[#7c8389]'>
                Forgot your account Information?
                <Link href="#" className='f-pretendard-b text-[#1aa0ee] border-b-2 border-[#1aa0ee]'> Find my email </Link>
                /
                <Link href="#" className='f-pretendard-b text-[#1aa0ee] border-b-2 border-[#1aa0ee]'> Reset password</Link>
              </div>
              <div className='text-sm f-pretendard-m text-[#7c8389] mt-[6px]'>
                Not joined yet?
                <Link href="/signup" className='f-pretendard-b text-[#1aa0ee] border-b-2 border-[#1aa0ee] ml-1'>Join Tetherrock </Link>              </div>
            </div>

            <button className='mt-[60px] w-full h-[42px] flex justify-center items-center text-sm f-pretendard-m text-center text-[#7c8389] rounded-[30px] bg-[#f0f2f5]'>Login</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login