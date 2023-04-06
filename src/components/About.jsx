import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

//change titles in constants/index.js
const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variant={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Hey! I am a software developer with a background in Information Systems and Web Development. I graduated from San Jose State University in the Spring of 2020 during the onset of the pandemic. Despite the challenging job market, I utilized this time to expand my knowledge by self-educating in finance and options trading. It was quite a profitable experience. However, as the world began to reopen, I wanted to refresh my skills in Python and mySQL and discovered a passion for web development through an online JavaScript course. <br /><br />
        I subsequently enrolled in an accelerated, in-person full-stack web development program in Irvine, California where I acquired comprehensive skills in HTML, CSS, JavaScript, Node.js, Express.js, PostgreSQL, React, data structures and algorithms. Having completed the program, I am currently working as a Web Dev TA and continue to improve my skills through daily leetcoding. I am now seeking new opportunities to apply my skills in the web development industry.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');
