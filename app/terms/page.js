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
                    <h1 className='text-[32px] font-bold f-pretendard-b leading-[1.31] text-center text-black'>Terms of Service</h1>

                    <div className=' relative'>
                        <ul className='p-5 flex items-center justify-center bg-white mx-auto mt-5 w-full sticky top-[80px] z-10'>
                            <li className='slg:ml-[35px] ml-6'>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('terms')}
                                    className={`text-xl f-pretendard-m ${activeTab === 'terms' ? 'text-black' : 'text-gray-500'}`}
                                >
                                    Terms of Use
                                </button>
                            </li>
                            <li className='slg:ml-[226px] ml-[73px]'>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('privacy')}
                                    className={`text-xl f-pretendard-m ${activeTab === 'privacy' ? 'text-black' : 'text-gray-500'}`}
                                >
                                    Privacy Policy
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
                                <p className='mt-[10px] text-base font-semibold f-pretendard-sm text-black-100'> TETHERROCK Terms of Use (as of March 19, 2024)</p>
                                <p className='f-pretendard-r text-[13px] mt-[10px] text-black-100'>These Terms and Conditions include the rights, obligations and responsibilities of the Company and users in relation to the use of “TETHERROCK”, a recommendation platform provided by Breakthrough Labs (hereinafter referred to as “Company”), and all services accompanying it (hereinafter collectively referred to as “Services”). Provides other necessary matters. PLEASE READ THE ENTIRE TERMS CAREFULLY BEFORE USING THE SERVICE, AND CONTACT TETHERROCK IF YOU HAVE ANY QUESTIONS ABOUT THESE TERMS.
                                </p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>1. Conclusion of service agreement and membership registration
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• By visiting or using the TETHERROCK website (https://tetherrock.io/) or the TETHERROCK app and using the service, the user acknowledges that he or she has read these Terms and Conditions in detail and understands their contents, and complies with the terms and conditions of these Terms and Conditions. A service agreement is concluded that stipulates that you will be bound by the terms and conditions.
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Users who wish to become members must apply for membership by entering a mobile phone text message, agreeing to these terms and conditions and indicating their intention to become a member, and must undergo text verification. Afterwards, the company will accept the application by notifying you that membership registration has been completed.
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• In the following cases, the company may reject or cancel an application for service use or membership registration, and if damage is incurred to the company as a result, compensation for damages may be claimed from the applicant for use or membership.
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o If the applicant for use or subscription is not a natural person, corporation, or other organization with full rights and capacity under civil law
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o If the applicant or subscription applicant is under 16 years of age
                                    </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o If the service is used through unusual or indirect methods in a country where the company does not provide the service</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o If you apply to use the service for an act prohibited by relevant laws, for the purpose of disrupting social well-being, order, or morals, or for other illegal purposes.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o If it is suspected that a person whose service contract has been terminated by the Company in accordance with these Terms and Conditions is applying for use or membership again</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o If you suspect that you are using another person’s email address or information to apply for use or membership</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o If the email address provided by the user or subscription applicant does not exist or email verification has not been completed</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o In cases where consent is judged to be inappropriate for any other reason</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>2. Effect and change of contract</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• When the company posts the contents of these terms and conditions on the service web page or app or notifies the user by email or text, and the user indicates that he or she agrees to the contents, the service agreement is concluded and these terms and conditions take effect.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• If necessary, the Company may change these Terms and Conditions to the extent that they do not violate relevant laws and regulations. In case of change, the date of application and reason for revision shall be specified and the current Terms and Conditions shall be specified in accordance with Article 1 from 7 days before the date of application until the day before the date of application. You will be notified by notice or individually. However, if there is a change in the content that is disadvantageous to the user or a change in important regulations regarding the user's rights or obligations, the notice or notification will be made in the above manner 30 days prior to the effective date.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• The company announces or notifies the changed terms and conditions pursuant to Article 1 and informs the user that if he or she does not express his/her intention to reject the change by the effective date, he/she will be deemed to have agreed to the change. However, if the user explicitly submits to the change in the terms and conditions within the above period, If the user does not express his/her intention to refuse the change, he/she is deemed to have agreed to the change.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>3. Personal information processing policy and operating policy</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) The protection of users' personal information processed in the process of using the service is subject to relevant laws and the personal information processing policy [link] published by TETHERROCK.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK may announce or guide a separate operating policy if necessary, and if there is a conflict between these Terms and Conditions and the operating policy, the operating policy shall take precedence.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>4. User information and account information management</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) If there are reasonable grounds to suspect that the information provided by the user during membership registration or service use is error, inaccurate, out-of-date or incomplete, TETHERROCK may request the user to make corrections and suspend all or part of the provision of related services. You can. TETHERROCK does not take any responsibility for this, and any adverse consequences resulting from this are borne by the user.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) Users must accurately fill out and update their contact information, including their email address, so that TETHERROCK can effectively contact them. The user is fully responsible for any losses or additional costs arising from the inability to contact the user through the contact method provided in the process of using the service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) The user is responsible for maintaining the confidentiality of the user's member account and password, and for all activities performed under the user's account (information disclosure and provision of information, various rules, online contract renewal, or online click to consent or submit for service use, etc.) (including but not limited to), you agree to the following:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• If your account is used without authorization, your password is compromised, or any other situation that violates the confidentiality provisions occurs, you must immediately notify TETHERROCK so that TETHERROCK can take appropriate action.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Users must strictly adhere to the security, authentication, transaction, payback and reward withdrawal application mechanisms or processes of the website/service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Ensure proper procedures are followed to leave the website/app at the end of each session.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• The user understands that TETHERROCK needs a reasonable time to take action on the user's request, and TETHERROCK has no responsibility for any consequences (including, but not limited to, damages to the user) that occur before taking action. not.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>5. Service contents</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) When a user enters the TETHERROCK referral code on an affiliated exchange or signs up through the TETHERROCK referral link, TETHERROCK gains profits based on the transaction fees generated from futures trading (USDT trading pairs only) performed by the user on the relevant exchange. A portion of the amount (calculated according to the payback rate announced by TETHERROCK) is credited to the user as payback, and if the user requests a payback exceeding a certain amount, it is paid to the user's affiliated exchange account.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK may adjust the payback rate for paybacks that have not yet been accumulated, and if TETHERROCK is unable to benefit from the affiliated exchange due to reasons beyond TETHERROCK's control, such as the bankruptcy of the affiliated exchange, the payback will be credited. Otherwise, the already accumulated payback may not be paid.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) If a user enters another member as a recommender when signing up for the service, TETHERROCK will pay a certain amount of additional reward to the recommender according to the payback accumulated amount of the user who recommended the user.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) In the case of the preceding paragraph, if a member who subscribed to the service by entering another member as a recommender loses membership due to withdrawal or termination of the contract with TETHERROCK, among the rewards accumulated to that other member (recommender), the member who lost membership eligibility will be Reward data resulting from payback payments to members will be deleted.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) Accumulation and payment of paybacks and rewards is possible only for transactions made up to 5 years ago, and may change according to TETHERROCK's policy within 5 years.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>6. TETHERROCK’S OBLIGATIONS</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK strives to provide continuous and stable services, and does its best to repair or restore without delay in the event of equipment failure or data loss/damage, except in cases of natural disaster, emergency, or technical inability to solve the problem.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK faithfully complies with the relevant laws and the obligations set forth in these Terms and Conditions in good faith.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>7. User obligations</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) Users must adhere to the principle of good faith and comply with relevant laws and regulations in the process of using the service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) Users are prohibited from doing the following:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Accumulating paybacks and rewards abnormally through unfair competition or abnormal trading practices such as pump and dump fraud, wash trading, self-trading, front-running, quota stuffing, spoofing, and layering on affiliated exchanges.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Use any manual or automated process to access, acquire, copy, or monitor any portion of Company Assets, including through the use of deep links, web crawlers, bots, spiders, or other automatic devices, programs, scripts, algorithms, or methods;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Duplicating or circumventing the structure of the Service or reproduction of the Service in order to obtain or attempt to obtain materials, documents or information other than as intended by the Service;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Attempting to access any part or function of the asset without company approval, or accessing the service server or service configuration system/network through illegal or prohibited means, such as hacking or password mining.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Probe, scan or test the vulnerability of the Service or any network connected to the Service, or breach security or authentication measures on the Service or any network connected to the Service;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Reverse lookup, tracking, or investigation to track the information of other users or visitors of the Service;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Place an excessive or disproportionately large load on the Service or Company system infrastructure/network or connected system infrastructure/network;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Use any device, software or routine program to interfere with the normal operation of the Service or transactions on affiliated exchanges or with any other person’s use of the Service;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Forging headers, disguising identity, or manipulating ID in order to disguise the user's identity or the source of messages/transmissions sent to the service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Use the Service in a way that damages the legitimate rights and interests of others or is illegal or violates fairness and/or community norms;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) The user is responsible for taxable income and all hardware, software, communication and other costs incurred in the process of using the service.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>8. Use and provision of services</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK provides service 24 hours a day, 365 days a year, unless there are special business or technical disruptions.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) Notwithstanding paragraph (a), TETHERROCK may suspend all or part of the Services if: In this case, TETHERROCK announces the reason and period of suspension in advance on the app initial screen or service notices. However, if there are unavoidable circumstances where advance notice is not possible, post-notice may be made.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• When necessary for system operation, such as regular system inspection, server expansion or replacement, network instability, etc.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• When it is impossible to provide normal services, such as power outages, service facility failures, service overload, or maintenance or inspection of facilities of key telecommunications carriers.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Circumstances beyond TETHERROCK’s control, such as war, incident, natural disaster, or similar national emergency.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) TETHERROCK provides services through the Website and App. If you change your mobile device or number, or roam overseas, you may not be able to use some or all of the content, and for services used through the network, background work may be performed. TETHERROCK is not responsible for the user's inability to use the service or the imposition of additional charges due to this.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) Users must pay attention to the following when using the service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• We strongly recommend that you ensure the security of the computer used to use the Services and log in to the Services using the latest version of the Google Chrome browser in accordance with web page display and safety considerations.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• TETHERROCK does not recommend users to trade or invest in virtual assets. Please note that this service allows users who wish to trade virtual assets unrelated to this service to receive transaction convenience through this service. TETHERROCK and this service are not related to the user's virtual asset trading or investment, and do not assume any warranty or liability for the user's virtual asset trading. When users trade virtual assets on affiliated exchanges, they may generally face various risks, including the following, which are unrelated to TETHERROCK and this service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Policy risk: Users of affiliated exchanges may suffer losses due to changes in laws or national policies that may affect normal trading of virtual assets.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Compliance risk: Affiliated exchange users may incur losses if their virtual asset transactions violate laws or regulations.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Investment return risk: The virtual asset market has unique characteristics. Since virtual asset prices fluctuate very widely, users may incur losses in the market.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Transaction Risk: A user's successful transfer depends on the mutual consent of the transfer parties, and the affiliated exchange does not promise or guarantee a successful transfer.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Force Majeure Risk: When natural disasters, wars, strikes, cyber-attacks and other unforeseen, unavoidable and powerful circumstances occur, the affiliated exchange's services may not operate normally, which may result in losses for users. TETHERROCK is not responsible for any losses suffered by users due to force majeure.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Delisting risk: If a person involved in a virtual asset project goes bankrupt, is liquidated or dissolved, violates laws and regulations, or at the request of a project party, the affiliated exchange may delist the virtual asset, resulting in losses to users.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Technical risk: The possibility of technical glitches during virtual asset trading is slim, but such a possibility cannot be ruled out. If that happens, your interests may be affected.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Operational risk: Users may be at risk due to operational errors, such as transfers to incorrect accounts, violations of operational regulations, etc.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Account Freeze Risk: If you default or are suspected of a crime, your account may be frozen or forcibly confiscated by law enforcement.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) TETHERROCK provides the Services on a current status and availability basis. TETHERROCK MAKES NO WARRANTIES, EXPRESS OR IMPLIED, ABOUT THE SERVICES, INCLUDING BUT NOT LIMITED TO THE APPLICABILITY, ERRORS OR OMISSIONS, UNLIABILITY, ACCURACY, RELIABILITY OR SUITABILITY OF THE SERVICES FOR A PARTICULAR PURPOSE. At the same time, TETHERROCK makes no promises or guarantees regarding the validity, accuracy, reliability, quality, stability, integrity and timeliness of the technology and information related to the Services.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(f) Users must determine the authenticity, legality and validity of related virtual assets and/or information at their own discretion and bear all liabilities and losses arising therefrom at their own expense. Unless expressly required by law, TETHERROCK has no obligation to pre-screen any user data, digital asset information, trading activity and other matters related to trading.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>9. Service changes and suspensions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK may change the Service as operational or technical needs require to provide smooth Service. The relevant information will be announced within the service before changes are made, but in unavoidable cases such as bugs, error corrections, emergency updates, etc., or if the changes do not constitute a significant change, the notice may be made after the fact.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK may discontinue the service if it is difficult to continue the service due to serious business reasons such as business transfer, division, merger, etc., business closure, content provision contract expiration, or service profit deterioration. In this case, the date and reason for suspension will be announced and notified to the user by the method of Article 3 (a) at least 30 days prior to the suspension date.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>10. Provision of advertising</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) In connection with the operation of the service, TETHERROCK may post advertisements within the service and transmit advertising information to users who have agreed to receive it. Members may refuse to receive the service at any time, and TETHERROCK will stop sending advertising information upon refusal.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) You may be connected to advertisements or services provided by others through banners or links within the TETHERROCK service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) If you are connected to an advertisement or service provided by another person pursuant to paragraph (b), the area is not a TETHERROCK service area, so TETHERROCK does not guarantee reliability, stability, etc., and is not responsible for any resulting damage to users. .</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>11. Intellectual property rights</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) All content produced by TETHERROCK and the intellectual property rights in the website/app logo, database, website/app design, text and graphics, software, photos, video, music, sound, software compilation, related source code and software; Copyright and other intellectual property rights in all intellectual work contained in the Services (including but not limited to small applications and scripts) belong to TETHERROCK. (b) Users must not use or allow others to use any data displayed on the service for commercial purposes by copying, transmitting, editing, publishing, performing, distributing, broadcasting, creating secondary works, etc., without the prior written consent of TETHERROCK. It's possible. (c) TETHERROCK stores, reproduces, modifies, publicly transmits, displays, and distributes all forms of information posted by users within the service for the purpose of exposure within the service, use of service promotion, service operation and improvement, and new service development research purposes. , can be used to create derivative works. (d) Users must not infringe on the intellectual property rights of others in connection with the use of the service. (e) If TETHERROCK determines that a post in the service posted or registered by a user falls under any of the prohibited acts stipulated in each subparagraph of Article 2 (c), TETHERROCK deletes or moves it or refuses to register it without prior notice. You can. (f) TETHERROCK's allowing users to use the Service shall in no way be construed as TETHERROCK's transfer or disposition of TETHERROCK's intellectual property rights related to the Service. (g) This article is valid while TETHERROCK operates the service and continues to apply even after the termination of the service agreement.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>12. Restrictions on service use</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK may restrict the use of the service if the user violates the obligations of these Terms and Conditions or interferes with the normal operation of the service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) If TETHERROCK takes measures to restrict use as set forth in the preceding paragraph, it will notify the user of the following matters.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Reasons for use restrictions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Details of use restrictions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• How to appeal against usage restrictions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) If a user wishes to object to TETHERROCK's use restriction measures, he/she must submit an objection request form stating the reason for objection to TETHERROCK in writing, e-mail, or an equivalent method within 14 days from the date of receiving notice of this measure.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) TETHERROCK will respond in writing, by email, or by an equivalent method to the reasons for the objection within 14 days from the date of receipt of the objection application in the preceding paragraph. However, if TETHERROCK is unable to respond within this period, it will notify you of the reason and processing schedule.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) TETHERROCK will take action if the reason for dissatisfaction is reasonable.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>13. Contract termination, etc.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) If the user does not wish to use the service at any time, he or she may terminate the service agreement by expressing his or her intention to TETHERROCK in writing, by email, or through a similar method (if a non-member user) or withdrawing membership (if a member).</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) Due to membership withdrawal, all service use information held by the member within the service will be deleted and cannot be recovered unless otherwise specified in the personal information processing policy, and the user will not be able to sign up again using the same email address.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) After withdrawal of membership, you can use the service as a non-member user. However, since rewards are a service provided only to members, if membership is lost due to withdrawal or termination of TETHERROCK's contract, all accumulated rewards will be forfeited.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) TETHERROCK may suspend use of the service or terminate the service agreement if there is a serious reason why the member cannot maintain the contract, such as engaging in an act prohibited by these Terms and Conditions or violating the law. The serious reasons in this paragraph include, but are not limited to, the cases of Article 2 (c) and Article 7 (b).</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) If the service agreement is terminated, TETHERROCK is obligated to deliver or disclose to the user or a third party any information regarding the user's account or service use, including the user's personal information, except as required by law. there is none.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(f) Termination of the Agreement under this Article shall not affect the damages under Article 14.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>14. Compensation for damages</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) If TETHERROCK or a user violates these terms and conditions and causes damage to the other party, the user is responsible for compensating for the damage.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) If there is no intention or negligence, there is no liability for damages as set forth in the preceding paragraph, but any operating error during the use of the service is considered the user's fault.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>15. TETHERROCK DISCLAIMER</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) TETHERROCK is not responsible for the provision of services if the services cannot be provided due to natural disasters or other force majeure.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK is not responsible for any damages incurred by users due to the reasons listed below. However, this does not apply in cases where it is caused by TETHERROCK's intention or negligence.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• If the service is unavailable due to repair, replacement, regular inspection, construction, or other similar reasons of service equipment</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Interference in service use due to the user’s intention or negligence</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• In cases where normal provision of this service is difficult, such as payback not being accumulated due to the user's violation of the affiliate exchange terms and conditions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Transactions or disputes that occur between users or between users and others through the service</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• If member information is leaked because the member does not manage account password, mobile device password, etc.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• If the user is unable to use all or part of the features of the service due to a change in mobile device, change in mobile device number, change in operating system (OS) version, overseas roaming, change in telecommunication company, etc.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Illegal access by a third party to the server or illegal use of the server or abnormal access interference using programs.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Other reasons for which TETHERROCK’s fault is not recognized and are equivalent to each item.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) The user is responsible for the reliability or accuracy of the information, data, facts, etc. posted by the user on the service, and TETHERROCK is responsible for any damages incurred by the user or a third party due to the inaccuracy or falsity of the content. We assume no responsibility whatsoever.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) TETHERROCK bears no responsibility for any damage caused to the user or a third party due to the user's intention or negligence in connection with the use of the app or service.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) TETHERROCK is not responsible for any damage resulting from users leaking or providing their personal information or information related to service use to others.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(f) TETHERROCK is not responsible for any damage caused by the user's use of materials obtained through the service. However, this does not apply in cases where it is caused by TETHERROCK's intention or negligence.</p>
                                </div>

                                <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>Action taken in case of violation of TETHERROCK Terms of Use</p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>1. Action in case of violation of law or violation of terms and conditions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) it is confirmed by a valid legal instrument from the administrative or judicial authority of your home country that you have violated or violated any law, or TETHERROCK determines, in its sole discretion, that your conduct has violated or violated any provision of these Terms and/or Rules; If suspected, TETHERROCK may take the following actions:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Post any such breach or alleged breach of the Terms and any action taken by TETHERROCK.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Delete such information without prior notice to you.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• impose penalties on you under these Terms and Conditions;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) TETHERROCK has the right to:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Unilaterally determine whether your conduct and its nature violates these Terms and Conditions.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• We will ask you to submit additional evidence.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Holds you liable for any adverse consequences that may arise if you fail to provide additional evidence.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) You shall be solely liable for any damages incurred by third parties arising in your name due to your alleged violation of the Terms.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) If it appears that you have violated applicable laws or these Terms and Conditions, resulting in loss to TETHERROCK or claims by third parties or penalties imposed by administrative authorities, you shall be liable for:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Indemnify TETHERROCK for all losses and/or costs incurred by TETHERROCK as a result, including reasonable attorneys' fees.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>2. Storage and submission of evidence</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>You must retain all evidence relating to your actions. You must bear the adverse consequences that may arise if you fail to provide additional evidence.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>3. Delete TETHERROCK post</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK reserves the right to remove any information you post on TETHERROCK without notice to you that we believe violates any law, violates the lawful rights of others, or violates these Terms.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>4. Others</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>In addition to the measures specified above, TETHERROCK may take additional measures as it deems necessary under the circumstances.</p>
                                </div>

                                <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>TETHERROCK may use your personal information for the following purposes:</p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>1. Fulfillment of legal obligations</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK must comply with various laws and regulations. For example, to comply with anti-money laundering laws, we verify the identity of users of TETHERROCK services. During this process, we collect and store your ID photo, and your account may be closed if you do not provide personal information as required by law.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>2. Prevention and enforcement of violations of terms and conditions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK monitors and prevents prohibited activities and prevents and investigates violations of these Terms and Conditions with third parties. In addition, we collect and analyze your account usage information and TETHERROCK service usage records in order to charge fees for service use.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>3. Prevent fraud and loss of funds</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK processes your personal information to prevent fraud and misuse of our services, and to protect you against account compromise and loss of funds.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>4. Service provision</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK accesses your personal information to provide you with services. Third parties, such as identity verification service providers, may collect personal information for identity verification and fraud prevention purposes.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>5. Provision of service-related information</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK sends you administrative or account-related information to inform you about your use of the Service, security issues or updates, and transaction-related information. This information is essential for using the service, and opting out may affect your use of the service.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>6. Provide customer support</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>If you contact TETHERROCK to resolve a problem or dispute, TETHERROCK will process your personal information. If you do not agree to the processing of your personal information, we may not be able to respond to your request or it may interfere with your use of the service.</p>
                                </div>

                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-m text-black-100 text-[15px]'>7. Others</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK may process your personal data in addition to the purposes set out above, where we obtain your consent or where we rely on this lawful basis.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK processes your personal information to provide you with a customized experience and provide services tailored to your needs. For example, we may grant you access to certain personal information maintained by a third party. If you do not consent to the processing of your personal information, your use of some or all TETHERROCK services may be restricted.</p>
                                </div>
                                <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>Facilitating corporate acquisitions, mergers or transactions;</p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>In the event of a corporate merger, acquisition, or other corporate transaction, we may process your account and your history of your use of the TETHERROCK Services. If you do not wish to have your personal data processed for these purposes, you may choose to close your account.</p>
                                </div>

                                <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>etc</p>
                                <div className='mt-[15px]'>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK may process your personal data in addition to the purposes set out above, where we obtain your consent or where we rely on this lawful basis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'privacy' && (
                        <div className='opacity-100'>
                            <p className='f-pretendard-m text-black-100 text-base mt-[10px]'>TETHERROCK Privacy Policy</p>
                            <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>**Breakthrough Labs (hereinafter “Company”)** establishes and discloses the personal information processing policy as follows in order to protect the personal information of TETHERROCK (hereinafter “Service”) users and process it quickly and smoothly in accordance with relevant laws and regulations. do.</p>
                            <p>Collection and use of personal information</p>

                            <div>
                                <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>1. Personal information items processed</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>The company collects and processes the following personal information items about service users. We do not process personal information of children under 16 years of age.</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(a) Information collected when registering as a member (required)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• phone number</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Email Address</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• password</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) Information collected when linking member exchange UID (required)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Exchange name</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Exchange UID</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Futures trading details on the relevant exchange (date, trading volume)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) Information collected when using non-member payback service (required)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Exchange name</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Exchange UID</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Futures trading details on the relevant exchange (date, trading volume)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) Usage records and device information (automatically generated and collected)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Your IP address and browser type;</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Language spoken</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Service usage records (visit records such as access date and time, payback/commission accumulation and application, withdrawal records, etc.)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Device information (mobile phone model name, OS name and version)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• cookie</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) Surveys and feedback (optional)</p>
                                <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK operates surveys and feedback provision channels to collect valuable opinions from users.</p>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>2. Deletion and destruction of personal information</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>If a user withdraws from the service or loses user eligibility, TETHERROCK deletes and destroys the user's personal information without delay and without separate request.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>However, in the following cases, personal information is retained for the period described below.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Violation of related laws: Investigation/inquiry in progress (until investigation/inquiry is completed)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Bond/debt relationship: Until the relevant relationship is settled.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Prevent re-registration: Email address (until service ends)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Payback/Commission: 5 years (personal identification information is masked from the date of withdrawal application)</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>3. Other reasons for preservation</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Personal information related to service use (log records): 3 months (Communication Secrets Protection Act)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Consumer complaint/dispute resolution record: 3 years (Act on Consumer Protection in Electronic Commerce, etc.)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Display advertisement record: 6 months (Act on Consumer Protection in Electronic Commerce, etc.)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Tax-related ledgers and supporting documents: 5 years (Framework National Tax Act)</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>4. TETHERROCK service provision and operation</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'p>(a) Membership management:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Confirmation and processing of membership applications</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Maintain and manage membership;</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Check and manage service usage details</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Respond to service-related notices and inquiries</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Support communication and collaboration between members</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(b) To prevent fraud and abuse:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Detect and prevent fraud and abuse during service use</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Protect your account and prevent loss of funds</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Stable service operation and user protection</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(c) Provision of Services:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Providing and improving customized services</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Providing customized content and functions to users</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Customer support and service usage guidance</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(d) Providing service-related information:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Provision and guidance of information related to service use</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Notice of service updates and changes</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Providing event and promotion information</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Respond to inquiries related to service use</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(e) Customer Support:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Handling inquiries and complaints related to service use</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Solving problems related to using the service</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Improved customer satisfaction</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(f) Enhanced security:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Strengthening and managing service and system security</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Prevent illegal access and malicious activities</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Protection of user information and prevention of personal information </p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(g) Service improvement and development:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Analyzing and improving service usage patterns</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• User satisfaction survey and analysis</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Develop new services and features</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>(h) Marketing and Advertising:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Providing user-tailored advertising and promotions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Service promotion and marketing activities</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Providing customized content to users</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>5. Provision of personal information to third parties</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK does not provide personal information to third parties except with the user's consent or in accordance with the law.</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>6. Scope of use and provision of personal information</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK uses or provides personal information to the extent reasonably related to the purpose for which it was originally collected.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>The criteria for judging this are as follows.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Relevance to the original collection purpose: Consider whether there is a connection between the original collection purpose and the additional use/provision purpose.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Predictability: We predict the possibility of additional use or provision, taking into account personal information processing practices and technology levels.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Whether user interests are violated: The possibility and degree of violation of user interests is considered in relation to the additional purpose of use.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Ensure security: Make sure you have taken security measures such as pseudonymization or encryption.</p>
                                </div>

                                <di>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>7. Cookie Use Policy</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK uses cookies to provide customized services to users. Cookies are a small amount of information that stores and retrieves website usage information, and are stored on the user's computer hard disk.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK uses cookies for the following purposes:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• User analysis: Access frequency, visit time, usage patterns, etc. are analyzed and used to improve services and develop new services.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Customized service: We provide content and advertisements tailored to users’ interests.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Security Management: We securely manage service use and access.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Users can reject or restrict the use of cookies through their browser settings. However, if you refuse to use cookies, your use of some services may be restricted.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>How to set cookies:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Delete Advertising ID</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Android: Settings &gt; Privacy &gt; Advertising &gt; Delete Advertising ID</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• iPhone: Settings &gt; Privacy &gt; Tracking &gt; Turn off Allow apps to request tracking.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Block cookies</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Internet Explorer: Tools &gt; Internet Options &gt; Privacy &gt; Settings &gt; Block Cookies.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Microsoft Edge:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Settings &gt; Privacy, search and services</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Always use Strict Tracking Protection when browsing InPrivate.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Privacy &gt; Send Do Not Track Request</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Settings &gt; Cookies and site permissions</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Cookies and saved data &gt; Manage and delete cookies and site data</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Allow sites to store and read cookie data (recommended) Off</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Chrome:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Settings &gt; Privacy &amp; Security &gt; Privacy &amp; Security</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Choose how you want to block third-party cookies</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Additional tips:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• The location and terminology of each browser settings menu may vary depending on the version.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Blocking all cookies may limit some site functionality.</p>
                                </di>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>8. Destruction of personal information</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>When personal information is no longer needed, it is destroyed without delay according to the following procedures.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>1. Standards for destruction of personal information</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Expiration of retention period: Personal information is destroyed when the retention period expires.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Achievement of processing purpose: Personal information is destroyed when the purpose of processing is achieved.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Withdrawal of user consent: If the user withdraws consent, it will be destroyed.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• To meet other legal requirements: If we no longer need to retain your personal information in accordance with legal requirements, we will destroy it.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>2. Personal information destruction procedure</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Reason for destruction occurs: Select personal information to be destroyed.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Manager approval: The personal information protection manager approves destruction.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Execute destruction: Personal information is destroyed in a secure manner.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>3. How to destroy personal information</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Electronic files: Destroyed using technical methods so that the records cannot be reproduced.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Paper documents: shred in a shredder or incinerate.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>4. Additional information</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Some personal information may be retained beyond the destruction period in accordance with legal requirements.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Personal information whose retention period has expired is moved to a separate database or storage location and managed safely.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>8. TETHERROCK is taking the following measures to protect users’ personal information.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Management measures: establishment and implementation of internal management plan, regular employee training, etc.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Technical measures: Technical measures against hacking, etc., encryption of personal information, management of access rights to personal information processing system, storage of access records, prevention of forgery and alteration, etc.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Physical measures: Access control to server rooms, data storage rooms, etc.</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-m text-black-100 text-[15px] mt-[15px]'>10. User rights, obligations and methods of exercise</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Users may exercise the following rights at any time</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• View personal information: You can check your personal information.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Correction of personal information: If your personal information is inaccurate or has changed, you can request correction.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Delete personal information: You can delete your personal information.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Suspension of processing of personal information: You can temporarily suspend processing of your personal information.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Users can exercise their rights by themselves or through their legal representative or delegate.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• How to exercise your rights:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Email: Please email [admin@tetherrock.io].</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Processing time: TETHERROCK will take action without delay.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Note: The exercise of some rights may be restricted in accordance with relevant laws such as the Personal Information Protection Act.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Restrictions on use of services: Suspension of processing of personal information or withdrawal of consent may mean restrictions on use of services or termination of service agreements. </p>
                                </div>

                                <div className='f-pretendard-r text-black-100 text-[13px] mt-[15px]'>EU User Privacy Additional Terms</div>

                                <div>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Applies to EU residents only.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Transfer of personal data: may be transferred outside the EU with the user's consent or subject to appropriate GDPR safeguards (contractual conclusion, etc.).</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• EU User Rights:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Right of access</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Right to rectification</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Right to erasure</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Right to restriction of processing</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Right to object to processing</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Right to movement</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Right to withdraw consent</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Right to lodge a complaint with a supervisory authority</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>TETHERROCK may revise its privacy policy in accordance with changes in laws and services.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Any changes will be posted at least 7 days in advance.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>If there are any significant changes to user rights, we will notify you at least 30 days in advance.</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>The changed personal information processing policy will take effect on the effective date stated.</p>
                                </div>

                                <div>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>Personal Information Protection Officer:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Name: Park Geun-hyung</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Position: Information Manager</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Contact: admin@tetherrock.io</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>inquiry:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Personal information protection-related inquiries, complaint handling, damage relief, etc.: admin@tetherrock.io</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>• Personal information infringement relief, reporting, and consultation:</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Personal Information Dispute Mediation Committee: 1833-6972 (www.kopico.go.kr)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Personal Information Infringement Reporting Center: 118 (privacy.kisa.or.kr)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o Supreme Prosecutor’s Office: 1301 (www.spo.go.kr)</p>
                                    <p className='f-pretendard-r text-black-100 text-[13px] mt-[10px]'>o National Police Agency: 182 (ecrm.cyber.go.kr)</p>
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