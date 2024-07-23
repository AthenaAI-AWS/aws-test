import React from 'react';
import './Home.css';
import svg1 from '../../assets/undraw.svg';
import svg2 from '../../assets/draw.svg';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className = "main-home">
      <div className = "home-intro"> 
        <div className = "home-intro-title">
          <h1>{t('intro_title')}</h1>
          <h2>{t('intro_subtitle')}</h2>
        </div>
      </div>
      <div className = "reason">
        <h1 className='treason'>{t('treason')}</h1>
        <div className = "reason-upper">
          <div className = "reason-upper-text">
            <p className ='halftitle'>{t('halftitle')}</p>
            <p className='halfmaintitle'>{t('halfmaintitle_upper')}</p>
            <p className='halftcontext'>{t('halftcontext_upper')}</p>
          </div>
           <img className = "reason-upper-img" src={svg1} alt="Man with Chart"></img>   
        </div>
        <div className = "reason-lower">
            <img className = "reason-lower-img" src={svg2} alt="Woman with Chart"></img> 
          <div className = "reason-lower-text">
            <p  className='halfmaintitle'>{t('halfmaintitle_lower')}</p>
            <p className='halftcontext'>{t('halftcontext_lower')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
