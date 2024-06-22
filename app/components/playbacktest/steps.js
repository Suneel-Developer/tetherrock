"use client"
import React, { useState } from 'react';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';
import Step5 from './steps/step5';

const stepTitles = [
    "확인하고 싶은 거래소를 선택해 주세요",
    "진입 시드는 얼마나 되시나요?",
    "평균 레버리지는 어느 정도 사용하고 계신가요?",
    "평소에 매매는 어느 정도 하시는 편이신가요?",
    "받으실 수 있는 페이백을 테더락이 확인했어요"
];

const Steps = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedExchange, setSelectedExchange] = useState(null);
    const [seed, setSeed] = useState('');
    const [leverage, setLeverage] = useState('');
    const [frequency, setFrequency] = useState('');

    const handleNext = () => {
        if (currentStep < stepTitles.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleExchangeSelect = (exchange) => {
        setSelectedExchange(exchange);
    };

    const getStepClass = (step) => {
        if (step === currentStep) {
            return 'bg-[#3badf0] text-[#f0f2f5]';
        }
        if (step < currentStep) {
            return 'bg-[#3badf0] text-[#f0f2f5]';
        }
        return 'bg-[#f0f2f5] text-[#3badf0]';
    };

    const getTextClass = (step) => {
        if (step === currentStep) {
            return 'text-black';
        }
        if (step < currentStep) {
            return 'text-black';
        }
        return 'text-[#aeb0b2]';
    };

    return (
        <div>
            <div className="pt-10 pb-12 bg-white max-w-[660px] mx-auto w-full mb-5">
                <ul className="flex items-start justify-center mx-auto">
                    {["거래소선택", "진입시드 분석", "레버리지분석", "매매빈도분석", "결과"].map((label, index) => (
                        <React.Fragment key={index}>
                            <li className="flex flex-col items-center justify-center w-6">
                                <div className={`w-5 xxsm:w-7 h-5 xxsm:h-7 rounded-full flex justify-center items-center f-pretendard-b text-sm xxsm:text-base ${getStepClass(index)}`}>{index + 1}</div>
                                <p className={`text-[10px] xxsm:text-xs slg:text-sm text-center f-pretendard-b mt-2 ${getTextClass(index)}`}>{label}</p>
                            </li>
                            {index < 4 && (
                                <li className={`w-[30px] xxsm:w-[38px] slg:w-[72px] rounded-full mx-[6px] xxsm:mx-[10px] relative top-[10px] xxsm:top-[13px] border-[1px] ${currentStep > index ? 'border-[#3badf0]' : 'border-[#f0f2f5]'}`}></li>
                            )}
                        </React.Fragment>
                    ))}
                </ul>

                <p className="text-center mt-[46px] slg:mt-[60px] f-pretendard-b text-[28px]">{stepTitles[currentStep]}</p>
            </div>

            <div className="step-content">
                {currentStep === 0 && <Step1 selectedExchange={selectedExchange} handleExchangeSelect={handleExchangeSelect} handleNext={handleNext} />}
                {currentStep === 1 && <Step2 seed={seed} setSeed={setSeed} handleNext={handleNext} />}
                {currentStep === 2 && <Step3 leverage={leverage} setLeverage={setLeverage} handleNext={handleNext} />}
                {currentStep === 3 && <Step4 frequency={frequency} setFrequency={setFrequency} handleNext={handleNext} />}
                {currentStep === 4 && <Step5 selectedExchange={selectedExchange} seed={seed} leverage={leverage} frequency={frequency} />}
            </div>

        </div>
    );
}

export default Steps;
