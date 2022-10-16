import React from 'react';
import Header from "../components/Header";


const MainPage = () => {

<Header />

return(<>
  <div className='ai01'>
  <img src='../images/bnr_slide02.webp' />
  <div className='serchwrap'><img className='searchicon' src='../images/icon_search.png' />채용 중인 포지션 보러가기</div>
  <div className='articel01'>wanted ai가 제안하는 합격률 높은 포지션</div>
  <p className='subtitle01'>포지션 전체보기 ></p>
</div>

<div className='ai02'>
    <img src='../images/bnr_company01.webp' />
    <div>마이소호 서비스 개발</div>
    <p>코리아센터</p>
    <p>서울 한국</p>
    <p>채용보상금 1,000,000원</p>
    </div>

<div className='ai03'>
    <img src='../images/bnr_company02.webp' />
    <div>시니어 웹 개발자 (PHP/Java)</div>
    <p>마켓보로</p>
    <p>경기 한국</p>
    <p>채용보상금 1,000,000원</p>
</div>

  <div className='ai04'>
    <img src='../images/bnr_company03.webp' />
    <div>백엔드 개발자(3년 이상)</div>
    <p>모두의연구소</p>
    <p>서울 한국</p>
    <p>채용보상금 1,000,000원</p>
</div>

<div className='ai05'>
    <img src='../images/bnr_company04.webp' />
   <div>시니어 소프트웨어 엔지니어 (프론트엔드 개발자, 5년 이상)</div>
   <p>탭조이코리아(Tapjoy)</p>
   <p>서울 한국</p>
   <p>채용보상금 1,000,000원</p>
</div>

 

<div>더 많은 컨텐츠 보기</div>

</>

)
}

export default MainPage;
