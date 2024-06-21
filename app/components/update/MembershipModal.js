// ConnectingExchangeModal.jsx

import Link from 'next/link';
import React from 'react';

const MembershipModal = ({ onClose }) => {


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-150 ease-linear bg-black bg-opacity-50">
      <div className="bg-white rounded-[0.5rem] px-6 py-9 max-w-[412px] w-full mx-auto">
        <div className='flex justify-between items-start gap-2'>
          <p className='text-2xl font-bold text-black flex-1'>All the history of your activity here will be deleted and cannot be recovered</p>
          <button onClick={onClose} type='button'>
            <img src="/assets/close.png" alt="close" className='w-2 h-2 relative top-[15px]' />
          </button>
        </div>

        <div className='mt-[26px]'>
          <p className='text-[#7c8389] text-sm font-medium'>Have you ever had difficulty or dissatisfaction with the service? <br />
            We are always communicating with customers and striving to create better services
          </p>

          <div className='mt-[102px] flex justify-start items-center'>
            <button type='button' className='w-[160px] bg-[#1aa0ee] h-10 rounded-[30px] text-center text-white text-sm font-medium' onClick={onClose}>Back</button>
            <button type='button' className='ml-[22px] w-[160px] border border-[#1aa0ee] h-10 rounded-[30px] text-center text-[#1aa0ee] text-sm font-medium'> Delete account </button>
          </div>

          <div className='mt-[85px] flex items-center'>
            <img src="/assets/cs.png" alt="cs" className='w-7 h-[29px]' />
            <div className='ml-3 text-base font-bold'>
              If you are dissatisfied with the service, please contact us
              <Link href="#" className='border-b border-[#1aa0ee] text-[#1aa0ee] text-base font-bold'> Support</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;
