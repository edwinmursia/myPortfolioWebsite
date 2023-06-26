import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff', boxShadow: '0 0 10px #000', textShadow: '-1px -1px 0 #1d1836, 1px -1px 0 #1d1836, -1px 1px 0 #1d1836, 1px 1px 0 #1d1836'}}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={<div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain" />
    </div>}>
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.company_name}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.title}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <div className="select-none">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{textShadow: '0 0 10px #000'}}>My Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "work")