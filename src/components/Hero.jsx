import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import EarthComponent from './EarthComponent';

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white select-none pb-4`}>
            Hi, I'm&nbsp;
            <span className='text-[#915eff]'>
              Edwin
            </span>
          </h1>
          {showText && (
            <TypingAnimation text="I'm a software developer at Tietoevry" color="#FFFFFF"/>
          )}
          {showText && (
            <TypingAnimation text="Passionate about creating innovative solutions" color="#FFFFFF" />
          )}
          {showText && (
            <TypingAnimation text="Currently living in Finland" color="yellow" />
          )}
          {showText && (
            <TypingAnimation text="Previously have lived in Italy" color="red" />
          )}
        </div>
      </div>
      <div className='relative h-screen top-40'> 
        <EarthComponent />
      </div>
    </section>
  );
};

const TypingAnimation = ({ text, color }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText((prevTypedText) => prevTypedText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 55);

      return () => {
        clearTimeout(typingTimeout);
      };
    }
  }, [currentIndex, text]);

  return (
    <p className={`${styles.heroSubText} mt-2 select-none`} style={{ color }}>
      {typedText}
    </p>
  );
};

export default Hero;
