import NavigationButton from '../NavigationButton/NavigationButton';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <h1 className="home__title">Stepan Lavrenchuk</h1>
      <h2 className="home__description">
        Software engineer, Front End & Back End developer
      </h2>
      <NavigationButton text="&#8595;" section="expertise" />
      {/* <button className="home__down-btn">&#8595;</button> */}
    </section>
  );
};
export default Home;
