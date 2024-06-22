import React from 'react'

const Membership = () => {
  return (
    <section className='max-h-[315px] h-full lg:max-h-[420px] w-full'>
        <div className='hidden lg:block w-full h-full'>
            <img src="/assets/1715274256230배너2-pc 영문.png" alt="Membership" className='w-full h-full object-cover block' />
        </div>
        <div className='block lg:hidden w-full h-full'>
            <img src="/assets/1715274256176배너2-모바일 영문.png" alt="Membership" className='w-full h-full object-cover block' />
        </div>
    </section>
  )
}

export default Membership