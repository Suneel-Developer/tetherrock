"use client"
import React, {useState} from 'react'

const Experincetabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      number: 1,
      title: "테더락에서 제공하는",
      description: "아래 링크로 가입을 해주세요",
      image: "/assets/animation_01.png"
    },
    {
      number: 2,
      title: "테더락에서",
      description: "UID를 입력해 주세요",
      image: "/assets/animation_02.png"
    },
    {
      number: 3,
      title: "평소와 같이",
      description: "트레이딩을 마음껏 즐겨주세요",
      image: "/assets/animation_03.png"
    },
    {
      number: 4,
      title: "트레이딩 이후",
      description: "페이백을 환급 받으세요",
      image: "/assets/animation_04.png"
    }
  ];
  return (
    <section className='mt-[100px] slg:mt-[120px]'>
      <h2 className=' break-keep text-[32px] f-pretendard-b text-center text-white'>테더락에서 <br/>
      최적화된 수수료 페이백 경험을 이용해 보세요</h2>

      <div className='max-w-[660px] lg:max-w-[984px] mx-auto mt-[60px] lg:mt-10 w-[93.6%] gap-5 flex justify-between flex-col lg:flex-row'>
        <div className='w-full lg:w-[50%] bg-[#12171e] rounded-[20px] flex justify-center items-center'>
          {tabs.map((tab, index) => (
            <img
              key={index}
              src={tab.image}
              alt={`animation_0${tab.number}`}
              className={`h-auto md:h-[399px] ${activeTab === index ? 'block' : 'hidden'}`}
            />
          ))}
        </div>

        <div className='w-full lg:w-[50%]'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`bg-[#12171e] rounded-xl flex items-center w-full lg:aspect-[1/.1833333333] min-w-0 px-6 mb-3 lg:mb-4 py-4  ${activeTab === index ? 'border-[#0798ec] border-2' : ''}`}
              type='button'
            >
              <div
                className={`w-6 md:w-9 h-6 md:h-9 object-cover flex justify-center items-center rounded-[50%] f-pretendard-b text-sm md:text-lg ${activeTab === index ? 'bg-[#0798ec] text-[#12171e]' : 'bg-[#191f28] text-[#353e4c]'}`}
              >
                {tab.number}
              </div>
              <div className='ml-3 lg:ml-[9px] flex-1'>
                <p className={`text-xs ${activeTab === index ? 'text-[#909090]' : 'text-[#353e4c]'} f-pretendard-r text-left`}>{tab.title}</p>
                <p className={`mt-[1px] text-sm md:text-base ${activeTab === index ? 'text-white' : 'text-[#353e4c]'} f-pretendard-b text-left`}>{tab.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experincetabs