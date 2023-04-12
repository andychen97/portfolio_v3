import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { Tech } from '../components';
import Selfie from '/selfie.jpg'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-full w-[225px] lg:w-[250px]'>
      <motion.div
        initial={{
          x: -100,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div initial={{
        x: -100,
        opacity: 0
      }}
        transition={{
          duration: 1
        }}
        animate={{
          opacity: 1,
          x: 0
        }}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className='flex flex-wrap'>
        <motion.p
          initial={{
            x: 100,
            opacity: 0
          }}
          transition={{
            duration: 1
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          className='xs:basis-full sm:basis-full xs:order-2 sm:order-2 order-1 basis-3/5 mt-4 text-secondary font-light text-[18px] leading-7'>
          Hey! I am a software developer with a background in Information Systems
          and Web Development. I graduated from San Jose State University in the
          Spring of 2020 during the onset of the pandemic. Despite the challenging
          job market, I utilized this time to expand my knowledge by self-educating
          in finance and options trading. It was quite a profitable experience.
          However, as the world began to reopen, I wanted to refresh my skills in
          Python and mySQL and discovered a passion for web development through an
          online JavaScript course.
          <br />
          <br />
          I subsequently enrolled in an accelerated, in-person full-stack web
          development program in Irvine, California where I acquired comprehensive
          skills in HTML, CSS, JavaScript, Node.js, Express.js, PostgreSQL, React,
          data structures and algorithms. Having completed the program, I am
          currently working as a Web Dev TA and continue to improve my skills
          through daily leetcoding. I am now seeking new opportunities to apply
          my skills in the web development industry.
          <br />
          <br />
          Here are some technologies that I have been working with recently:
        </motion.p>
        <div className='xs:basis-full sm:basis-full basis-2/5 xs:order-1 sm:order-1 order-2'>
          <div className='flex justify-center'>
            <img src={Selfie} alt='selfie' className={styles.selfie} />
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Tech />
      </div>
      <div className='justify-center mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');
