import React from 'react';
import "./Header.css"

const Header = () => {

  return (
    <>
      <div className="header   h-[56px] w-full bg-[#2419BE] flex justify-start items-center">
        <span>
          <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.150012 12.6643L0 12.7834V29.0841H7.13233V16.2021L16.0034 9.11982L24.8677 16.2089V29.0909H32V12.7834L15.9761 0L0.150012 12.6643Z" fill="white" />
          </svg></span>
      </div>
    </>
  );
}

export default React.memo(Header);
