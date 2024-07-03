import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constant';
import { AppWrap } from '../../wrapper';
import Typewriter from 'typewriter-effect';
import logo from '../../assets/b5.svg';
import profile from '../../assets/me.png';
const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div className="app__header app__flex" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div className="" style={{ marginLeft: '20px' }}>
              <p className="p-text">Hello I am</p>
              {/* <h1 className="head-text">Bright</h1> */}
              <h1 className="head-text" style={{ color: '#000' }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Bright').start();
                  }}
                />
              </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Front-End Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          src={logo}
          alt="profile-pic"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.redux].map((circle, i) => (
          <div className="circle-cmp app__flex" key={i}>
            <img src={circle} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default AppWrap(Header, 'home');
