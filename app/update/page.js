"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MembershipModal from '../components/update/MembershipModal'

const Update = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };
    return (
        <>
            <Navbar />

            <section className='pt-20'>
                <div className='max-w-[660px] w-full mx-auto bg-white py-14'></div>
                <div className='mt-5 max-w-[660px] w-full mx-auto bg-white py-10'>
                    <div className='max-w-[580px] w-[93.6%] mx-auto'>
                        <form>
                            <label className='text-black text-2xl f-pretendard-b'>Email</label>
                            <div className='p-5 bg-[#f0f2f5] rounded-xl h-[62px] w-full mt-[10px] text-lg f-pretendard-b text-black text-opacity-60'>suneeldeveloper11@gmail.com</div>


                            <div className='mt-10'>
                                <label className='text-black text-2xl f-pretendard-b'>Password</label>
                                {!isEditing ? (
                                    <button
                                        type='button'
                                        className='mt-[10px] bg-black text-white text-base font-semibold rounded-xl h-[62px] w-full text-center'
                                        onClick={handleEditClick}
                                    >
                                        Edit
                                    </button>
                                ) : (
                                    <div className='mt-[10px] relative'>
                                        <input
                                            type="password"
                                            className='bg-[#f0f2f5] h-[62px] w-full rounded-xl outline-none p-5 flex justify-between items-center text-lg font-semibold'
                                        />
                                        <button type='button' className='bg-black text-white text-base font-semibold rounded-lg top-2 h-[46px] w-[125px] text-center absolute right-[10px]'>
                                            Save
                                        </button>

                                        <div className='flex items-start lg:items-center mt-[6px] flex-col lg:flex-row'>
                                            <div className='flex items-center'>
                                                <img
                                                    src="/assets/validator.png"
                                                    alt="validator"
                                                    className='w-[22px] h-[22px] object-cover block flex-1'
                                                />
                                                <p className='ml-[7px] text-[#aeb0b2] text-xs f-pretendard-m'>
                                                    Enter your password in the range of 8-20
                                                </p>
                                            </div>
                                            <div className='flex items-center mt-[10px] lg:mt-0 lg:ml-[31px]'>
                                                <img
                                                    src="/assets/validator.png"
                                                    alt="validator"
                                                    className='w-[22px] h-[22px] object-cover block flex-1'
                                                />
                                                <p className='ml-[7px] text-[#aeb0b2] text-xs f-pretendard-m'>
                                                    Enter your password with numbers and special characters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className='mt-10'>
                                <label className='text-black text-2xl f-pretendard-b'>Phone Number(optional)</label>

                                <div className='mt-[10px] relative'>
                                    <input type="text" placeholder='Enter your phone number (optional)' className='bg-[#f0f2f5] h-[62px] w-full rounded-xl outline-none p-5 flex justify-between items-center text-lg f-pretendard-b' />
                                    <button className='bg-black text-white text-base font-semibold rounded-lg top-2 h-[46px] w-[125px] text-center absolute right-[10px]' type='button'>Edit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='max-w-[660px] w-full mx-auto bg-white pt-10 pb-[223px] mt-5'>
                    <div className='max-w-[580px] w-[93.6%] mx-auto'>
                        <button className='bg-[#f0f2f5] rounded-xl p-5 w-full h-[62px] text-lg f-pretendard-m text-opacity-60 text-black text-left' onClick={openModal} type='button'>Membership withdrawal</button>
                        {showModal && (
                            <MembershipModal onClose={closeModal} />
                        )}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Update