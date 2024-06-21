import React from 'react';

const Step4 = ({ frequency, setFrequency, handleNext }) => {
    const options = ['1 time/day', '1~2 times/day', '2-5 times/day', '5-10 times/day', '+10 times/day'];

    return (
        <div className='pt-10 bg-white pb-[60px] max-w-[660px] w-full mx-auto px-1'>
            <h2 className='text-center text-xl mx-auto f-pretendard-b tracking-[-0.8px]'>See more of the benefits you can enjoy <br /> depending on the number of trading you make</h2>
            <ul className='w-full xxsm:w-[351px] slg:w-[580px] gap-3 md:gap-5 mt-7 mx-auto grid grid-cols-2 slg:grid-cols-3'>
                {options.map((option) => (
                    <li
                        key={option}
                        onClick={() => setFrequency(option)}
                        className={`rounded-xl cursor-pointer h-[62px] flex justify-center items-center text-lg f-pretendard-b bg-[#f0f2f5] border-[3px] ${frequency === option ? 'border-[#3badf0] text-black' : ' border-[#f0f2f5] text-[#aeb0b2]'}`}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-12 slg:mt-[148px]">
                <button
                    onClick={handleNext}
                    className={`w-full slg:w-[351px] h-[42px] flex justify-center items-center text-sm f-pretendard-m rounded-[30px] ${frequency ? 'bg-black text-white' : 'bg-[#f0f2f5] text-[#7c8389]'}`}
                    disabled={!frequency}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step4;
