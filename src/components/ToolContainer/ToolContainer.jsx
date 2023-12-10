import Tool from '../Tool/Tool';

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
  SiFuturelearn,
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

const ToolContainer = () => {
  const toolsData = [
    { icon: <SiJavascript />, text: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaReact />, text: 'React.js', color: '#149ECA' },
    { icon: <FaHtml5 />, text: 'HTML', color: '#E34F26' },
    { icon: <FaCss3 />, text: 'CSS', color: '#1572B6' },
    { icon: <FaGitAlt />, text: 'Git', color: '#F05032' },
    { icon: <FaNodeJs />, text: 'Node.js', color: '#8CC84B' },
    { icon: <SiRedux />, text: 'Redux', color: '#764ABC' },
    { icon: <SiTypescript />, text: 'TypeScript', color: '#3178C6' },
    { icon: <SiGraphql />, text: 'GraphQL', color: '#E535AB' },
    { icon: <SiMongodb />, text: 'MongoDB', color: '#4DB33D' },
    { icon: <SiMongoose />, text: 'Mongoose', color: '#4DB33D' },
    { icon: <SiFirebase />, text: 'Firebase', color: '#FFCA28' },
    { icon: <SiJest />, text: 'Jest', color: '#C21325' },
    { icon: <SiWebpack />, text: 'Webpack', color: '#8DD6F9' },
    { icon: <FaNpm />, text: 'NPM', color: '#CB3837' },
    { icon: <SiFuturelearn />, text: 'More coming...', color: '#2b358d' },
  ];

  return (
    <div className="tool-container">
      {toolsData.map((tool, index) => (
        <Tool
          key={index}
          icon={tool.icon}
          text={tool.text}
          color={tool.color}
        />
      ))}
    </div>
  );
};

export default ToolContainer;
