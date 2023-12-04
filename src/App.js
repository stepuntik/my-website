import './App.css';
import Navigation from './components/Navigation/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Section from './components/Section/Section';
// import projects from './data/projects.json';

const App = () => {
  // console.log(projects[0].name);

  return (
    <div className="App">
      <Navigation />
      <ScrollToTopButton />
      <Section id="home" />
      <Section id="expertise" />
      <Section id="projects" />
      <Section id="contact" />
    </div>
  );
};

export default App;
