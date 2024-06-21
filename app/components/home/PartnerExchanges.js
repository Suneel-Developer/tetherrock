import Link from 'next/link'
import React from 'react'

const PartnerExchanges = ({ text }) => {
    const exchanges = [
        {
            name: "Bybit",
            img: "/assets/bybit.png",
            popularity: "Popular🔥",
            tetherrcokPick: "Tetherrcok Pick",
            avgPayback: "881 USDT",
            payback: "70%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
        },
        {
            name: "Binance",
            img: "/assets/binance-exchange.png",
            popularity: "Popular👍",
            tetherrcokPick: "Tetherrcok Pick",
            avgPayback: "415 USDT ",
            payback: "20%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
        },
        {
            name: "Bitget",
            img: "/assets/bitget-exchange.png",
            popularity: "Popular🔥",
            tetherrcokPick: "Tetherrcok Pick",
            avgPayback: "803 USDT ",
            payback: "60%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
        },
        {
            name: "Digifinex",
            img: "/assets/digifinex-exchange.png",
            popularity: "Hot🚀",
            tetherrcokPick: "Tetherrcok Pick",
            avgPayback: "1,803 USDT ",
            payback: "30%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
        },
        {
            name: "Gateio",
            img: "/assets/gateio-exchange.png",
            popularity: "New💰",
            tetherrcokPick: "",
            avgPayback: "1,075 USDT ",
            payback: "90%",
            limitOrder: "0.006%",
            marketOrder: "0.02%",
        },
        {
            name: "Pionex",
            img: "/assets/PIONEX 로고.png",
            popularity: "Grid bot⚡️⚡️",
            tetherrcokPick: "",
            avgPayback: "800 USDT",
            payback: "65%",
            limitOrder: "0.005%",
            marketOrder: "0.018%",
        },
        {
            name: "Bingx",
            img: "/assets/Bingx.png",
            popularity: "Popular🚀",
            tetherrcokPick: "",
            avgPayback: "750 USDT",
            payback: "60%",
            limitOrder: "0.007%",
            marketOrder: "0.022%",
        },
        {
            name: "OKX",
            img: "/assets/okx-exchange.png",
            popularity: "Recommended👍",
            tetherrcokPick: "Tetherrcok Pick",
            avgPayback: "900 USDT",
            payback: "72%",
            limitOrder: "0.0065%",
            marketOrder: "0.02%",
        },
        {
            name: "TABIT",
            img: "/assets/tapbit-exchange.png",
            popularity: "New🔥 💥",
            tetherrcokPick: "Tetherrcok Pick",
            avgPayback: "850 USDT",
            payback: "68%",
            limitOrder: "0.006%",
            marketOrder: "0.019%",
        },
        {
            name: "Weex",
            img: "/assets/weex-exchange.png",
            popularity: "New⚡️",
            tetherrcokPick: "",
            avgPayback: "780 USDT",
            payback: "65%",
            limitOrder: "0.0055%",
            marketOrder: "0.021%",
        }
        
    ];

    return (
        <section className='mt-[60px]'>
            <div className='max-w-[1000px] w-[93.6%] mx-auto mb-20 '>
                <h2 className='text-lg f-pretendard-b'>{text}</h2>
                <p className='text-[#909090] mt-1 text-xs f-pretendard-m'>
                    Exchanges where you can trade securely with Tetherrock is ready for you
                </p>
                <div className='mt-[10px] gap-[11px] grid grid-cols-1 md:grid-cols-2 slg:grid-cols-3'>
                    {exchanges.map((exchange, index) => (
                        <Link href="/" key={index}>
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
                                            Avg Payback <span className='text-[#0798ec]'>{exchange.avgPayback}</span> per user
                                        </p>
                                    </div>
                                </div>
                                <div className='ml-9 mt-3'>
                                    <p className='mt-1 text-sm f-pretendard-m text-center w-fit h-[22px] rounded-[30px] px-4 flex justify-center items-center bg-[#f0f2f5]'>
                                        Payback&nbsp;<span className="text-[#1aa0ee]">{exchange.payback}</span>
                                    </p>
                                    <div className='mt-3 ml-[10px] flex'>
                                        <div>
                                            <p className='text-[#bdbdc1] text-xs font-semibold'>Limit Order(%)</p>
                                            <p className='text-black text-sm font-semibold mt-1'>{exchange.limitOrder}</p>
                                        </div>
                                        <div className='ml-[50px]'>
                                            <p className='text-[#bdbdc1] text-xs font-semibold'>Market Order(%)</p>
                                            <p className='text-black text-sm font-semibold mt-1'>{exchange.marketOrder}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PartnerExchanges;
