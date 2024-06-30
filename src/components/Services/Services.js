import React from 'react';
import './Services.css';
import Card from './Card/Card';
import image from '../../assets/stock-image.jpg';
import aiImage from '../../assets/AI.webp';
import iotImage from '../../assets/iot.jpg';
import cloudImage from '../../assets/cloud.jpg';
import embeddedImage from '../../assets/embedded.jpg';
import softwareImage from '../../assets/software.jpg';
import globalImage from '../../assets/global.jpg';

function Services(){
    return(
        <div className='services-body'>
            <div className='services-intro'>
                <div className='services-intro-title'>
                    <h1>Global Business <br/>Services and Solutions</h1>
                </div>
                <div className='services-intro-sub'>
                    <h2>In recent years we have been promoting unique solutions using 3A technology <br/>in addition to embedded, business system development
                        , and quality assurance <br/>that boast a track record of more than 30 years.</h2>
                </div>
            </div>
            <div className="services-container">
                <Card
                    image={image}
                    title="Big Data Analytics"
                    description="We have data analysts ready to meet your needs for marketing analytics,
                    in-process anomaly identification, market impediment / complaint analysis, geospatial analysis, among others."/>
            
                <Card
                    image={aiImage}
                    title="Machine Learning / AI"
                    description="Technology has come a long way, with solutions for various problems continuously being rolled out in the market, 
                    something that we see in the area of AI Assistants."/>
           
                <Card
                    image={iotImage}
                    title="AIoT / Edge IoT GPU Computing"
                    description="We support the development of products that make use of nVidia GPU computing technology with focus on the 
                    Intelligent Video Analytics (IVA) section of Jetson."/>
           
                <Card
                    image={cloudImage}
                    title="Web / Cloud / Mobile Application Development"
                    description="We have highly qualified engineers who can create custom software from 
                    scratch or modify existing systems in accordance with your needs."/>
          
                <Card
                    image={embeddedImage}
                    title="Embedded Software & Application Development"
                    description="Since our inception, we have actively pursued product development across numerous industries. By adapting quickly to the product development cycle of the customer, 
                    we aim to ensure quality and reduce delivery times."/>
          
                <Card
                    image={softwareImage}
                    title="Quality Assurance / Software Testing / Test Automation"
                    description='We have "Japanese quality" level services at cost-effective rates using a hybrid delivery model that successfully combines onshore and offshore work with ISTQB-certified test professionals.'/>
           
                <Card
                    image={globalImage}
                    title="Global Business Expansion Support"
                    description="We support to secure human resources, provide technology, and research global market trends, 
                    including system development and customization for target markets."/>
            </div>
        </div>
       
    );
}

export default Services;