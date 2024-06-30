import React from 'react';
import './Home.css';
import svg1 from '../../assets/undraw.svg';
import svg2 from '../../assets/draw.svg';

function Home() {
  return (
    <div className = "main-home">
      <div className = "home-intro"> 
        <div className = "home-intro-title">
          <h1>GLOBAL IT EXCELLENCE</h1>
          <h2>Human Resources | Business | Technology | Innovation</h2>
        </div>
      </div>
      <div className = "reason">
        <h1 className='treason'>YOUR COMPETITIVE ADVANTAGE</h1>
        <div className = "reason-upper">
          <div className = "reason-upper-text">
            <p className ='halftitle'>THAT IS WHAT WE HAVE IN MIND.</p>
            <p className='halfmaintitle'>"Being on top is easy. Sustaining is another story."</p>
            <p className='halftcontext'>High-profile global companies trust Advanced World Systems / Advanced World Solutions to keep their competitive advantage.
                With its extensive years of software development practice coupled with highly efficient and well-rounded teams of engineers, 
                AWS creates cutting-edge business solutions designed to attain your business objectives for exponential success.
            </p>
          </div>
           <img className = "reason-upper-img" src={svg1} alt="Man with Chart"></img>   
        </div>
        <div className = "reason-lower">
            <img className = "reason-lower-img" src={svg2} alt="Woman with Chart"></img> 
          <div className = "reason-lower-text">
            <p  className='halfmaintitle'>"Thirty (30) years in the business prove our strength in various technologies, deep knowledge of major industries, 
              and excellence in quality service delivery only by engineering experts."</p>
            <p className='halftcontext'>Quality lies in adopting international standard processes in development. 
                Innovation is adapting and embracing technology to grow the business.<br/>
              Consistency in quality delivery and innovation makes AWS your strategic partner in global business. 
              Together, we sustain your competitive advantage.              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
