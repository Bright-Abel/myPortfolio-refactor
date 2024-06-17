import './About.scss';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { about } from '../../custom/data';
import logo from '../../assets/about.svg';
import CV from '../../assets/CV.pdf';
import { FaCheck } from 'react-icons/fa';

import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [cvDownload, setIsCvDownload] = useState(false);

  const handleDownload = () => {
    setIsCvDownload(true);
  };
  return (
    <>
      <h2 className="head-text">
        About<span> M</span>e
      </h2>

      <div className="app__profiles">
        <img src={logo} alt="some svg" className="w-full h-64" />
        <article>
          <p className="text-slate-500 mt-8 leading-loose">
            I am a resplendent, experienced, and highly dedicated Computer
            Science professional with a wealth of expertise in programming and
            passion for it. I am passionate about working with cutting-edge
            technology and contributing to the dynamic field of computer
            science. I am seeking a challenging role in software development to
            apply my expertise in problem-solving, coding, and software design.
          </p>
          <a href={CV} download onClick={handleDownload}>
            <button type="button" className="app__flex">
              {cvDownload ? (
                <>
                  Resume Downloaded <FaCheck />
                </>
              ) : (
                'Download Resume'
              )}
            </button>
          </a>
        </article>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
