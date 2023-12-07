import NavigationButton from '../NavigationButton/NavigationButton';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <h1 className={styles.title}>Stepan Lavrenchuk</h1>
      <h2 className={styles.description}>
        Software engineer, Full Stack developer
      </h2>
      <NavigationButton text="&#8595;" section="expertise" />
    </section>
  );
};
export default Home;
