import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, text, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div option={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          <p className='text-white text-[12px] text-center'>{text}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='select-none'>
        <p className={styles.sectionSubText} style={{color: '#000'}}>About me</p>
        <h2 className={styles.sectionHeadText} style={{textShadow: '0 0 10px #000'}}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] select-none' style={{color: '#000'}} >
        Experienced software developer skilled in full-stack programming, continuously seeking new challenges for personal growth. Fast learner with a passion for technology.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 select-none'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} text={service.text} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");