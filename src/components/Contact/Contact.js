import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import SignpostIcon from '@mui/icons-material/Signpost';
import PublicIcon from '@mui/icons-material/Public';
import './Contact.css'
import { useTranslation } from 'react-i18next';

function Contact(){
    const {t} = useTranslation();

    return(
        <div className = 'contact-body'>
            <div className = 'contact-mapph'>    
                <div className = 'contact-newbusiness-container'>
                    <div className='business-wrap'>
                        <p>{t('new_business')}</p>
                        <h3>business@awsys-i.com</h3>
                    </div>
                    <div className='careers-wrap'>
                        <p>{t('car_con')}</p>
                        <h3>awshr@awsys-i.com</h3>
                    </div>
                    <div className='global-wrap'>
                        <PublicIcon fontSize = 'large'></PublicIcon>
                        <p>{t('global_offices')}</p>
                    </div>
                </div>
            </div>
            <div className = 'contact-offices' >
                <h1>{t('ph_offices')}</h1>
            </div>
            <div className='contact-awsys'>
                <h1>{t('awsys_cont')}</h1>
                <h2>{t('awsys_mnl')}</h2>
                    <div className='icon-text'> 
                        <SignpostIcon/><p>5th Floor, ATC BPO 1, Madrigal Avenue, Alabang Town Center, Ayala Alabang, 1770 Muntinlupa City, Philippines</p>
                    </div>
                    <div className='icon-text'>     
                        <PhoneIcon /><p>+63(2) 8807-5521</p>
                    </div>
                    <div className='icon-text'>    
                        <PhoneIcon/><p>+63(2) 8807-0058</p>
                    </div>
                <h2>{t('awsys_cebu')}</h2>
                    <div className='icon-text'>     
                        <SignpostIcon/><p>5th Floor, PDI Condominium, Archbishop Reyes Avenue cor. Panis Street, 6000 Banilad Cebu City, Philippines</p>
                    </div>
                    <div className='icon-text'>   
                        <PhoneIcon/><p>+63(32) 231-0321</p>
                    </div>
                    <div className='icon-text'>  
                        <PhoneIcon/><p>+63(32) 232-0310</p>
                    </div>
            </div>
            <div className='contact-awsol'>
            <h1>{t('awsol_cont')}</h1>
                <h2>{t('awsol_mnl')}</h2>
                    <div className='icon-text'>    
                        <SignpostIcon/><p> 3rd Floor, Multinational Bancorporation Centre, 6805 Ayala Avenue, 1226 Makati City, Philippines</p>
                    </div>
                    <div className='icon-text'>    
                        <PhoneIcon/><p>+63(2) 8889-5070</p>
                    </div>        
                    <div className='icon-text'>     
                        <PhoneIcon/><p>+63(2) 8889-1800</p>
                    </div>
                <h2>{t('awsol_cebu')}</h2>
                    <div className='icon-text'>    
                        <SignpostIcon/><p>6th Floor, i1 Building, Cebu IT Park, Apas, 6000 Cebu City, Philippines</p> 
                    </div>    
                    <div className='icon-text'>    
                        <PhoneIcon/><p>+63(32) 268-6405</p> 
                    </div>   
                    <div className='icon-text'>   
                        <PhoneIcon/><p>+63(32) 268-5462</p>
                    </div>
                <h2>{t('awsol_alb')}</h2>
                    <div className='icon-text'>    
                        <SignpostIcon/><p>5th Floor, ATC BPO 1, Madrigal Avenue, Alabang Town Center, Ayala Alabang, 1770 Muntinlupa City, Philippines</p>
                    </div>    
                    <div className='icon-text'>    
                        <PhoneIcon/><p>+63(2) 8816-7741</p>
                    </div>
                    <div className='icon-text'>    
                        <PhoneIcon/><p>+63(2) 8356-2313</p>
                    </div>
            </div>
        </div>
    );
}

export default Contact;