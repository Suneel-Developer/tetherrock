"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const Weex = () => {
  const [activeTab, setActiveTab] = useState('info');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Navbar />

      <section className='pt-[110px] pb-10 max-w-[660px] mx-auto bg-white'>
        <div className='w-[88.2667%] max-w-[460px] mx-auto'>
          <img src="/assets/weex-exchange.png" alt="weex" className='w-20 h-20 mx-auto rounded-full' />
          <h1 className='text-2xl text-black text-center f-pretendard-b mt-[10px]'>Weex</h1>
          <p className='text-[#7e7a7a] text-center f-pretendard-b mt-[10px] text-base'>신규거래소⚡️</p>
          <p className='bg-[#f0f2f5] text-sm f-pretendard-m mx-auto mt-[20px] w-fit px-[10px] rounded-[30px] py-1'>페이백 <span className='text-[#1aa0ee]'> 70%</span></p>
          <p className='bg-[#f0f2f5] text-sm f-pretendard-m mx-auto mt-[10px] w-fit px-[10px] rounded-[30px] py-1'>함께 하는 회원   <span className='text-[#1aa0ee]'> 24명</span></p>


          <div className='mt-[50px]'>
            <div className='w-full h-[2px] bg-[#f0f2f5] relative'>
              <div className='h-full bg-[#1aa0ee] w-[20%]'></div>
              <div className='text-xs f-pretendard-m text-[#7c8389] bg-[#d9d9d9] w-fit rounded-[30px] px-2 absolute left-[40px] top-0 bottom-0 my-auto right-auto h-[25px] flex justify-center items-center'>
                마감까지 34%
              </div>
            </div>
          </div>

          <div className='mt-7 flex justify-between'>
            <div>
              <p className='text-xs f-pretendard-m text-center text-[#7c8389]'>지정가(%)</p>
              <div className='mt-[6px] flex items-center'>
                <p className='text-[#bdbdc1] line-through f-pretendard-sm text-sm tracking-[-0.56px]'>0.02%</p>
                <p className='text-[#0798ec] f-pretendard-sm text-sm tracking-[-0.56px] ml-5'>0.01%</p>
              </div>
            </div>
            <div>
              <p className='text-xs f-pretendard-m text-center text-[#7c8389]'>시장가(%)</p>
              <div className='mt-[6px] flex items-center'>
                <p className='text-[#bdbdc1] line-through f-pretendard-sm text-sm tracking-[-0.56px]'>0.05%</p>
                <p className='text-[#0798ec] f-pretendard-sm text-sm tracking-[-0.56px] ml-5'>0.025%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-5 pb-20 max-w-[660px] mx-auto bg-white mt-5'>

        <p className='text-center text-xl f-pretendard-b text-[#4a4a4a]'>1인 평균 <span className='text-[#1aa0ee]'>127만원 </span>환급</p>
        <ul className='mt-10 flex justify-center items-center bg-white border-b border-[#f0f2f5]'>
          <li>
            <button type='button' onClick={() => handleTabClick('info')} className={`pb-[5px] text-base f-pretendard-b text-[#7c8389] ${activeTab === 'info' ? 'border-b-2 border-black text-black' : ''}`}>정보</button>
          </li>
          <li className='mx-[50px] slg:mx-[100px]'>
            <button type='button' onClick={() => handleTabClick('way')} className={`pb-[5px] text-base f-pretendard-b text-[#7c8389] ${activeTab === 'way' ? 'border-b-2 border-black text-black' : ''}`}>정보</button>
          </li>
          <li className='mr-[50px] slg:mr-[100px]'>
            <button type='button' onClick={() => handleTabClick('compitition')} className={`pb-[5px] text-base f-pretendard-b text-[#7c8389] ${activeTab === 'compitition' ? 'border-b-2 border-black text-black' : ''}`}>정보</button>
          </li>
          <li>
            <button type='button' onClick={() => handleTabClick('event')} className={`pb-[5px] text-base f-pretendard-b text-[#7c8389] ${activeTab === 'event' ? 'border-b-2 border-black text-black' : ''}`} >정보</button>
          </li>
        </ul>

        <div className='w-[93.6%] mx-auto pt-[38px]'>
          {activeTab === 'info' && (
            <div className='max-w-[263px] mx-auto w-full'>
              <img src="/assets/cart.png" alt="cart" className='w-[116px] h-[110px] mx-auto block' />
              <h1 className='text-center text-xl f-pretendard-b'>높은 페이백 조건을 확인하고 <br />
                수수료 부담을 줄여요</h1>

              <div className='mt-7 flex items-center'>
                <img src="/assets/money_pocket.png" alt="money_pocket" className='w-[22px] h-7 block' />
                <div className='ml-[15px]'>
                  <p className='text-xs text-[#909090] f-pretendard-r'>당장 이번 거래부터</p>
                  <p className='text-base text-black f-pretendard-b mt-[1px]'>수수료 <span className='text-[#0789ec]'> 70% </span> 를 페이백 해드려요</p>
                </div>
              </div>
              <div className='mt-7 flex items-center'>
                <img src="/assets/thumb.png" alt="thumb" className='w-[22px] h-7 block' />
                <div className='ml-[15px]'>
                  <p className='text-xs text-[#909090] f-pretendard-r'>보시는 혜택</p>
                  <p className='text-base text-black f-pretendard-b mt-[1px]'><span className='text-[#0789ec]'> 최상위  </span>  와 유사한 혜택이에요</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'way' && (
            <div className='max-w-[263px] mx-auto w-full'>
              <ul>
                <li>
                  <div className='flex items-center'>
                    <div className='flex items-center justify-center bg-[#f0f2f5] rounded-full text-[#3badf0] text-base f-pretendard-b w-7 h-7 '>1</div>
                    <div className='ml-[13px] flex-1'>
                      <p className='text-xs text-[#909090] f-pretendard-r'>테더락에서 제공하는</p>
                      <p className='text-base mt-[1px] text-black f-pretendard-b'>아래 링크로 가입을 해주세요</p>
                    </div>
                  </div>
                  <div className='mt-[14px] flex items-center p-[14px] bg-[#f0f2f5] rounded-xl justify-between'>
                    <div className='flex items-center'>
                      <img src="/assets/weex-exchange.png" alt="weex" className='w-7 h-7 block object-cover' />
                      <p className='ml-2 text-black text-lg f-pretendard-b'>Weex</p>
                    </div>

                    <Link href="#" className='bg-black rounded-[30px] h-[34px] w-[118px] text-sm f-pretendard-m text-white text-center flex items-center justify-center'>링크 이동하기</Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center mt-[18px]'>
                    <div className='flex items-center justify-center bg-[#f0f2f5] rounded-full text-[#3badf0] text-base f-pretendard-b w-7 h-7 '>2</div>
                    <div className='ml-[13px] flex-1'>
                      <p className='text-xs text-[#909090] f-pretendard-r'>인증 절차</p>
                      <p className='text-base mt-[1px] text-black f-pretendard-b'>WEEX에서 KYC를 인증해주세요</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='flex items-center mt-[18px]'>
                    <div className='flex items-center justify-center bg-[#f0f2f5] rounded-full text-[#3badf0] text-base f-pretendard-b w-7 h-7 '>3</div>
                    <div className='ml-[13px] flex-1'>
                      <p className='text-xs text-[#909090] f-pretendard-r'>평소와 같이</p>
                      <p className='text-base mt-[1px] text-black f-pretendard-b'>거래를 진행해주세요</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='flex items-center mt-[18px]'>
                    <div className='flex items-center justify-center bg-[#f0f2f5] rounded-full text-[#3badf0] text-base f-pretendard-b w-7 h-7 '>4</div>
                    <div className='ml-[13px] flex-1'>
                      <p className='text-xs text-[#909090] f-pretendard-r'>그리고 테더락에게</p>
                      <p className='text-base mt-[1px] text-black f-pretendard-b'>환급 신청을 해주시면 끝!</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {activeTab === 'compitition' && (
            <div></div>
          )}
          {activeTab === 'event' && (
            <div className='w-[93%] mx-auto grid grid-cols-2 slg:grid-cols-3 gap-2'>

            </div>
          )}
        </div>
      </section>

      <section className='pt-10 pb-[60px] max-w-[660px] mx-auto bg-white mt-5'>
        <div className=''>
          <img src="/assets/warning.png" alt="거래소 아이콘 로고" className='w-6 mx-auto' />
          <p className='text-2xl f-pretendard-b text-center text-[#424242] mt-[38px]'>혹시 페이백 조회, <span className='text-[#ff0000]'> 확인 </span>이 안되시나요?</p>


          <div className='w-[88.2667%] max-w-[460px] mx-auto'>
            <div className='text-[#424242] text-sm f-pretendard-b mt-14'>
              <b className='text-lg'>Weex </b>
              거래소 가입을 했는데 테더락 플랫폼에서
              <b className='text-[#ff9c00] text-lg'> UID </b>
              조회가 안된다면
            </div>
            <div className='text-[#424242] text-sm f-pretendard-b mt-3'>
              테더락 가입 코드를 통해 정상적 가입을 하셨는지 꼭 확인해주세요.
            </div>
            <div className='text-[#424242] text-sm f-pretendard-b mt-3'>
              연동 신청후 1시간 이내에 조회가 가능해요.
            </div>

            <div className='text-[#424242] text-sm f-pretendard-b mt-12'>
              플랫폼에서 조회가 안되더라도 가입한 이후 시점의 모든 거래
            </div>

            <div className='text-[#424242] text-sm f-pretendard-b mt-3'>
              내역은 페이백 대상이니 걱정하지 않으셔도 돼요.
            </div>
            <div className='text-[#424242] text-sm f-pretendard-b mt-12'>
              페이백 대상 : 현물,선물거래 / USDT 거래쌍
            </div>

            <div className='text-[#424242] text-sm f-pretendard-b mt-3'>
              Weex 일반 가입 계정 : 지정가 0.02% / 시장가 0.06%
            </div>
            <div className='text-[#085294] text-sm f-pretendard-b mt-3'>
              테더락을 통해 가입 계정 : 지정가 0.006% / 시장가 0.018%
            </div>

            <div className='text-[#424242] text-sm f-pretendard-b mt-12'>
              예시)
            </div>
            <div className='text-[#424242] text-sm f-pretendard-b mt-3'>
              일반 계정 : 수수료 100usdt
            </div>
            <div className='text-[#424242] text-sm f-pretendard-b mt-3'>
              테더락 회원계정 :  선물 70% 페이백
            </div>
            <div className='text-[#424242] text-sm f-pretendard-b mt-3'>
              페이백 금액 100usdt의 70%인 70usdt 페이백
            </div>



            <div className='text-[#424242] text-sm f-pretendard-b mt-12'>
            테더락 플랫폼에 최초 1회 UID 연동후
            </div>
            <div className='text-[#424242] text-sm f-pretendard-b mt-3'>
            70% 페이백 금액 거래소에서 자동 지급
            </div>

          </div>

          <div className='w-[93%] mx-auto pt-20'>
            <div className='flex justify-center items-center w-full'>
              <img src="/assets/cs.png" alt="cs" className='w-7 h-[29px] block object-cover' />
              <div className='ml-[13px]'>
                <p className='text-[#909090] text-center text-xs f-pretendard-r'>24시간 언제든 편안하게</p>
                <p className='text-base f-pretendard-b text-center mt-[1px]'>궁금하신 내용이 있으시면 문의주세요</p>
              </div>
            </div>

            <p className='mt-10 text-[#82879b] text-center f-pretendard-m text-[13px]'>이미 Weex 계정이 있으신가요?</p>

            <div className='mt-[10px] flex justify-center items-center gap-[10px]'>
              <button className='flex-1 text-[#1aa0ee] bg-[#e9f3f3] py-[19px] px-1 text-[15px] rounded-xl f-pretendard-b text-center'>네, 기존 회원이에요</button>
              <button className='flex-1 text-white bg-[#1aa0ee] py-[19px] px-1 text-[15px] rounded-xl f-pretendard-b text-center'>아니요</button>
            </div>
          </div>


        </div>
      </section>
      <Footer />
    </>
  )
}

export default Weex