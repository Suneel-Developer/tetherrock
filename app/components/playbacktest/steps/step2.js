import React from 'react';

const Step2 = ({ seed, setSeed, handleNext }) => {
    return (
        <div className='pt-10 bg-white pb-[60px] max-w-[660px] w-full mx-auto px-1'>
            <h2 className='text-center text-xl mx-auto f-pretendard-b tracking-[-0.8px]'> We will analyze your expected payback amount <br/>
            Just provide a little more and you'll done</h2>
            <div className='max-w-[351px] slg:max-w-[461px] w-full relative mt-7 mx-auto'>
                <img src="/assets/money_pocket.png" alt="money_pocket" className='absolute left-[10px] slg:left-[17px] bottom-[17px] w-[22px] h-7 object-cover block' />
                <input
                    type="text"
                    placeholder="Enter your seeds"
                    value={seed}
                    onChange={(e) => setSeed(e.target.value)}
                    className="py-5 slg:py-0 px-5 slg:px-[114px] placeholder:text-center text-right w-full rounded-[12px] h-[62px] text-lg f-pretendard-b bg-[#f0f2f5] border-none outline-none"
                />
                <div className="py-2 px-[10px] slg:px-[23px] text-[#828282] rounded-[12px] text-lg f-pretendard-b absolute right-[10px] top-2 bg-white">USDT</div>
            </div>

            {/* Next btn  */}
            <div className="flex justify-center mt-[237px]">
                <button
                    onClick={handleNext}
                    className={`w-full slg:w-[351px] h-[42px] flex justify-center items-center text-sm f-pretendard-m rounded-[30px] ${seed ? 'bg-black text-white' : 'bg-[#f0f2f5] text-[#7c8389]'}`}
                    disabled={!seed}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step2;
