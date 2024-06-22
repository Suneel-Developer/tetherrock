import React from 'react'

const Membership = () => {
  return (
    <section className='max-h-[315px] h-full lg:max-h-[420px] w-full'>
        <div className='hidden lg:block w-full h-full'>
            <img src="/assets/membership1.png" alt="Membership" className='w-full h-full object-cover block' />
        </div>
        <div className='block lg:hidden w-full h-full'>
            <img src="/assets/membership2.png" alt="Membership" className='w-full h-full object-cover block' />
        </div>
    </section>
  )
}

export default Membership