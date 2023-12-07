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
    {
      icon: <SiJavascript />,
      text: 'JavaScript',
    },
    { icon: <FaReact />, text: 'React.js' },
    { icon: <FaHtml5 />, text: 'HTML' },
    { icon: <FaCss3 />, text: 'CSS' },
    { icon: <FaGitAlt />, text: 'Git' },
    { icon: <FaNodeJs />, text: 'Node.js' },
    { icon: <SiRedux />, text: 'Redux' },
    { icon: <SiTypescript />, text: 'TypeScript' },
    { icon: <SiGraphql />, text: 'GraphQL' },
    { icon: <SiMongodb />, text: 'MongoDB' },
    { icon: <SiMongoose />, text: 'Mongoose' },
    { icon: <SiFirebase />, text: 'Frebase' },
    { icon: <SiJest />, text: 'Jest' },
    { icon: <SiWebpack />, text: 'Webpack' },
    { icon: <FaNpm />, text: 'NPM' },
  ];

  return (
    <div className="tool-container">
      {toolsData.map((tool, index) => (
        <Tool key={index} icon={tool.icon} text={tool.text} />
      ))}
    </div>
  );
};

export default ToolContainer;
