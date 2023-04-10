import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) => {
  let paddingTop;
  let paddingBottom;
  if (experience.points.length === 0) {
    paddingTop = '20px';
    paddingBottom = '0px';
  } else {
    paddingTop = '24px';
    paddingBottom = '24px';
  }
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgb(30,37,48)', color: '#D0D1D2', 'padding-top': paddingTop, 'padding-bottom': paddingBottom}}
      contentArrowStyle={{ borderRight: '9px solid  rgb(30,37,48)' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain' />
        </div>}>
        <div>
          <h3 className="text-white text-[24px] text-bold">{experience.title}</h3>
          <p className="text-secondary, text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
          <p className="text-secondary, text-[16px] font-semibold" style={{ margin: 0 }}>{experience.location}</p>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='font-calibre text-white-100 text-[14px] pl-1 tracking-wider'>
                  {point}
              </li>
            ))}
          </ul>
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
          lineColor='#ccd6f6'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work');
