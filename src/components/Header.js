import React from 'react';
import './Header.scss';

const Header = () => {

  return (
    <div className="header">
      <div className='headerWrap'>
        <div className='left'>
          <img className="hambugerbar" src='./images/icon_hamburger.png' alt='햄버거이미지' />
          <img className="wanted" src='./images/icon_wanted.png' alt='원티드이미지' />
        </div>
        <div className='middle'>
          <ul>
            <li>채용</li>
            <li>이벤트</li>
            <li>직군별 연봉</li>
            <li>이력서</li>
            <li>커뮤니티</li>
            <li>프리랜서</li>
            <li>AI 합격예측</li>
          </ul>
        </div>
        <div className='right'>
          <img className="searchicon" src='./images/icon_search.png' alt='돋보기이미지' />
          <div className='userLogin'>
            회원가입/로그인
          </div>
          <div className='rightEnd'>
            기업 서비스
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
