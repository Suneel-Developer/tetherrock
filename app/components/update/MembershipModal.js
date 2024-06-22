// ConnectingExchangeModal.jsx

import Link from 'next/link';
import React from 'react';

const MembershipModal = ({ onClose }) => {


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-150 ease-linear bg-black bg-opacity-50">
      <div className="bg-white rounded-[0.5rem] px-6 py-9 max-w-[412px] w-full mx-auto">
        <div className='flex justify-between items-start gap-2'>
          <p className='text-2xl f-pretendard-b text-black flex-1'>지금까지 활동했던 모든 기록이 <br />
            삭제되며 복구할 수 없어요</p>
          <button onClick={onClose} type='button'>
            <img src="/assets/close.png" alt="close" className='w-2 h-2 relative top-[15px]' />
          </button>
        </div>

        <div className='mt-[26px]'>
          <p className='text-[#7c8389] text-sm f-pretendard-m'>
            서비스 이용에 어려움 & 불만족 경험이 있으신가요? <br />
            테더락에서는 항상 고객, 트레이더분들과 함께 소통하며 <br />
            더 좋은 서비스를 만들고자 노력하고 있습니다.
          </p>

          <div className='mt-[102px] flex justify-start items-center'>
            <button type='button' className='w-[160px] bg-[#1aa0ee] h-10 rounded-[30px] text-center text-white text-sm f-pretendard-m' onClick={onClose}>돌아가기</button>
            <button type='button' className='ml-[22px] w-[160px] border border-[#1aa0ee] h-10 rounded-[30px] text-center text-[#1aa0ee] text-sm f-pretendard-m'>  탈퇴하기  </button>
          </div>

          <div className='mt-[85px] flex items-center'>
            <img src="/assets/cs.png" alt="cs" className='w-7 h-[29px]' />
            <div className='ml-3 text-base f-pretendard-b'>
              이용에 불만족 경험이
              있으시면 문의주세요
              <Link href="#" className='border-b border-[#1aa0ee] text-[#1aa0ee] text-base f-pretendard-b'> 문의하기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;
