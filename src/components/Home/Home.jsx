import NavigationButton from '../NavigationButton/NavigationButton';

import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <h1 className="home__title">Stepan Lavrenchuk</h1>
      <h2 className="home__subtitle">
        Software engineer, Full Stack developer
      </h2>
      <div>
        <h3 className="home__description">Learn more about what I do</h3>
        <NavigationButton section="expertise" />
      </div>
    </section>
  );
};
export default Home;
