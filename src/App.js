import { Route, BrowserRouter, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ProjectPage from './pages/ProjectPage';

import Navigation from './components/Navigation/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects/:title" element={<ProjectPage />} />
          </Routes>
        </main>

        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
