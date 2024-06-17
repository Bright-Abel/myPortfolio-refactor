import './NavBar.scss';
import { images } from '../../constant';
import links from '../../custom/data';
const NavBar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" className="" />
      </div>

      <ul className="app__navbar-links">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id} className="app__flex p-text">
              <div></div>
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
