import React from 'react';

const Step3 = ({ leverage, setLeverage, handleNext }) => {
    return (
        <div className='pt-10 bg-white pb-[60px] max-w-[660px] w-full mx-auto px-1'>
            <h2 className='text-center text-xl mx-auto f-pretendard-b tracking-[-0.8px]'>  입력은 1 ~ 125 안에서 <br />
                작성해 주세요</h2>
            <input
                type="text"
                placeholder="레버리지를 입력해 주세요"
                max={125}
                min={1}
                autoComplete='off'
                value={leverage}
                onChange={(e) => setLeverage(e.target.value)}
                className="w-full xxsm:w-[351px] slg:w-[464px] mt-7 outline-none mx-auto block text-center p-5 h-[62px] bg-[#f0f2f5] text-black text-lg f-pretendard-b rounded-xl"
            />
            <div className="flex justify-center mt-[237px]">
                <button
                    onClick={handleNext}
                    className={`w-full slg:w-[351px] h-[42px] flex justify-center items-center text-sm f-pretendard-m rounded-[30px] ${leverage ? 'bg-black text-white' : 'bg-[#f0f2f5] text-[#7c8389]'}`}
                    disabled={!leverage}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default Step3;
