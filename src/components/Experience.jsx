import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgb(21,16,48)',
        background:'linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)',
        background: '-webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)',
        color: '#D0D1D2',
        padding: '1px',
        'border-radius': '20px'}}
      contentArrowStyle={{ borderRight: '9px solid  rgb(30,37,48)' }}
      iconStyle={{ background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain' />
        </div>}>
      <div className="bg-tertiary rounded-[20px] py-1 px-1">
        <div className='px-4 py-2'>
          <h3 className="text-white text-[22px] text-bold">{experience.title}</h3>
          <p style={{ margin: 0, fontSize: '16px' }}>{experience.company_name}</p>
          <p style={{ margin: 0, fontSize: '16px' }}>{experience.location}</p>
          <ul className="mt-2 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='font-calibre font-light text-white-100 font text-[15px] pl-1 tracking-wider'>
                  {point}
              </li>
            ))}
          </ul>
          <p className="text-[16px] font-semibold">{experience.date}</p>
        </div>
      </div>
    </VerticalTimelineElement>
  )
}


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-6 flex flex-col">
        <VerticalTimeline
          lineColor='#FFFFFF'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work');
