import './App.css';
import Navigation from './components/Navigation/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Home from './components/Home/Home';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Navbar from './components/NewNavigation/NavBar';
// import projects from './data/projects.json';

const App = () => {
  // console.log(projects[0].name);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navigation />
      <main>
        <Home />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
