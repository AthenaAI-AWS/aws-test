import React, {useState} from 'react';
import './About.css';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const events = {
  1993: "Established as APTi-Philippines, Inc., the Research and Development (R&D) arm of Advanced Peripherals Technologies, Inc. (APTi) of Japan (a joint venture between IBM Japan and Toshiba TEC Corp.). The main business was development of firmware, microcode, device drivers, and software utilities for workstation printers and related peripherals.",
  1995: "Cebu Extension Office was established",
  1998: "EXPANSION OF BUSINESS AREAS Quality Assurance and software testing for mobile devices POS middleware development Business application and solutions development Firmware and device driver development for multifunction printers",
  2003: "Establishment and inauguration of the company's Training Center, AWS' Center for Technology Incubation (ACTION)",
  2005: "Establishment of Japan Company AWS, Inc.",
  2006: "Company name is changed to Advanced World Systems, Inc. Establishment of Advanced World Solutions, Inc. (a separate company under PEZA) in Makati, which focuses on business applications development.",
  // Add more events here
};

const years = Array.from({ length: 31 }, (_, i) => 1993 + i);

function About() {
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <div className='hello-body'>
      <div className='about-intro'>
        <div  className='about-intro-text'>
          <h2>Welcome to the Advanced World Systems, Advanced World Solutions webpage,
            trusted IT offshore leader engaged in consulting, technology, and outsourcing solutions.
            We are part of the Ubicom group of companies operating in Japan, the Philippines, China, and USA.</h2>
        </div>
      </div>
      <div className='about-president'>
        <div  className='about-president-message'>
          <p>
            The Internet has revolutionized society beyond being able to access information given a device; both business and personal life are now heavily 
            dependent on the Internet. In addition, AI, which has achieved significant advancements in recent years, has already had a greater impact on 
            business and personal life than the Internet did when it was first introduced. In this rapidly changing world, continued reliability, stability, and 
            responsiveness are becoming increasingly important factors in the delivery of various services.</p>
          <p>
            For more than 30 years, Advanced World Systems / Advanced World Solutions has been based in the Philippines. 
            Anchored on our core philosophy of "Global IT Excellence", we have continuously improved our technology and our capabilities to provide a wide range of services to customers. 
            We have focused on earning the trust not only of Japanese companies but also of multinational corporations by continuously improving our technical skills as we worked on 
            various projects for our clients.</p>
          <p>
            We were established in the early 1990s as the Philippine-based offshore R&D division of a joint venture company between IBM Japan and Toshiba TEC, 
            and we have steadily expanded our services and access to countries around the world. We provide high quality and high value services through 
            our continuous efforts in software development and quality assurance – from firmware development, to standalone software applications, to business 
            and mobile applications, to AI services and solutions.</p>
          <p>
            Hundreds of young bilingual engineers (capable in English and Japanese), with diverse technical skills who continuously acquire new skills while improving 
            current capabilities,continue to be the driving force of our organization. Exposure to world-class clients, projects and business processes with global clients
            in both onsite (customer’s site) and offshore contribute to achieving our core philosophy. Our recent efforts to work with clients to maximize the advantages of AI
            to grow their businesses have helped us gain more skills and experiences which we know will help us become a partner of choice for global businesses. 
            We will continue to challenge ourselves to remain competitive in an ever-changing connected world, discovering new ways to make people’s lives better through technology, 
            contributing to a better society for all of humanity.</p>
          <p>
          <b>Katsumi Murayama</b><br/>
          President and CEO</p>  
        </div>
      </div>
      <div className='about-history'>
        <div className='about-history-box'>
          <h2>Our History</h2>
          <div className='about-history-timeline'>
            <KeyboardArrowLeftRoundedIcon className='left-arrow-circle-btn' alt="Left" onClick={() => setSelectedYear((prev) => Math.max(years[0], prev - 1))} />
            {years.map(year => (
              events[year] ? <div key={year} className='year' onClick={() => setSelectedYear(year)}>{year}</div> : <div key={year} className='year empty' />
            ))}
            <KeyboardArrowRightRoundedIcon className='right-arrow-circle-btn' alt="Right" onClick={() => setSelectedYear((prev) => Math.min(years[years.length - 1], prev + 1))} />
          </div>
          <div className='about-history-description'>
            <h1>{selectedYear}</h1>
            <p>{events[selectedYear] || "No events for this year."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
