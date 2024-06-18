import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa6';

const SocialMedia = () => (
  <div className="app__social">
    <div className="app__flex">
      <a
        href="https://twitter.com/Abelbright168"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>

    <div className="app__flex">
      <a
        href="https://github.com/Bright-Abel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
    </div>
    <div className="app__flex">
      <a
        href="http://linkedin.com/in/barnabas-oluwasegun"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  </div>
);

export default SocialMedia;
