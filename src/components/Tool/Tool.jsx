import { IconContext } from 'react-icons';
import './Tool.css';

const Tool = ({ icon, text }) => {
  return (
    <div className="tool">
      <IconContext.Provider value={{ size: '4rem' }}>
        {icon}
      </IconContext.Provider>
      <div className="tool__text">{text}</div>
    </div>
  );
};

export default Tool;
