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
import { useTranslation } from 'react-i18next';

function Services(){
    const {t} = useTranslation();

    return(
        <div className='services-body'>
            <div className='services-intro'>
                <div className='services-intro-title'>
                    <h1>{t('service_title1')} <br/>{t('service_title2')}</h1>
                </div>
                <div className='services-intro-sub'>
                    <h2>{t('service_sub1')}<br/>{t('service_sub2')}<br/>{t('service_sub3')}</h2>
                </div>
            </div>
            <div className="services-container">
                <Card
                    image={image}
                    title={t('big_data')}
                    description={t('big_data_desc')}/>
            
                <Card
                    image={aiImage}
                    title={t('mach_learn')}
                    description={t('mach_learn_desc')}/>
           
                <Card
                    image={iotImage}
                    title={t('aiot')}
                    description={t('aiot_desc')}/>
           
                <Card
                    image={cloudImage}
                    title={t('web_mobile')}
                    description={t('web_mobile_desc')}/>
          
                <Card
                    image={embeddedImage}
                    title={t('emb_soft')}
                    description={t('emb_soft_desc')}/>
          
                <Card
                    image={softwareImage}
                    title={t('qa_st')}
                    description={t('qa_st_desc')}/>
           
                <Card
                    image={globalImage}
                    title={t('gbes')}
                    description={t('gbes_desc')}/>
            </div>
        </div>
       
    );
}

export default Services;