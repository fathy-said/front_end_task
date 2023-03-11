import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ImgModal from '../components/ImgModal/ImgModal';
import PaginationBox from '../components/PaginationBox/PaginationBox';
import Tables from '../components/Tables/Table';
import TitleGlobal from '../components/TitleGlobal/TitleGlobal';

const Home = () => {
  const [displayTypeModal, setDisplayTypeModal] = useState('none');
  const [imgModalData, setImgModalData] = useState([]);

  return (
    <>
      <main className='main relative'>
        <Header />
        <TitleGlobal pageTarget={'Dashboard'} pagePrev={'Home'} />
        <Tables {...{ setDisplayTypeModal, setImgModalData }} />
        <PaginationBox />
        <ImgModal  {...{ setDisplayTypeModal, displayTypeModal, imgModalData }} />
      </main>

    </>
  );
}

export default Home;
