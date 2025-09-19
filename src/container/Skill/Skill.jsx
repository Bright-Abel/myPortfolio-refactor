import './Skill.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useFetchProjects } from '../../custom/FetchData';
import { useEffect, useState } from 'react';
import { myProject } from '../../custom/data';
import { skills } from '../../custom/data';
const Skill = () => {
  return (
    <>
      <h2 className='head-text'>
        Tech <span>Stack</span>
      </h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((item) => {
            const { id, title, text, img } = item;

            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={id}
              >
                <div className='app__flex' style={{}}>
                  <img src={img} alt='' />
                </div>
                <p className='p-text'>{title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Skill, 'app__skills'),
  'skills',
  'app__whitebg'
);
