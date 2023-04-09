import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section>
      <div className='w-full mx-auto pt-[10%]'>
        <div className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-highlight'/>
            <div className='w-1 sm:h-80 h-40 green-gradient' />
          </div>
          <div>
            <p className={`text-highlight font-sfmono text-sm mt-5`}>Hi, my name is</p>
            <h1 className={`${styles.heroHeadText} font-calibre text-off-white text-6xl font-bold mt-5`}>Andy Chen.</h1>
            <h1 className={`${styles.heroHeadText} font-calibre text-off-grey text-6xl font-bold mt-4`}>I am a software developer.</h1>
            <p className={`${styles.heroSubText} mt-2 text-off-grey w-[60%] font-calibre font-light text-xl leading-normal`}>
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
      <div className='relative w-full h-[60vh]'>
        <ComputersCanvas />
        <div className='absolute xs:botom-10 bottom-0 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.dev
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
