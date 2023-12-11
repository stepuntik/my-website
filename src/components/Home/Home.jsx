import { Link } from 'react-scroll';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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
        <Link
          to="expertise"
          spy
          smooth
          offset={-64}
          duration={700}
          className="home__arrow-down"
        >
          <KeyboardArrowDownIcon style={{ fontSize: '3rem' }} />
        </Link>
      </div>
    </section>
  );
};
export default Home;
