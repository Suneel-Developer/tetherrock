import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='pt-10 pb-[70px] bg-[#f7f7f7]'>
            <div className='max-w-[1100px] w-[93.3%] mx-auto'>
                <Link href="/">
                    <img src="/assets/footer_logo.png" alt="footer_logo" className='w-[158px] h-8' />
                </Link>
                <div className="mt-5 flex lg:items-end flex-col lg:flex-row justify-between">
                    <div className="">
                        <p className="f-pretendard-b text-xs text-[#909090]">돌파구랩스</p>
                        <p className="f-pretendard-b text-xs text-[#909090]">주소 : 서울시 강남구 논현로 75길 15, 5층</p>
                        <p className="f-pretendard-b text-xs text-[#909090]">이메일 : admin@tetherrock.io</p>
                        <p className="f-pretendard-b text-xs text-[#909090]">사업자등록번호 : 566-10-02680</p>
                    </div>
                    <div className="mt-10 lg:mt-0 flex">
                        <a href="https://www.youtube.com/channel/UCaCap3SWo_4wQwYN1Ihq-8g">
                            <img className="w-9 h-9" src="/assets/youtube.png" alt="유튜브 아이콘" />
                        </a>
                        <a href="https://twitter.com/tetherrock">
                            <img className="w-9 h-9" src="/assets/twit.png" alt="트위터 sns 아이콘" />
                        </a>
                        <a href="https://www.instagram.com/tetherrock/">
                            <img className="w-9 h-9" src="/assets/insta.png" alt="인스타 sns 아이콘" />
                        </a>
                        <a href="https://tetherrock.tistory.com/">
                            <img className="w-9 h-9" src="/assets/tistory.png" alt="티스토리 블로그 아이콘" />
                        </a>
                        <a href="https://t.me/tetherrock">
                            <img className="w-9 h-9" src="/assets/t.png" alt="텔레그램 sns 아이콘" />
                        </a>
                    </div>
                </div>

                <div className='mt-[50px] flex flex-col lg:flex-row-reverse justify-between lg:items-center'>
                    <div>
                        <Link href="/terms" className='text-[#7c8389] f-pretendard-b text-xs text-opacity-60'>이용약관</Link>
                        <Link href="#" className='text-[#7c8389] f-pretendard-b text-xs text-opacity-60 ml-5'>개인정보처리방침</Link>
                    </div>
                    <p className='text-[#7c8389] f-pretendard-b text-xs text-opacity-60 mt-[18px]'>copyright © 2024 tetherrock All Right Reserved</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer