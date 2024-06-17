import { About, Footer, Header, Skill, Work } from './container';
import { NavBar, Sidebar } from './component';
import './App.scss';
const App = () => {
  return (
    <div className="app">
      {/* <NavBar /> */}
      {/* <Sidebar /> */}
      <div className="main">
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
