import { About, Footer, Header, Skill, Work } from './container';
import { NavBar, Sidebar } from './component';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar } from './portfolio_features/sidebarSlice';
import { useState, useEffect } from 'react';

const App = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (isSidebarOpen) {
        dispatch(closeSideBar());
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSidebarOpen, dispatch]);

  return (
    <div className="app">
      {/* <NavBar /> */}
      {/* <Sidebar /> */}
      <div
        className="main"
        onClick={() => (isSidebarOpen ? dispatch(closeSideBar()) : null)}
        // onScroll={() => (isSidebarOpen ? dispatch(closeSideBar()) : null)}
      >
        <Header />
        <About />
        <Work />
        <Skill />
        <Footer />
      </div>
    </div>
  );
};
export default App;
