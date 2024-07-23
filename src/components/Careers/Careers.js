import React, { useState, useRef } from 'react';
import './Careers.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import {jobData} from './jobData.js';


function Careers() {
  const [openIndex, setOpenIndex] = useState(null);
  const arrowRef = useRef(null);
  const freshGradRef = useRef(null);
  const expRef = useRef(null);

  const handleArrowClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    const navbarHeight = 100; 
    window.scrollTo({ top: ref.current.offsetTop - navbarHeight, behavior: 'smooth' });
  };

  const handleDisclosureToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="career-body">
      <div className="career-intro">
        <div className="career-intro-text">
          <h1>Our People</h1>
          <h2>
            Global IT Excellence is the basic principle upon which AWS is built.
            <br />
            But it’s our people who make us strong.
          </h2>
          <h3>JOIN US!</h3>
          <KeyboardArrowDownIcon
            className="career-intro-btn"
            sx={{ fontSize: 70 }}
            ref={arrowRef}
            onClick={() => handleArrowClick(freshGradRef)}
          />
        </div>
      </div>
      <div className="career-freshgrad" ref={freshGradRef}>
        <div className="career-freshgrad-content">
          <div className="career-freshgrad-text">For Fresh Graduates</div>
          <h3>WE PROVIDE A FIVE-MONTH INTENSIVE TRAINING PROGRAM</h3>
          <p>
            The AWS Center for Technology Incubation (ACTION) Training Program is
            tailored to bridge the knowledge gained from the Academe with the
            actual needs of the global IT industry.
            <br />
            Its focus is to develop fresh graduates (or with less than 2 years of
            IT experience) into AWS engineers who have balanced capability in
            both technical and business skills, on top of being proficient in
            English.
            <br />
            Nihongo proficiency training is also provided to communicate with
            Japanese clients.
          </p>
          <img alt="action" src={require('../../assets/action.png')} />
          <KeyboardArrowDownIcon
            className="career-freshgrad-btn"
            sx={{ fontSize: 70 }}
            ref={arrowRef}
            onClick={() => handleArrowClick(expRef)}
          />
        </div>
      </div>
      <div className="career-experienced" ref={expRef}>
        <div className="career-background"></div>
        <div className="career-experienced-content">
          <div className="career-experienced-text">For Experienced Candidates</div>
          <div className="box-group" id="accordion">
            <div className="box-main-title">
              <span>We are Currently in Need of...</span>
            </div>
            {jobData.map((job, index) => (
              <Disclosure
                as="div"
                key={index}
                className={`accordion ${openIndex === index ? 'accordion--open' : ''}`}
                onClick={() => handleDisclosureToggle(index)}
              >
                <DisclosureButton className="panel-box">
                  {job.title}
                </DisclosureButton>
                <DisclosurePanel className="accordion-body">
                  <div className="car-loc">
                    <div className="loc-heading">Location</div>
                    <div className="loc-cont">{job.location}</div>
                    <hr className="style-two" />
                    <div className="car-dnr">
                      <div className="dnr-heading">Duties and Responsibilities</div>
                      <div className="dnr-cont">
                        <ul>
                        {job.duties.map((duty, i) => (
                              <li key={i}>
                                {duty.description}
                                {duty.ie && (
                                  <ol>
                                    {duty.ie.map((item, j) => (
                                      <li key={j}>{item}</li>
                                    ))}
                                  </ol>
                                )}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <hr className="style-two" />
                    <div className="car-rqmt">
                      <div className="rqmt-heading">Education / Experience / Skill / Training Required</div>
                      <div className="rqmt-cont">
                        <ul>
                          {job.requirements.map((requirement, i) => (
                            <li key={i}>{requirement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button className='contact-us' href='/contact'>Contact Us</button>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
        <div className="reminder">
            <p>All applicants willing to work in one of our offices in Makati, Alabang or Cebu are invited to send their application letter, 
                resume, transcript of records and recent 2x2 picture to <b>awshr@awsys-i.com</b> stating the position they are interested in.</p>
        </div>
      </div>
    </div>
  );
}

export default Careers;
