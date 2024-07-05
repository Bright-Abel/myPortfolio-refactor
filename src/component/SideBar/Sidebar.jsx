import './SideBar.scss';
import links from '../../custom/data';
import SocialMedia from '../SocialMedia';
import { CgMenuBoxed } from 'react-icons/cg';
import { GoDotFill } from 'react-icons/go';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import {
  openSideBar,
  closeSideBar,
} from '../../portfolio_features/sidebarSlice';

const Sidebar = () => {
  // const [toggle, setToggle] = useState(false);
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  return (
    <>
      <aside className={`${isSidebarOpen ? 'aside show-menu' : 'aside'}`}>
        <a href="#home" className="nav__logo">
          <div className="nav__logo app__flex">
            <h1 className="img__bg">OL</h1>
            <span className="span">
              <GoDotFill />
            </span>
          </div>
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              {links.map((link, index) => {
                const { id, href, text, className } = link;
                return (
                  <>
                    <motion.li
                      whileInView={{ x: [-50, 10, 0], opacity: [0, 0.5, 1] }}
                      transition={{ duration: index + 1 }}
                      data-tooltip-id={id}
                      key={id}
                      className="nav__list"
                    >
                      <a href={href} className="nav__link">
                        <i className={`${className}`}></i>
                      </a>
                    </motion.li>
                    <ReactTooltip
                      id={id}
                      place="right"
                      content={text}
                      className="skills-tooltip"
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </nav>

        <SocialMedia />
      </aside>

      <div
        className={`${
          isSidebarOpen ? 'nav__toggle nav__toggle-open' : 'nav__toggle'
        } `}
        onClick={() =>
          isSidebarOpen ? dispatch(closeSideBar()) : dispatch(openSideBar())
        }
      >
        <i className="icon-menu"></i>
        {/* <CgMenuBoxed /> */}
      </div>
    </>
  );
};
export default Sidebar;
