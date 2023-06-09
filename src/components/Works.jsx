import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { livelink, github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

const ProjectCard = ({ index, name, description, tags, image, live_link, source_code_link }) => {
  return(
    <Tilt className='xs:w-full md:w-[275px] w-[320px]'>
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
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary p-4 rounded-[20px]'
        >
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-[10px]' />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(live_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1'>
                <img src={livelink} alt='livelink' className='w-1/2 h-1/2 object-contain' />
              </div>
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[15px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[15px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Works = () => {
  return (
    <>
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
      >
        <p className={styles.sectionSubText}>Things I've built</p>
        <h2 className={styles.sectionHeadText}>My Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
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
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
           The following projects showcase my skills and experience through real-world
           examples of my work. Each project is briefly described with links to code
           repositories and live demos. These projects reflects my ability to solve
           complex problems, work with different technologies, and manage projects
           effectively.
        </motion.p>
      </div>
      <div className='xs:mt-10 mt-20 flex justify-center flex-wrap gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects');
