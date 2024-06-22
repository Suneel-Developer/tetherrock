"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar'

const Terms = () => {
    const [activeTab, setActiveTab] = useState('terms');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <Navbar />

            <section className='max-w-[660px] mx-auto pt-[140px] pb-[60px] bg-white'>
                <div>
                    <h1 className='text-[32px] font-bold f-pretendard-b leading-[1.31] text-center text-black'>서비스 약관</h1>

                    <div className=' relative'>
                        <ul className='p-5 flex items-center justify-center bg-white mx-auto mt-5 w-full sticky top-[80px] z-10'>
                            <li className='slg:ml-[35px] ml-6'>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('terms')}
                                    className={`text-xl f-pretendard-m ${activeTab === 'terms' ? 'text-black' : 'text-gray-500'}`}
                                >
                                    이용약관
                                </button>
                            </li>
                            <li className='slg:ml-[226px] ml-[73px]'>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('privacy')}
                                    className={`text-xl f-pretendard-m ${activeTab === 'privacy' ? 'text-black' : 'text-gray-500'}`}
                                >
                                    개인정보처리방침
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='bg-[#f7f7f7] h-5 w-full'></div>

                <div className='w-[93.6%] mt-5 mx-auto transition-opacity duration-150'>
                    {/* Terms of use Tab  */}
                    {activeTab === 'terms' && (
                        <div className='opacity-100'>
                            <div>
                                <p className='mt-[10px] text-base font-semibold f-pretendard-sm text-black-100'>TETHERROCK 이용약관 (2024년 3월 19일 기준)</p>
                                <p className='f-pretendard-r text-[13px] mt-[10px] text-black-100'>본 약관은 돌파구랩스 (이하 "회사")가 제공하는 추천 플랫폼인 “TETHERROCK” 및 그에 부수되는 제반 서비스 (이하 통칭하여 "서비스")의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정합니다. 서비스 이용 전에 전체 약관을 주의 깊게 읽고, 본 약관에 대한 질문이 있는 경우 TETHERROCK에 문의하시기 바랍니다.
                                </p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>1. 이용계약 체결 및 회원가입
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자는 TETHERROCK 웹사이트 (https://tetherrock.io/) 또는 TETHERROCK 앱을 방문하거나 사용하여 서비스를 이용함으로써 본 약관을 상세히 읽고 그 내용을 이해하였음을 인정하며, 본 약관의 조건을 준수하고 본 약관에 구속될 것을 내용으로 하는 이용계약이 체결됩니다.
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 회원가입을 원하는 이용자는 휴대폰 문자 인증을 입력하고 본 약관에 대한 동의 및 회원으로 가입하고자 하는 의사를 표시함으로써 회원 가입 신청을 하고, 문자 인증을 거쳐야 합니다. 이후 회사가 회원 가입이 완료되었음을 안내함으로써 그 신청을 승낙합니다.
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 회사는 다음 각 호의 경우 서비스 이용 신청 또는 회원 가입 신청을 거절하거나 승낙을 취소할 수 있으며, 이로 인하여 회사에 손해가 발생하였을 경우 이용신청자 또는 가입신청자에게 손해배상을 청구할 수 있습니다.
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 이용신청자 또는 가입신청자가 민법상 완전한 권리능력과 행위능력을 가진 자연인, 법인 또는 기타 단체가 아닌 경우
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 이용신청자 또는 가입신청자가 만 16세 미만인 경우
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 회사가 서비스를 제공하지 않은 국가에서 비정상적이거나 우회적인 방법을 통해 서비스를 이용하는 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 관련 법령에서 금지하는 행위 또는 사회의 안녕과 질서 또는 미풍양속을 저해할 목적, 기타 부정한 목적으로 서비스 이용을 신청하는 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 본 약관에 의하여 회사가 이용계약을 해지한 자가 다시 이용 신청 또는 가입 신청을 하는 것으로 의심되는 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 다른 사람의 이메일 주소 또는 정보를 이용하여 이용 신청 또는 가입 신청을 하는 것으로 의심되는 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 이용신청자 또는 가입신청자가 제공한 이메일 주소가 존재하지 않거나 이메일 인증이 완료되지 않은 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 그 밖에 각 호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>2. 계약의 효력 및 변경</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   회사가 본 약관의 내용을 서비스 웹페이지 또는 앱에 게재하거나 이메일 또는 문자로 이용자에게 통지하고, 이용자가 그 내용에 동의함을 표시함으로써 이용계약이 체결되며 본 약관의 효력이 발생합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   회사는 필요한 경우 관계 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경 시에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 그 적용일자 7일 전부터 적용일자 전일까지 제1조항의 방법으로 공지 또는 개별 통지합니다. 단, 이용자에게 불리한 내용으로 변경 또는 이용자의 권리 또는 의무에 관한 중요 규정 변경 시에는 적용일자 30일 전에 위 방법으로 공지 또는 통지합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   회사는 1조항에 따라 변경된 약관을 공지하거나 통지하면서, 이용자에게 적용 일까지 거부 의사를 표시하지 않으면 변경에 동의한 것으로 간주한다는 내용을 공지 또는 통지하였음에도 이용자가 위 기간 내에 명시적으로 약관 변경에 대한 거부 의사를 표시하지 않았을 때 이용자가 변경에 동의한 것으로 간주합니다. </p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>3. 개인정보처리방침 및 운영정책</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) 서비스 이용 과정에서 처리되는 이용자의 개인정보 보호는 관련 법령 및 TETHERROCK이 공개한 개인정보처리방침[링크]에 따릅니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK은 필요한 경우 별도의 운영정책을 공지 또는 안내할 수 있으며, 본 약관과 운영정책이 충돌할 경우 운영정책이 우선 적용됩니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>4. 이용자 정보 및 계정 정보 관리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) 회원가입 또는 서비스 이용 과정에서 이용자가 제공한 정보가 오류, 부정확, 오래되었거나 불완전하다고 의심되는 합당한 이유가 있는 경우 TETHERROCK은 이용자에게 수정을 요청할 수 있으며, 관련된 서비스 제공의 일부 또는 전체를 중단할 수 있습니다. TETHERROCK은 이에 대해 어떠한 책임도 지지 않으며 그로 인해 이용자에게 발생하는 불리한 결과는 이용자가 부담합니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) 이용자는 TETHERROCK이 이용자와 효과적으로 연락할 수 있도록 이용자의 이메일 주소를 비롯한 연락처를 정확하게 작성하고 업데이트해야 합니다. 이용자가 서비스를 사용하는 과정에서 제공한 연락 방법을 통해 이용자에게 연락할 수 없어 발생하는 손실 또는 추가 비용에 대한 전적인 책임은 이용자에게 있습니다..</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 이용자는 이용자의 회원 계정 및 비밀번호의 기밀 유지, 이용자의 계정으로 수행하는 모든 활동(정보 공개 및 정보 제공, 각종 규칙, 온라인 계약 갱신 또는 서비스 이용을 위한 동의 또는 제출을 위한 온라인 클릭 등을 포함하되 이에 국한되지 않음)에 대한 전적인 책임이 있으며, 이용자는 다음에 동의합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   이용자의 계정이 승인 없이 사용되었거나 비밀번호가 유출된 경우, 기밀 유지 조항을 위반하는 기타 상황이 발생하면 이용자는 즉시 TETHERROCK에 알려서 TETHERROCK이 적절한 조치를 취할 수 있도록 해야 합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   이용자는 웹사이트/서비스의 보안, 인증, 거래, 페이백과 리워드 출금 신청 메커니즘 또는 프로세스를 엄격히 준수해야 합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   각 세션이 끝날 때 올바른 절차에 따라 웹사이트/앱을 떠나도록 합니다</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   이용자는 TETHERROCK이 이용자의 요청에 대해 조치를 취하는 데 합리적인 시간이 필요하다는 것을 이해하고 있으며, TETHERROCK은 조치를 취하기 전에 발생한 결과(이용자의 손해를 포함하되 이에 국한되지 않음)에 대해 어떠한 책임도 지지 않습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>5. 서비스 내용</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) 이용자가 제휴 거래소에 TETHERROCK 추천 코드를 입력하거나 TETHERROCK 추천인 링크를 통해 가입하면, TETHERROCK은 이용자가 해당 거래소에서 수행한 선물 거래(USDT 거래 페어 한정)에서 발생하는 거래 수수료에 따라 TETHERROCK이 얻은 이득의 일부분(TETHERROCK이 공지한 페이백 비율에 따라 계산됨)을 이용자에게 페이백으로 적립하고, 일정액 이상의 페이백에 대하여 이용자의 신청이 있을 경우 이를 이용자의 제휴 거래소 계정으로 지급합니다</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK은 아직 적립되지 않은 페이백에 대하여 페이백 비율을 조정할 수 있으며, 제휴 거래소의 파산 등 TETHERROCK이 통제할 수 없는 사유로 인하여 TETHERROCK이 제휴 거래소로부터 이득을 취하지 못한 경우에는 페이백을 적립하지 않거나 이미 적립된 페이백을 지급하지 않을 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 이용자가 서비스 가입 시 다른 회원을 추천인으로 입력할 경우, TETHERROCK은 본인을 추천한 이용자의 페이백 적립액에 따라 추천인에게 일정 금액의 추가 리워드를 지급합니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) 전항의 경우에 다른 회원을 추천인으로 입력하여 서비스에 가입한 회원이 탈퇴 또는 TETHERROCK의 계약 해지로 인하여 회원 자격을 상실할 경우, 그 다른 회원(추천인)에게 적립된 리워드 중 회원 자격을 상실한 회원에 대한 페이백 지급으로 인한 리워드 데이터는 삭제됩니다. .</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) 페이백 및 리워드의 적립 및 지급은 최장 5년 전까지 이루어진 거래에 대해서만 가능하며, 5년 내에서 TETHERROCK의 정책에 따라 변동될 수 있습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>6. TETHERROCK의 의무</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK은 지속적이고 안정적인 서비스 제공을 위해 노력하며, 설비 장애, 데이터 멸실/훼손 발생 시 천재지변, 비상사태, 기술적 해결 불가능 사유를 제외하고는 지체 없이 수리 또는 복구를 위해 최선을 다합니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK은 관련 법령과 본 약관에서 정한 의무를 신의에 따라 성실하게 준수합니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>7. 이용자의 의무</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) 이용자는 서비스 이용 과정에서 신의성실의 원칙을 준수하고, 관련 법령을 준수해야 합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) 이용자는 다음 행위를 금지합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   제휴 거래소에서 펌프 앤 덤프 사기, 가장매매, 셀프 트레이딩, 선행매매, 쿼트 스터핑, 스푸핑, 레이어링 등 불공정 경쟁 또는 비정상적인 거래행위를 통해 페이백 및 리워드를 비정상적으로 적립하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   딥링크, 웹 크롤러, 봇, 스파이더, 기타 자동 장치, 프로그램, 스크립트, 알고리즘, 메서드 등을 사용하여 회사 자산의 일부에 대한 접근, 획득, 복제, 모니터링을 위해 수동 또는 자동 프로세스를 사용하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   서비스의 의도와 다른 방식으로 자료, 문서, 정보를 획득하거나 획득하려고 시도하기 위해 서비스 구조나 서비스 재현을 복제하거나 우회하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   회사 승인 없이 자산의 일부나 기능에 접속하려고 시도하거나, 해킹, 암호 마이닝 등 불법적이거나 금지된 수단으로 서비스 서버 또는 서비스 구성 시스템/네트워크에 접속하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   서비스 또는 자산에 연결된 네트워크의 취약성을 조사, 스캔 또는 테스트하거나, 서비스 또는 서비스에 연결된 네트워크에 대한 보안 또는 인증 조치를 위반하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   서비스의 다른 이용자나 방문자 정보를 추적하기 위해 역조회, 추적, 조사하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   서비스 또는 회사 시스템 인프라/네트워크 또는 연결된 시스템 인프라/네트워크에 지나치거나 불균형하게 큰 부하를 주는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   장치, 소프트웨어 또는 루틴 프로그램을 사용하여 서비스 정상 작동 또는 제휴 거래소 거래 또는 다른 사람의 서비스 사용을 방해하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   이용자 신원 또는 서비스에 보내는 메시지/전송 출처를 위장하기 위해 헤더를 위조, 신원을 가장하거나 ID를 조작하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>•   기타 타인의 정당한 권리 및 이익을 손상시키거나 불법적인 방식, 공정성 및/또는 공동체 규범을 침해하는 방식으로 서비스를 사용하는 행위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 서비스 이용 과정에서 발생하는 과세 소득과 모든 하드웨어, 소프트웨어, 통신 및 기타 비용은 이용자의 책임입니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>8. 서비스 이용 및 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 24시간 서비스를 제공합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) (a)항에도 불구하고 TETHERROCK은 다음 경우 서비스의 전부 또는 일부를 일시 정지할 수 있습니다. 이 경우 TETHERROCK은 사전에 앱 초기화면이나 서비스 공지사항 등에 정지 사유와 기간을 공지합니다. 다만, 사전 공지가 불가능한 부득이한 사정이 있을 경우 사후 공지할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 시스템 정기점검, 서버 증설 및 교체, 네트워크 불안정 등 시스템 운영상 필요한 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 정전, 서비스 설비 장애, 서비스 이용 폭주, 기간통신사업자 설비 보수 또는 점검 등 정상적인 서비스 제공이 불가능한 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 전시, 사변, 천재지변 또는 이에 준하는 국가 비상사태 등 TETHERROCK이 통제할 수 없는 상황 발생</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) TETHERROCK은 웹사이트와 앱을 통해 서비스를 제공합니다. 모바일 기기 또는 번호 변경, 해외 로밍의 경우 콘텐츠의 일부 또는 전부 이용이 불가능할 수 있으며, 네트워크를 통해 이용하는 서비스의 경우 백그라운드 작업이 진행될 수 있습니다. 이로 인한 이용자의 서비스 이용 불가능 또는 추가 요금 부과 등과 관련하여 TETHERROCK은 책임을 지지 않습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) 이용자는 서비스 이용 시 다음 사항에 주의해야 합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용에 사용되는 컴퓨터의 보안을 확인하고 웹 페이지 표시 및 안전 고려 사항에 따라 최신 버전의 Google Chrome 브라우저를 사용하여 서비스에 로그인하는 것을 강력히 권장합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• TETHERROCK은 이용자에게 가상자산의 거래 및 투자를 권유하지 않습니다. 본 서비스는 본 서비스와 무관하게 가상자산을 거래하고자 하는 이용자가 본 서비스를 통해 거래 편의를 얻을 수 있는 서비스임을 유념하십시오. TETHERROCK 및 본 서비스는 이용자의 가상자산 거래 및 투자와 관련이 없으며, 이용자의 가상자산 거래에 대한 어떠한 보증이나 책임도 지지 않습니다. 이용자는 제휴 거래소에서 가상자산을 거래할 때 일반적으로 다음과 같은 다양한 위험에 직면할 수 있으며 이는 TETHERROCK 및 본 서비스와 무관합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 정책 위험: 제휴 거래소 사용자는 가상자산의 정상적인 거래에 영향을 미칠 수 있는 법률 또는 국가 정책 수정으로 인해 손실을 입을 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 규정 준수 위험: 제휴 거래소 사용자는 사용자의 가상자산 거래가 법률 또는 규제를 위반하는 경우 손실을 입을 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 투자 수익률 위험: 가상자산 시장은 고유한 특성을 가지고 있습니다. 가상자산 가격이 매우 광범위하게 변동되므로 사용자는 시장에서 손실을 입을 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 거래 위험: 이용자의 성공적인 이체는 이체 당사자의 상호 동의에 달려 있으며 제휴 거래소는 성공적인 이체를 약속하거나 보장하지 않습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 불가항력 위험: 자연 재해, 전쟁, 타격, 사이버 공격 및 기타 예측할 수 없는 불가피하고 강력한 상황이 발생하면 제휴 거래소의 서비스가 정상적으로 작동하지 않을 수 있으며 이로 인해 사용자의 손실이 발생할 수 있습니다. 불가항력으로 인한 이용자의 손실에 대해 TETHERROCK은 어떠한 책임도 지지 않습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 상장폐지 위험: 가상자산 프로젝트 관련자가 파산, 청산 및 해산되거나 법률 및 규제를 위반하거나 프로젝트 당사자의 요청에 따라 제휴 거래소는 가상자산을 상장폐지하여 사용자에게 손실을 초래할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 기술적 위험: 가상자산 거래 중 기술적 결함의 가능성은 희박하지만, 그러한 가능성을 배제할 수는 없습니다. 그러한 일이 발생하면 사용자의 이익이 영향을 받을 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 운영 위험: 사용자는 잘못된 계정으로의 이체, 운영 규정 위반 등 운영 오류로 인해 위험에 처할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 계정 동결 위험: 채무 불이행 또는 범죄 혐의가 있는 경우 사용자의 계정이 사법 기관에 의해 동결되거나 강제로 압수될 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) TETHERROCK은 현재 상태 및 가용성에 따라 서비스를 제공합니다. TETHERROCK은 서비스의 특정 목적에 대한 적용 가능성, 오류 또는 누락, 지속 가능성, 정확성, 신뢰성, 적합성에 국한되지 않는 서비스에 대해 어떠한 명시적 또는 묵시적 보증도 하지 않습니다. 동시에 TETHERROCK은 서비스와 관련된 기술 및 정보의 유효성, 정확성, 신뢰성, 품질, 안정성, 무결성 및 적시성에 대한 약속이나 보장을 하지 않습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(f) 이용자는 자신의 재량에 따라 관련 가상자산 및/또는 정보의 진위, 합법성 및 유효성을 결정하고 이로 인해 발생하는 모든 책임과 손실을 이용자의 비용으로 부담해야 합니다. 법령에서 명시적으로 요구하지 않는 한, TETHERROCK은 모든 이용자 데이터, 디지털 자산 정보, 거래 활동 및 거래와 관련된 기타 문제를 사전 검토할 의무가 없습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>9. 서비스 변경 및 중단</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK은 원활한 서비스 제공을 위해 운영상 또는 기술상 필요에 따라 서비스를 변경할 수 있습니다. 변경 전에 해당 내용을 서비스 내에 공지하지만, 버그나 오류 수정, 긴급 업데이트 등 부득이한 경우 또는 중대한 변경에 해당하지 않는 경우에는 사후 공지할 수 있습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK은 영업양도, 분할, 합병 등 영업 폐지, 콘텐츠 제공 계약 만료, 서비스 수익 악화 등 경영상 중대한 사유로 서비스 지속이 어려울 경우 서비스를 중단할 수 있습니다. 이 경우 중단일 30일 전까지 중단일 및 사유를 제3조 (a) 항 방법으로 이용자에게 공지 및 통지합니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>10. 광고 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK은 서비스 운영과 관련하여 서비스 내 광고를 게재하고, 수신 동의한 이용자에게 광고성 정보를 전송할 수 있습니다. 회원은 언제든지 수신 거절 가능하며, TETHERROCK은 거절 시 광고성 정보 발송을 중단합니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK 서비스 내 배너 또는 링크 등을 통해 타인이 제공하는 광고나 서비스에 연결될 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) (b)항에 따라 타인이 제공하는 광고나 서비스에 연결될 경우, 해당 영역은 TETHERROCK 서비스 영역이 아니므로 TETHERROCK은 신뢰성, 안정성 등을 보장하지 않으며, 그로 인한 이용자 손해에 대한 책임도 지지 않습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>11. 지식재산권</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK이 제작한 일체의 콘텐츠 및 웹사이트/앱 로고, 데이터베이스, 웹사이트/앱 디자인, 텍스트 및 그래픽, 소프트웨어, 사진, 비디오, 음악, 소리, 소프트웨어 편집의 지적 재산권, 관련 소스 코드 및 소프트웨어(소규모 응용 프로그램 및 스크립트 포함)를 포함하되 이에 국한되지 않는 서비스에 포함된 모든 지적 성과에 대한 저작권과 기타 지식재산권은 TETHERROCK에 귀속됩니다. (b) 이용자는 TETHERROCK의 사전 서면 동의 없이 서비스에 표시된 어떠한 데이터도 복제, 전송, 편집, 공표, 공연, 배포, 방송, 2차적 저작물 작성 등의 방법으로 영리목적으로 이용하거나 타인에게 이용하게 하여서는 안 됩니다. (c) TETHERROCK은 이용자가 서비스 내에 게시한 모든 형태의 정보를 무료로 서비스 내 노출, 서비스 홍보 활용, 서비스 운영 및 개선, 새로운 서비스 개발 연구 목적을 위해 저장, 복제, 수정, 공중 송신, 전시, 배포, 2차적 저작물 작성 방식으로 이용할 수 있습니다. (d) 이용자는 서비스 이용과 관련하여 타인의 지식재산권을 침해해서는 안 됩니다. (e) TETHERROCK은 이용자가 게시하거나 등록하는 서비스 내 게시물에 대해 제2조 (c)항 각 호에 규정된 금지행위 중 어느 하나에 해당된다고 판단되는 경우 사전 통지 없이 삭제 또는 이동하거나 그 등록을 거절할 수 있습니다. (f) TETHERROCK이 이용자에게 서비스 이용을 허용하는 것은 어떠한 경우에도 TETHERROCK이 서비스와 관련된 TETHERROCK의 지식재산권을 양도하거나 처분하는 것으로 해석되지 않습니다. (g) 이 조는 TETHERROCK이 서비스를 운영하는 동안 유효하며, 이용계약 종료 후에도 지속적으로 적용됩니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>12. 서비스 이용 제한</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK은 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우 서비스 이용을 제한할 수 있습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK이 전항의 이용제한 조치를 취하는 경우 다음 각 호의 사항을 이용자에게 통지합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용제한 조치의 사유</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용제한 조치의 내용</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용제한 조치에 대한 이의 신청 방법</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 이용자가 TETHERROCK의 이용제한 조치에 불복하고자 할 때에는 이 조치의 통지를 받은 날부터 14일 이내에 불복 이유를 기재한 이의 신청서를 서면, 이메일 또는 이에 준하는 방법으로 TETHERROCK에 제출하여야 합니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) TETHERROCK은 전항의 이의 신청서를 접수한 날부터 14일 이내에 불복 이유에 대하여 서면, 이메일 또는 이에 준하는 방법으로 답변합니다. 다만, TETHERROCK은 이 기간 내에 답변이 어려운 경우 그 사유와 처리 일정을 통지합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) TETHERROCK은 불복 이유가 타당한 경우 이에 따른 조치를 취합니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>13. 계약 해지 등</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) 이용자는 언제든지 서비스 이용을 원하지 않는 경우 TETHERROCK에 대한 서면, 이메일 또는 이에 준하는 방법으로 의사 표시(비회원 이용자인 경우) 또는 회원 탈퇴(회원인 경우)를 통해 이용계약을 해지할 수 있습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) 회원 탈퇴로 인해 회원이 서비스 내에서 보유한 서비스 이용 정보는 개인정보처리방침에 별도의 규정이 없는 한 모두 삭제되어 복구가 불가능하게 되며, 이용자는 동일한 이메일을 사용하여 다시 가입할 수 없습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 회원 탈퇴 이후 비회원 이용자로서 서비스를 이용할 수 있습니다. 다만, 리워드는 회원에게만 제공되는 서비스이므로 탈퇴 또는 TETHERROCK의 계약 해지로 인한 회원 자격 상실 시 적립된 리워드는 모두 소멸됩니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) TETHERROCK은 회원이 본 약관에서 금지하는 행위를 하거나 법령을 위반하는 등 계약을 유지할 수 없는 중대한 사유가 있는 경우 서비스 이용을 중지하거나 이용계약을 해지할 수 있습니다. 본 항의 중대한 사유에는 제2조 (c)항 각 호와 제7조 (b)항 각 호의 경우가 포함되나 이에 한정되지 않습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) 이용계약이 해지되는 경우, TETHERROCK은 법령상 요구되는 경우를 제외하고는 이용자의 개인정보를 포함하여 이용자의 계정 또는 서비스 이용에 관한 어떠한 정보도 이용자 또는 제3자에게 전달하거나 공개할 의무가 없습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(f) 본 조에 따른 계약 해지는 제14조의 손해배상에 영향을 미치지 않습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>14. 손해배상</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK 또는 이용자가 본 약관을 위반하여 상대방에게 손해를 입힌 경우 그 손해를 배상할 책임이 있습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) 고의 또는 과실이 없는 경우에는 전항의 손해배상 책임이 없으나, 서비스 이용 과정에서의 조작 오류는 이용자의 과실로 봅니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>15. TETHERROCK의 면책</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관하여 책임을 지지 않습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK은 아래 각 호의 사유로 인하여 이용자에게 발생한 손해에 대하여 책임을 지지 않습니다. 다만, TETHERROCK의 고의 또는 과실에 의한 경우에는 그러하지 않습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스용 설비의 보수, 교체, 정기점검, 공사 등 기타 이에 준하는 사유로 서비스 이용이 불가한 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자의 고의 또는 과실로 인한 서비스 이용의 장애</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자의 제휴 거래소 약관 위반으로 인하여 페이백이 적립되지 않는 등 본 서비스의 정상적인 제공이 어려운 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자간 또는 이용자와 타인간 서비스를 매개로 발생한 거래나 분쟁</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 회원이 계정 비밀번호, 모바일 기기 비밀번호 등을 관리하지 않아 회원정보의 유출이 발생한 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자가 모바일 기기의 변경, 모바일 기기의 번호 변경, 운영체제(OS) 버전의 변경, 해외 로밍, 통신사 변경 등으로 인해 서비스 전부나 일부의 기능을 이용할 수 없는 경우</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서버에 대한 제3자의 불법적인 접속 또는 서버의 불법적인 이용 및 프로그램을 이용한 비정상적인 접속 방해</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 기타 TETHERROCK의 귀책사유가 인정되지 않는 사유로써 각 호에 준하는 사유</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 이용자가 서비스에 게재한 정보·자료·사실 등의 내용에 관한 신뢰도 또는 정확성에 대하여는 해당 이용자가 책임을 부담하며, TETHERROCK은 내용의 부정확 또는 허위로 인해 이용자 또는 제3자에게 발생한 손해에 대하여는 아무런 책임을 부담하지 않습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) TETHERROCK은 앱 또는 서비스 이용과 관련하여 이용자의 고의 또는 과실로 인하여 이용자 자신 또는 제3자에게 발생한 손해에 대하여는 아무런 책임을 부담하지 않습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) 이용자가 자신의 개인정보 또는 서비스 이용과 관련된 정보를 타인에게 유출 또는 제공함으로써 발생하는 피해에 대해서 TETHERROCK은 일체의 책임을 지지 않습니다. </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(f) TETHERROCK은 이용자가 서비스를 통해 얻은 자료를 이용하여 발생한 손해에 대해서는 책임을 부담하지 않습니다. 다만, TETHERROCK의 고의 또는 과실에 의한 경우에는 그러하지 않습니다.</p>
                                </div>

                                <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>TETHERROCK 이용 약관 위반 시 조치</p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>1. 법률 위반 또는 약관 위반 시 조치</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) 귀하가 법률을 위반하거나 위반했다는 것이 귀하 모국의 행정 또는 사법 기관의 유효한 법적 문서에 의해 확인되거나 TETHERROCK이 자체 판단에 따라 귀하의 행동이 본 약관 및/또는 규칙의 조항을 위반하거나 위반한 것으로 의심되는 경우, TETHERROCK은 다음과 같은 조치를 취할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 해당 위반 또는 약관 위반 혐의와 TETHERROCK이 취한 조치를 게시합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 귀하에게 사전 통지 없이 해당 정보를 삭제합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 본 약관에 따라 귀하에게 처벌을 부과합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK은 귀하가 TETHERROCK에서 수행하지 않았지만 TETHERROCK 사용자에게 어떠한 형태로든 영향을 미친 행위를 포함하여 TETHERROCK에 대한 귀하의 행위와 관련하여 다음과 같은 권리를 가지고 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 귀하의 행위 및 그 성격이 본 약관을 위반하는지 여부를 일방적으로 결정합니다. and its nature violates these Terms and Conditions.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 귀하에게 추가 증거 제출을 요청합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 추가 증거를 제시하지 못한 경우 발생하는 불리한 결과에 대해 귀하에게 책임을 지웁니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 귀하의 약관 위반으로 의심되는 제 3 자에게 발생한 손해에 대해 귀하의 명의로 발생한 법적 책임은 전적으로 귀하에게 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) 귀하가 관련 법률 또는 본 약관을 위반하여 TETHERROCK에 손실을 초래하거나 제 3 자에 의한 클레임으로 이어지거나 행정 당국에서 부과하는 처벌을 받은 것으로 보이는 경우, 귀하는 다음과 같은 책임을 지닙니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• TETHERROCK에게 모든 손실 및 / 또는 합리적인 변호사 비용을 포함하여 TETHERROCK이 그 결과로 지출한 비용을 보상합니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>2. 증거 보관 및 제출</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>귀하는 귀하의 행동과 관련된 모든 증거를 보관해야 합니다. 추가 증거를 제시하지 못한 경우 발생하는 불리한 결과를 감수해야 합니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>3. TETHERROCK 게시물 삭제</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 법규를 위반하거나 타인의 합법적 권리를 침해하거나 본 약관을 위반 한 것으로 의심되어 TETHERROCK에 게시한 정보와 관련하여, 귀하에게 알리지 않고 해당 정보를 삭제할 권리가 있습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>4. 기타</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 위에 명시된 조치 외에도 상황에 따라 필요하다고 판단되는 추가 조치를 취할 수 있습니다.</p>
                                </div>

                                <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>TETHERROCK은 다음과 같은 목적으로 귀하의 개인정보를 사용할 수 있습니다.</p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>1. 법적 의무 이행</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 다양한 법률 및 규정을 준수해야 합니다. 예를 들어, 자금세탁 방지법을 준수하기 위해 TETHERROCK 서비스 이용자의 신원 확인을 진행합니다. 이 과정에서 신분증 사진을 수집 및 저장하며, 법률에 따라 요구되는 개인정보를 제공하지 않을 경우 계정 폐쇄될 수 있습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>2. 약관 위반 방지 및 시행</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 금지된 활동을 감시하고 예방하며, 제3자와의 약관 및 본 약관 위반을 방지하고 조사합니다. 또한, 서비스 이용에 따른 수수료 부과 등을 위해 귀하의 계정 사용 정보 및 TETHERROCK 서비스 이용 기록을 수집하고 분석합니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>3. 사기 및 자금 손실 예방</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 사기 및 서비스 오용을 방지하고, 계정 손상 및 자금 손실로부터 귀하를 보호하기 위해 귀하의 개인정보를 처리합니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>4. 서비스 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 귀하에게 서비스를 제공하기 위해 귀하의 개인정보에 접근합니다. 신원 확인 서비스 제공 업체와 같은 제3자는 신원 확인 및 사기 방지를 위해 개인정보를 수집할 수 있습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>5. 서비스 관련 정보 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 서비스 이용 관련 정보, 보안 문제 또는 업데이트, 거래 관련 정보 등을 제공하기 위해 관리 또는 계정 관련 정보를 보냅니다. 이러한 정보는 서비스 이용에 필수적이며, 수신을 거부할 경우 서비스 이용에 영향을 미칠 수 있습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>6. 고객 지원 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>문제 또는 분쟁 해결을 위해 TETHERROCK에 문의할 경우, TETHERROCK은 귀하의 개인정보를 처리합니다. 개인정보 처리에 동의하지 않을 경우, 요청에 응답하지 못하거나 서비스 이용에 지장을 줄 수 있습니다.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>7. 기타</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 위에 명시된 목적 외에도 귀하의 동의를 얻거나 법적 근거에 따라 귀하의 개인정보를 처리할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 귀하에게 맞춤형 경험을 제공하고, 귀하의 요구에 맞는 서비스를 제공하기 위해 귀하의 개인정보를 처리합니다. 예를 들어, 제3자가 보관하는 특정 개인정보에 대한 접근 권한을 부여할 수 있습니다. 개인정보 처리에 동의하지 않을 경우, 일부 또는 모든 TETHERROCK 서비스 이용이 제한될 수 있습니다.</p>
                                </div>
                                <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>회사 인수, 합병 또는 거래 촉진</p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>회사 인수, 합병 또는 기타 회사 거래의 경우 귀하의 계정 및 TETHERROCK 서비스 이용 기록을 처리할 수 있습니다. 이러한 목적의 개인정보 처리를 원하지 않을 경우, 계정 폐쇄를 선택할 수 있습니다.</p>
                                </div>

                                <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>기타</p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 위에 명시된 목적 외에도 귀하의 동의를 얻거나 법적 근거에 따라 귀하의 개인정보를 처리할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'privacy' && (
                        <div className='opacity-100'>
                            <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>TETHERROCK 개인정보 처리방침</p>
                            <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>**돌파구랩스 (이하 “회사”)**는 관련 법령에 따라 TETHERROCK (이하 “서비스”) 이용자의 개인정보를 보호하고, 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
                            <p>개인정보 수집 및 이용</p>

                            <div>
                                <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>1. 처리하는 개인정보 항목</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>회사는 서비스 이용자에 대하여 다음과 같은 개인정보 항목을 수집하여 처리합니다. 만 16세 미만의 아동의 개인정보는 처리하지 않습니다.</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) 회원 가입 시 수집사항 (필수)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 휴대폰 번호</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이메일 주소s</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 비밀번호</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) 회원 거래소 UID 연동 시 수집사항 (필수)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 거래소명</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 해당 거래소 UID</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 해당 거래소 선물거래내역 (일시, 거래량)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 비회원 페이백 서비스 이용 시 수집사항 (필수)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 거래소명</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 해당 거래소 UID</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 해당 거래소 선물거래내역 (일시, 거래량)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) 이용 기록 및 기기 정보 (자동 생성 및 수집)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자의 IP 주소 및 브라우저 유형</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 사용 언어</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 기록 (접속 날짜 및 시간 등 방문 기록, 페이백/커미션 적립 및 신청, 출금 기록 등 이용 기록)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 기기 정보 (휴대폰 모델명, OS명 및 버전)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 쿠키</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) 설문조사 및 피드백 (선택적)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 이용자의 귀중한 의견을 수렴하기 위해 설문조사 및 피드백 제공 채널을 운영합니다. </p>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>2. 개인정보 삭제 및 파기</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 이용자가 서비스를 탈퇴하거나 이용자격을 상실하는 경우, 별도의 요청 없이 지체없이 이용자의 개인정보를 삭제 및 파기합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>다만, 다음과 같은 경우에는 아래에 기재된 기간 동안 개인정보를 보존합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 관계 법령 위반: 수사·조사 진행 중 (수사·조사 종료 시까지)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 채권·채무 관계: 해당 관계 정산 시까지</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 재가입 방지: 이메일 주소 (서비스 종료시까지)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 페이백/커미션: 5년간 (탈퇴 신청일로부터 개인 식별 정보 마스킹 처리)</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>3. 기타 보존 사유</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 관련 개인정보 (로그기록): 3개월 (통신비밀보호법)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 소비자 불만/분쟁 처리 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 표시 광고 기록: 6개월 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 세무 관련 장부 및 증빙서류: 5년 (국세기본법)</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>4. TETHERROCK 서비스 제공 및 운영</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) 회원 관리:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 회원 가입 신청 확인 및 처리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 회원 자격 유지 및 관리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 내역 확인 및 관리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 관련 고지 및 문의 응답</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 회원 간 소통 및 협업 지원</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) 사기 및 오남용 방지:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용에 따른 사기 및 오남용 행위 감지 및 예방</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 계정 보호 및 자금 손실 방지</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 안정적인 운영 및 이용자 보호</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) 서비스 제공:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 맞춤형 서비스 제공 및 개선</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자 맞춤형 콘텐츠 및 기능 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 고객 지원 및 서비스 이용 안내</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) 서비스 관련 정보 제공:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 관련 정보 제공 및 안내</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 업데이트 및 변경 사항 공지</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이벤트 및 프로모션 정보 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 관련 문의 응답</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) 고객 지원:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 관련 문의 및 불만 처리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 관련 문제 해결</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 고객 만족도 향상</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(f) 보안 강화:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 및 시스템 보안 강화 및 관리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 불법 접근 및 악성 활동 방지</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자 정보 보호 및 개인정보 유출 방지</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(g) 서비스 개선 및 개발:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 패턴 분석 및 개선</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자 만족도 조사 및 분석</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 새로운 서비스 및 기능 개발</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(h) 마케팅 및 광고:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자 맞춤형 광고 및 프로모션 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 홍보 및 마케팅 활동</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자 맞춤형 콘텐츠 제공</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>5. 개인정보 제3자 제공</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 이용자의 동의를 받거나 법률에 의거한 경우 외에는 개인정보를 제3자에게 제공하지 않습니다.</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>6. 개인정보 이용 및 제공 범위</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 당초 수집 목적과 합리적으로 관련된 범위 내에서 개인정보를 이용 또는 제공합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>이를 판단하기 위한 기준은 다음과 같습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 당초 수집 목적과의 관련성: 당초 수집 목적과 추가적 이용·제공 목적이 연관성이 있는지 고려합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 예측 가능성: 개인정보 처리 관행 및 기술 수준 등을 고려하여 추가적 이용 또는 제공 가능성을 예측합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자 이익 침해 여부: 추가적 이용 목적과의 관계에서 이용자 이익 침해 가능성 및 그 정도를 고려합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 안전성 확보: 가명처리 또는 암호화 등 안전 조치를 취했는지 확인합니다.</p>
                                </div>

                                <di>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>7. 쿠키 사용 정책</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 이용자에게 맞춤형 서비스를 제공하기 위해 쿠키를 사용합니다. 쿠키는 웹사이트 이용 정보를 저장하고 불러오는 소량의 정보이며, 이용자의 컴퓨터 하드디스크에 저장됩니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 다음과 같은 목적으로 쿠키를 사용합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자 분석: 접속 빈도, 방문 시간, 이용 패턴 등을 분석하여 서비스 개선 및 신규 서비스 개발에 활용합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 맞춤형 서비스: 이용자의 관심사에 맞는 콘텐츠 및 광고를 제공합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 보안 관리: 서비스 이용 및 접근을 안전하게 관리합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>이용자는 브라우저 설정을 통해 쿠키 사용을 거부하거나 제한할 수 있습니다. 다만, 쿠키 사용을 거부할 경우 일부 서비스 이용에 제약이 있을 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>쿠키 설정 방법:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>광고 ID 삭제</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 안드로이드: 설정 &gt; 개인정보보호 &gt; 광고 &gt; 광고 ID 삭제</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 아이폰: 설정 &gt; 개인정보보호  &gt; 추적  &gt; 앱이 추적을 요청하도록 허용 끔</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>쿠키 차단</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'> Internet Explorer: 도구 &gt; 인터넷 옵션  &gt; 개인 정보 &gt; 설정  &gt; 쿠키의 차단</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Microsoft Edge:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 설정 &gt; 개인정보, 검색 및 서비스</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 추적방지 InPrivate를 검색할 때 항상 엄격 추적 방지 사용</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 개인정보  &gt; 추적 안함 요청보내기</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 설정  &gt; 쿠키 및 사이트 권한</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 쿠키 및 저장된 데이터&gt; 쿠키 및 사이트 데이터 관리 및 삭제 </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 사이트에서 쿠키 데이터를 저장하고 읽도록 허용(권장) 끔</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Chrome:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 설정  &gt; 개인 정보 보호 및 보안 &amp; 개인 정보 보호 및 보안</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서드 파티 쿠키에서 원하는 쿠키 차단 방식 선택</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>추가 팁</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 각 브라우저 설정 메뉴는 버전에 따라 위치 및 용어가 다를 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 쿠키를 모두 차단하면 일부 사이트 기능이 제한될 수 있습니다.</p>
                                </di>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>8.개인 정보의 파기 </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>개인정보가 더 이상 필요하지 않을 때에는 다음과 같은 절차에 따라 지체없이 파기합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>1. 개인정보 파기 기준</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 보유기간 경과: 개인정보 보유기간이 만료되면 파기합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 처리목적 달성: 개인정보 처리 목적이 달성되면 파기합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이용자 동의 철회: 이용자가 동의를 철회하면 파기합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 기타 법적 요건 충족: 법적 요건에 따라 더 이상 개인정보를 보유할 필요가 없으면 파기합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>2. 개인정보 파기 절차</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 파기 사유 발생: 파기해야 할 개인정보를 선정합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 책임자 승인: 개인정보 보호책임자가 파기를 승인합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 파기 실행: 안전한 방법으로 개인정보를 파기합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>3. 개인정보 파기 방법</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 전자적 파일: 기록을 재생할 수 없도록 기술적 방법으로 파기합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 종이 문서: 분쇄기로 분쇄하거나 소각합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>4. 추가 정보</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 일부 개인정보는 법적 요건에 따라 파기 기간 이후에도 보존될 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 보존 기간이 종료된 개인정보는 별도의 데이터베이스 또는 보관장소로 이동하여 안전하게 관리됩니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>8. TETHERROCK은 이용자의 개인정보 보호를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 기술적 조치: 해킹 등에 대비한 기술적 대책, 개인정보의 암호화, 개인정보처리시스템의 접근권한 관리, 접속기록의 보관 및 위·변조 방지 등</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 물리적 조치: 서버실, 자료보관실 등의 접근통제</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>10.이용자의 권리 의무 및 행사방법</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 개인정보 열람: 자신의 개인정보를 확인할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 개인정보 정정: 자신의 개인정보가 정확하지 않거나 변경되었을 때, 정정을 요청할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 개인정보 삭제: 자신의 개인정보를 삭제할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 개인정보 처리 정지: 자신의 개인정보 처리를 일시적으로 중단할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>이용자는 본인 또는 법정대리인, 위임인을 통해 권리를 행사할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 권리 행사 방법:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이메일: [admin@tetherrock.io]로 이메일을 보내주세요.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 처리 기간: TETHERROCK은 지체 없이 조치를 취합니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 참고: 개인정보 보호법 등 관련 법령에 따라 일부 권리 행사가 제한될 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 서비스 이용 제한: 개인정보 처리 정지 또는 동의 철회는 서비스 이용 제한 또는 이용계약 종료를 의미할 수 있습니다.  EU 사용자 개인정보 보호 추가 조항</p>
                                </div>

                                <div className='f-pretendard-r text-black-100 text-[13px] mt-[15px]'>EU 거주 사용자에게만 적용됩니다.</div>

                                <div>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 개인정보 전송: 이용자의 동의 또는 GDPR 적절한 안전 장치(계약 체결 등)에 따라 EU 외부로 전송될 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• EU 사용자 권리:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 접근 권리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 정정 권리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 삭제 권리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 처리 제한 권리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 처리 반대 권리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 이동 권리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 동의 철회 권리</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 감독 기관에 불만 제기 권리</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK은 법률 및 서비스 변경에 따라 개인정보처리방침을 수정할 수 있습니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>변경 사항은 최소 7일 전에 게시됩니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>이용자 권리에 중대한 변경이 발생할 때는 최소 30일 전에 미리 알려드립니다.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>변경된 개인정보처리방침은 기재된 효력발생일에 그 효력이 발생합니다.</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>개인정보 보호 책임자:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 이름: 박근형</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 직책: 정보관리자</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 연락처: admin@tetherrock.io</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>문의:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 개인정보 보호 관련 문의, 불만처리, 피해구제 등: admin@tetherrock.io</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• 개인정보침해 구제, 신고, 상담:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 개인정보침해신고센터: 118 (privacy.kisa.or.kr)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 대검찰청: 1301 (www.spo.go.kr)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o 경찰청: 182 (ecrm.cyber.go.kr)</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div >
            </section >
        </>
    )
}

export default Terms