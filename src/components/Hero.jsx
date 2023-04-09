import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative h-screen'>
      <div className={`${styles.paddingX} mx-auto sm:ml-2 md:ml-3 lg:ml-4 xl:ml-5 xs:pt-[20%] pt-[10%]`}>
        <div className={`xs:mt-5 mt-2 inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='xs:hidden flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-highlight'/>
            <div className='w-1 sm:h-56 h-40 green-gradient' />
          </div>
          <div className='xs:text-center sm:mt-2 text-start'>
            <p className={`${styles.heroHeadHi} font-sfmono text-highlight xs:mt-7 mt-5`}>Hi, my name is</p>
            <h1 className={`${styles.heroHeadText} text-off-white text-6xl font-bold mt-5`}>Andy Chen.</h1>
            <h1 className={`${styles.heroHeadText} text-off-grey text-6xl font-bold mt-4`}>I am a software developer.</h1>
            <p className={`${styles.heroSubText} ${styles.heroSubWidth} font-calibre mt-2 text-off-grey font-light leading-relaxed`}>
                I am a software developer with a background in Information Systems and
                Web Development. I graduated from&nbsp;
                <a href='https://sjsu.edu/' target='_blank' rel="noreferrer" className='links text-highlight'>
                  San Jose State University
                </a>&nbsp;with a degree in Management Information systems and learned how to code through&nbsp;
              <a href='https://learningfuze.com/full-immersion' target='_blank' rel="noreferrer" className='links text-highlight'>
                  LearningFuze
                </a>
                .
              </p>
          </div>
        </div>
      </div>
      <div className='relative w-full h-[55vh]'>
        <ComputersCanvas />
      </div>
    </section>
  )
}

export default Hero;
