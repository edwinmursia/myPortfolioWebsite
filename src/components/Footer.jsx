import React from 'react';
import { styles } from '../styles';
import { facebook, instagram, github_footer, linkedin } from '../assets';

const Footer = () => {

  return (
    <footer style={{backgroundColor: '#1d1836'}} className='select-none'>
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center">
          <div className="text-center mt-8" style={{width: '90%'}}>
            <h1 className={styles.sectionHeadText}>
              Thank you for visiting my website!
            </h1>
            <h2 className={styles.sectionSubText} style={{paddingTop: '5px'}}>I hope you enjoyed your stay!</h2>
            <h2 className={styles.footerSubText} style={{paddingTop: '10px'}}>
              For contacting purposes: mursia.edwin@gmail.com
            </h2>
          </div>
          <div className="flex justify-center pt-4 w-44 justify-between">
            <a href='https://fi.linkedin.com/in/edwin-mursia-2796b3193' target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn logo" className="w-10 h-10"/>
            </a>
            <a href='https://github.com/edwinmursia' target="_blank" rel="noopener noreferrer">
              <img src={github_footer} alt="Github logo" className="w-10 h-10 rounded-full"/>
            </a>
            <a href='https://www.instagram.com/edwinmursia/?hl=fi' target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram logo" className="w-10 h-10"/>
            </a>
            <a href='https://fi-fi.facebook.com/edwin.mursia' target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook logo" className="w-10 h-10"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
