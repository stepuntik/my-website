import './App.css';
import Navigation from './components/Navigation/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Home from './components/Home/Home';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// import projects from './data/projects.json';

const App = () => {
  // console.log(projects[0].name);

  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
