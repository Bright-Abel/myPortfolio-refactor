import './SideBar.scss';
import links from '../../custom/data';
import SocialMedia from '../SocialMedia';
import { CgMenuBoxed } from 'react-icons/cg';
import { GoDotFill } from 'react-icons/go';
import { useState } from 'react';
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <aside className={`${toggle ? 'aside show-menu' : 'aside'}`}>
        <a href="#home" className="nav__logo">
          <div className="nav__logo app__flex">
            <h1>OL</h1>
            <span className="span">
              <GoDotFill />
            </span>
          </div>
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              {links.map((link, i) => {
                const { id, href, text, className } = link;
                return (
                  <li key={id} className="nav__list">
                    <a href={href} className="nav__link">
                      <i className={` ${className}`}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <SocialMedia />
      </aside>

      <div
        className={`${
          toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'
        } `}
        onClick={() => setToggle(!toggle)}
      >
        <i className="icon-menu"></i>
        {/* <CgMenuBoxed /> */}
      </div>
    </>
  );
};
export default Sidebar;
