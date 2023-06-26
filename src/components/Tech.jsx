import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import BallCanvas from './canvas/Ball';

const Tech = () => {
  const isIOSorComputer = /iPad|iPhone|iPod|Mac|Windows/.test(navigator.userAgent) && !window.MSStream;
  const displayedTechnologies = isIOSorComputer ? technologies.slice(0, 20) : technologies.slice(0, 20);

  return (
    <div className="select-none">
      <h2 className={styles.sectionHeadText} style={{ textShadow: '0 0 10px #000', paddingLeft: '1%', paddingBottom: '5%' }}>Technologies I have experience with</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {displayedTechnologies.map((technology) => (
          <div className='w-36 h-36 flex flex-col items-center' key={technology.name}>
            {isIOSorComputer ? (
              <BallCanvas icon={technology.icon} />
            ) : (
              <img src={technology.icon} alt={technology.name} className='w-24 h-24' />
            )}
            <h2 className='mt-5 text-secondary text-[16px] max-w-3xl leading-[30px] select-none' style={{ color: '#000' }}>{technology.name}</h2>
          </div>
        ))}
      </div>
      <h2 className={styles.sectionHeadText} style={{ textShadow: '0 0 10px #000', textAlign: 'center', paddingTop: '5%' }}>And more...</h2>
    </div>
  )
}

export default SectionWrapper(Tech, "tech");
