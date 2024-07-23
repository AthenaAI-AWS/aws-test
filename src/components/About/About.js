import React, {useState} from 'react';
import './About.css';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'react-i18next';

const events = {
  1993: "Established as APTi-Philippines, Inc., the Research and Development (R&D) arm of Advanced Peripherals Technologies, Inc. (APTi) of Japan (a joint venture between IBM Japan and Toshiba TEC Corp.). The main business was development of firmware, microcode, device drivers, and software utilities for workstation printers and related peripherals.",
  1995: "Cebu Extension Office was established",
  1998: "EXPANSION OF BUSINESS AREAS: Quality Assurance and software testing for mobile devices, POS middleware development, Business application and solutions development Firmware and device driver development for multifunction printers",
  2003: "Establishment and inauguration of the company's Training Center, AWS' Center for Technology Incubation (ACTION)",
  2005: "Establishment of Japan Company AWS, Inc.",
  2006: "Company name is changed to Advanced World Systems, Inc. Establishment of Advanced World Solutions, Inc. (a separate company under PEZA) in Makati, which focuses on business applications development.",
  2007: "AWS wins 3 Grand Prize Awards at the e-Services Philippines 2007. Most Creative Application of the Year for its “High Definition Clip Station” Offshore Project of the Year for the “Manufacturing System Development Project for SCM, Inc.” “AWS Center for Technology Incubation (ACTION)” took home the Outstanding Company Program.",
  2008: "Establishment of Advanced World Solutions, Ltd. in Hong Kong Creation of Osaka branch office AWS wins again at the e-Services Philippines 2008 Awards. AWS emerged as the Winner for the “Outstanding Client Application of the Year” category for the “ATM Systems Development Project for a Major Bank in Japan”",
  2009: "AWS Group achieved ISO/IEC 27001:2005 - the international standard for Information Security Management Systems (ISMS) certification.",
  2010: "Established AWS (Beijing), Ltd. in China",
  2012: "AIS, Co. Ltd, a leading medical solutions company, joined AWS group",
  2015: "Japan parent company's official name was changed from “AWS, Inc.” to “AWS Holdings, Inc.”",
  2016: "AWS Holdings, Inc. was listed on the Mother's market of Tokyo Stock Exchange. Awarded as Best Software Company Award at the 10th International ICT Awards. Recognized as ISTQB Platinum Partner.",
  2017: "AWS Holdings, Inc.'s name was changed to Ubicom Holdings Co., Ltd. and was promoted to the First Section of the Tokyo Stock Exchange. Awarded as Best Company of the Year for IT & Software Development at the 11th International ICT Awards.",
  2020: "Smoothly shifted to hybrid operations under the New Normal during the COVID-19 pandemic.",
  2023: "Celebrated AWS' 30th anniversary milestone.",
};

const years = Array.from({ length: 31 }, (_, i) => 1993 + i);
const ITEMS_PER_PAGE = 12;

function About() {
  const {t} = useTranslation();
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleYears = years.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < years.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className='hello-body'>
      <div className='about-intro'>
        <div  className='about-intro-text'>
          <h2>{t('intro_msg')}</h2>
        </div>
      </div>
      <div className='about-president'>
        <div  className='about-president-message'>
          <p>{t('pres1')}</p>
          <p>{t('pres2')}</p>
          <p>{t('pres3')}</p>
          <p>{t('pres4')}<br/>{t('pres6')}</p>
          <p>
          <b>{t('pres_name')}</b><br/>
          {t('pres5')}</p>  
        </div>
      </div>
      <div className='about-history'>
        <div className='about-history-box'>
          <h2>{t('history')}</h2>
          <div className='about-history-timeline'>
            <KeyboardArrowLeftRoundedIcon className='left-arrow-circle-btn' onClick={handlePreviousPage}/>
            <div className='about-history-years'>
              {visibleYears.map(year => (
                events[year] ? <div key={year} className='year' onClick={() => setSelectedYear(year)}>{year}</div> : <div key={year} className='year empty' />
              ))}
            </div>
            <KeyboardArrowRightRoundedIcon className='right-arrow-circle-btn' onClick={handleNextPage}/>
          </div>
          <div className='about-history-description'>
            <h1>{selectedYear}</h1>
            <p>{t(`events.${selectedYear}`)}</p>
          </div>
        </div>
      </div>
      <div className='about-company'>
        <div className='about-company-content'>
          <h1>{t('where_we')}</h1>
          <div className='about-company-content-row'>
            <div className='about-company-content-container'>
              <img alt="offices" src={require("../../assets/offices.png")}></img>
              <h2>{t('offices_num')}</h2>
              <h3>{t('offices')}</h3>
            </div>
            <div className='about-company-content-container'>
              <img alt="professionals" src={require("../../assets/professionals.png")}></img>
              <h2>{t('professionals_num')}</h2>
              <h3>{t('professionals')}</h3>
            </div>
            <div className='about-company-content-container'>
              <img alt="years" src={require("../../assets/experience.png")}></img>
              <h2>{t('yearsbus_num')}</h2>
              <h3>{t('yearsbus')}</h3>
            </div>
          </div>
          <button className='company-profile-btn'>{t('view_com')}</button>
        </div>
      </div>
      <div className='about-vision'>
        <div className='about-vision-text' >
          <h2>{t('vision')}</h2>
          <h1>{t('global_IT')}</h1>
          <h2>{t('in')}</h2>
          <div className='about-vision-row'>
            <div className='about-vision-row-contents' >
              <img alt="HumanResource" className='about-vision-row-img' src={require("../../assets/human-resource.png")}></img>
            </div>
            <div>
              <img alt="business" className='about-vision-row-img' src={require("../../assets/business.png")}></img>
            </div>
            <div>
              <img alt="technology" className='about-vision-row-img' src={require("../../assets/technology.png")}></img>       
            </div>
            <div>
              <img alt="innovation" className='about-vision-row-img' src={require("../../assets/innovation.png")}></img>      
            </div>
          </div>
        </div>
        <div className='about-vision-img-container'>  
          <img alt="earth" className='about-vision-img' src={require("../../assets/earth3.png")}></img>
        </div>
      </div>
      <div className='about-mission'>
        <div className='about-mission-text'>{t('mission')}</div>
        <div className='about-mission-context'>{t('mission_context')}</div>
        <div>
          <div className='about-mission-list'>
            <CheckIcon className='check-icon' sx={{ fontSize: 40 }}/><span>{t('mission1')}</span>
          </div>
          <div className='about-mission-list'>
            <CheckIcon className='check-icon' sx={{ fontSize: 40 }}/><span>{t('mission2')}</span>
          </div>
          <div className='about-mission-list'>
            <CheckIcon className='check-icon' sx={{ fontSize: 40 }}/><span>{t('mission3')}</span>
          </div>
          <div className='about-mission-list'>
            <CheckIcon className='check-icon' sx={{ fontSize: 40 }}/><span>{t('mission4')}</span>
          </div>
          <div className='about-mission-list'>
            <CheckIcon className='check-icon' sx={{ fontSize: 40 }} /><span>{t('mission5')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
