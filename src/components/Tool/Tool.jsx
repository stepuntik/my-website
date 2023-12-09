import { IconContext } from 'react-icons';
import './Tool.css';
import { useState } from 'react';

const Tool = ({ icon, text, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentColor = isHovered ? color : 'inherit';

  return (
    <div
      className="tool"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: currentColor,
        color: currentColor,
      }}
    >
      <IconContext.Provider value={{ size: '4rem', color: currentColor }}>
        {icon}
      </IconContext.Provider>
      <div className="tool__text">{text}</div>
    </div>
  );
};

export default Tool;
