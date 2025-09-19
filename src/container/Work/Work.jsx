import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useFetchProjects } from '../../custom/FetchData';
import { useEffect, useState } from 'react';
import { myProject } from '../../custom/data';

const Work = () => {
  const { project, isLoading, isError } = useFetchProjects();
  // console.log(project);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projectFilter, setProjectFilter] = useState([]);

  useEffect(() => {
    setProjectFilter(project);
    console.log(projectFilter);
  }, [project]);

  const handleWorkFilter = (tool) => {
    setActiveFilter(tool);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (tool === 'All') {
        setProjectFilter(project);
      } else {
        setProjectFilter(project.filter((item) => item.type === tool));
      }
    }, 500);
  };
  return (
    <>
      <h2 className='head-text'>
        My creative <span> Portfolio</span>
        <br /> Section
      </h2>

      <div className='app__work-filter'>
        {myProject.map((item) => {
          const { id, tool, text } = item;
          return (
            <div
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === tool ? 'item-active' : null
              }`}
              key={id}
              onClick={() => handleWorkFilter(tool)}
            >
              {text}
            </div>
          );
        })}
      </div>

      <motion.div
        animate={animateCard}
        // whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className='app__work-portfolio'
      >
        {projectFilter.map((work) => {
          const { description, github, id, img, title, url, type } = work;
          return (
            <div className='app__work-item ' key={id}>
              <div className='app__work-img app__flex'>
                <img src={img} alt={title} />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    staggerChildren: 1,
                  }}
                  className='app__work-hover app__flex'
                >
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.5,
                      }}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={github} target='_blank' rel='noopener noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.5,
                      }}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{title}</h4>
                <p className='p-text' style={{ marginTop: '10px' }}>
                  {description}
                </p>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{type}</p>
                </div>
              </div>
              {/* MOBILE */}
              <div className='mobile__link'>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  <AiFillEye />
                </a>

                <a href={github} target='_blank' rel='noopener noreferrer'>
                  <AiFillGithub className='' />
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'project',
  'app__primarybg '
);
