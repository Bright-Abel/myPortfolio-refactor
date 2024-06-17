import { NavigationDots, Sidebar, SocialMedia } from '../component';
const AppWrap = (Component, idName, classNames) => () => {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      {/* <SocialMedia /> */}
      <Sidebar />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text"> &copy; {new Date().getFullYear()} Bright</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>

      <NavigationDots active={idName} />
    </div>
  );
};
export default AppWrap;
