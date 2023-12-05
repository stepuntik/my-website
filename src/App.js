import './App.css';
import Navigation from './components/Navigation/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Home from './components/Home/Home';
import Expertise from './components/Expertise/Expertise';
// import projects from './data/projects.json';

const App = () => {
  // console.log(projects[0].name);

  return (
    <div className="App">
      <Navigation />
      <Home />
      <Expertise />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
