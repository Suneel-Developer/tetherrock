import React from 'react';

const Step1 = ({ selectedExchange, handleExchangeSelect, handleNext }) => {
    const exchanges = [
        { name: "Bybit", icon: "/assets/bybit.png" },
        { name: "Binance", icon: "/assets/binance-exchange.png" },
        { name: "Bitget", icon: "/assets/bitget-exchange.png" },
        { name: "Digifinex", icon: "/assets/digifinex-exchange.png" },
        { name: "Gateio", icon: "/assets/gateio-exchange.png" },
        { name: "Pionex", icon: "/assets/PIONEX 로고.png" },
        { name: "BingX", icon: "/assets/bingx.png" },
        { name: "OKX", icon: "/assets/okx-exchange.png" },
        { name: "TAPBIT", icon: "/assets/tapbit-exchange.png" },
        { name: "Weex", icon: "/assets/weex-exchange.png" },
        { name: "Kucoin", icon: "/assets/kucoin-exchange.png" }
    ];

    return (
        <div className='pt-10 bg-white pb-[60px] max-w-[660px] w-full mx-auto px-1'>
            <h2 className='text-center text-xl mx-auto f-pretendard-b tracking-[-0.8px]'> You can check it by selecting only the one exchange</h2>
            <ul className='max-w-[352px] slg:max-w-[580px] gap-5 mx-auto mt-7 grid grid-cols-2 slg:grid-cols-3'>
                {exchanges.map((exchange) => (
                    <li
                        key={exchange.name}
                        onClick={() => handleExchangeSelect(exchange)}
                        className={`px-[12px] slg:px-[14px] h-[62px] cursor-pointer rounded-[12px] flex items-center bg-[#f0f2f5] border-[3px] ${selectedExchange === exchange ? 'border-[#3badf0] text-black' : 'border-[#f0f2f5] text-[#aeb0b2]'}`}
                    >
                        <img src={exchange.icon} alt={exchange.name} className='w-[22px] slg:w-7 h-[22px] slg:h-7 block object-cover' />
                        <span className='ml-[18px] text-lg f-pretendard-b'>{exchange.name}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-12">
                <button
                    onClick={handleNext}
                    className={`w-full slg:w-[351px] h-[42px] flex justify-center items-center text-sm f-pretendard-m rounded-[30px] ${selectedExchange ? 'bg-black text-white' : 'bg-[#f0f2f5] text-[#7c8389]'}`}
                    disabled={!selectedExchange}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step1;
