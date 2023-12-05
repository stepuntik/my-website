import {
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiJest,
  SiWebpack,
} from 'react-icons/si';

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaNodeJs,
  FaNpm,
} from 'react-icons/fa';

import './ToolContainer.css';

const ToolContainer = ({ children, text }) => {
  return (
    <div className="tool-container">
      <div className="tool">
        <SiJavascript className="tool-container__icon" />
        <div className="tool-container__text">JavaScript</div>
      </div>
      <div className="tool">
        <FaReact className="tool-container__icon" />
        <div className="tool-container__text">React.js</div>
      </div>
      <div className="tool">
        <FaHtml5 className="tool-container__icon" />
        <div className="tool-container__text">HTML</div>
      </div>
      <div className="tool">
        <FaCss3 className="tool-container__icon" />
        <div className="tool-container__text">CSS</div>
      </div>
      <div className="tool">
        <FaGitAlt className="tool-container__icon" />
        <div className="tool-container__text">Git</div>
      </div>
      <div className="tool">
        <FaGitAlt className="tool-container__icon" />
        <div className="tool-container__text">Git</div>
      </div>
      <div className="tool">
        <FaGitAlt className="tool-container__icon" />
        <div className="tool-container__text">Git</div>
      </div>
      <div className="tool">
        <FaGitAlt className="tool-container__icon" />
        <div className="tool-container__text">Git</div>
      </div>
      <div className="tool">
        <FaGitAlt className="tool-container__icon" />
        <div className="tool-container__text">Git</div>
      </div>
    </div>
  );
};
export default ToolContainer;
