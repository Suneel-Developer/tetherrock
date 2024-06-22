import Link from 'next/link'
import React from 'react'

const PartnerExchanges = ({ text }) => {
    const exchanges = [
        {
            name: "Bybit",
            img: "/assets/bybit.png",
            popularity: "인기 거래소🔥",
            tetherrcokPick: "추천",
            avgPayback: "122 만원 ",
            payback: "70%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
            link: "/bybit-details",
        },
        {
            name: "Binance",
            img: "/assets/binance-exchange.png",
            popularity: "인기거래소👍",
            tetherrcokPick: "추천",
            avgPayback: "415 만원 ",
            payback: "20%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
            link: "/binance-details",
        },
        {
            name: "Bitget",
            img: "/assets/bitget-exchange.png",
            popularity: "인기거래소🔥",
            tetherrcokPick: "추천",
            avgPayback: "803 만원 ",
            payback: "60%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
            link: "/bitget-details",
        },
        {
            name: "Digifinex",
            img: "/assets/digifinex-exchange.png",
            popularity: "추천거래소🚀",
            tetherrcokPick: "추천",
            avgPayback: "1,803 만원 ",
            payback: "30%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
            link: "/digifinex-details",
        },
        {
            name: "Gateio",
            img: "/assets/gateio-exchange.png",
            popularity: "신규거래소💰",
            tetherrcokPick: "",
            avgPayback: "1,075 만원 ",
            payback: "90%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
            link: "/gateio-details",
        },
        {
            name: "Pionex",
            img: "/assets/PIONEX 로고.png",
            popularity: "그리드 봇⚡️⚡️",
            tetherrcokPick: "",
            avgPayback: "800 만원",
            payback: "65%",
            limitOrder: "0.005%",
            marketOrder: "0.018%",
            link: "/pionex-details",
        },
        {
            name: "Bingx",
            img: "/assets/Bingx.png",
            popularity: "인기거래소🚀",
            tetherrcokPick: "",
            avgPayback: "750 만원",
            payback: "60%",
            limitOrder: "0.007%",
            marketOrder: "0.022%",
            link: "/bingx-details",
        },
        {
            name: "OKX",
            img: "/assets/okx-exchange.png",
            popularity: "추천거래소👍",
            tetherrcokPick: "추천",
            avgPayback: "900 만원",
            payback: "72%",
            limitOrder: "0.0065%",
            marketOrder: "0.02%",
            link: "/okx-details",
        },
        {
            name: "TABIT",
            img: "/assets/tapbit-exchange.png",
            popularity: "신규거래소🔥 💥",
            tetherrcokPick: "추천",
            avgPayback: "850 만원",
            payback: "68%",
            limitOrder: "0.006%",
            marketOrder: "0.019%",
            link: "/tabit-details",
        },
        {
            name: "Weex",
            img: "/assets/weex-exchange.png",
            popularity: "신규거래소⚡️ ",
            tetherrcokPick: "",
            avgPayback: "780 만원",
            payback: "65%",
            limitOrder: "0.0055%",
            marketOrder: "0.021%",
            link: "/weex-details",
        },

        {
            name: "Kucoin",
            img: "/assets/kucoin-exchange.png",
            popularity: "임시 중단 ",
            tetherrcokPick: "",
            avgPayback: "133 만원",
            payback: "60%",
            limitOrder: "0.0055%",
            marketOrder: "0.021%",
            link: "#",
            overlay: "😭 꽉찼어요!"
        }
        
    ];

    return (
        <section className='mt-[60px]'>
            <div className='max-w-[1000px] w-[93.6%] mx-auto mb-20 '>
                <h2 className='text-lg f-pretendard-b'>{text}</h2>
                <p className='text-[#909090] mt-1 text-xs f-pretendard-m'>
                테더락과 안전하게 거래할 수 있는 거래소를 준비했어요
                </p>
                <div className='mt-[10px] gap-[11px] grid grid-cols-1 md:grid-cols-2 slg:grid-cols-3'>
                    {exchanges.map((exchange, index) => (
                        <a href={exchange.link} key={index} className="relative">
                            <div className='bg-white pt-[19px] relative px-5 pb-[25px] overflow-hidden flex flex-col xsm:flex-row md:flex-col rounded-xl border border-gray-100'>
                                <div className='block'>
                                    <div className='flex items-start'>
                                        <img src={exchange.img} alt={exchange.name} className='w-7 h-7' />
                                        <div className='flex items-center ml-2'>
                                            <p className='text-lg f-pretendard-b'>{exchange.name}</p>
                                            <p className='text-[#7e7a7a] text-sm ml-[14px] f-pretendard-b'>{exchange.popularity}</p>
                                        </div>
                                        {exchange.tetherrcokPick && (
                                            <p className='absolute top-0 right-0 ml-2 bg-[#1aa0ee] text-white text-xs rounded-tr-xl rounded-bl-xl px-[10px] py-[2px] f-pretendard-r'>{exchange.tetherrcokPick}</p>
                                        )}
                                    </div>
                                    <div className='ml-9'>
                                        <p className='text-[#4a4a4a] f-pretendard-b text-base tracking-[-0.64px]'>
                                        1인 평균  <span className='text-[#0798ec]'>{exchange.avgPayback}</span> 환급
                                        </p>
                                    </div>
                                </div>
                                <div className='ml-9 mt-3'>
                                    <p className='mt-1 text-sm f-pretendard-m text-center w-fit h-[22px] rounded-[30px] px-4 flex justify-center items-center bg-[#f0f2f5]'>
                                    페이백 &nbsp;<span className="text-[#1aa0ee]">{exchange.payback}</span>
                                    </p>
                                    <div className='mt-3 ml-[10px] flex'>
                                        <div>
                                            <p className='text-[#bdbdc1] text-xs font-semibold'>지정가(%)</p>
                                            <p className='text-black text-sm font-semibold mt-1'>{exchange.limitOrder}</p>
                                        </div>
                                        <div className='ml-[50px]'>
                                            <p className='text-[#bdbdc1] text-xs font-semibold'>시장가(%)</p>
                                            <p className='text-black text-sm font-semibold mt-1'>{exchange.marketOrder}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {exchange.overlay && (
                                <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center rounded-xl">
                                    <p className="text-white text-lg f-pretendard-b">{exchange.overlay}</p>
                                </div>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PartnerExchanges;
