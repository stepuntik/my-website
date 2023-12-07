const Project = ({ title, description, images, url }) => {
  return (
    <>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <div>
        <img src={images[0]} alt={title} />
      </div>
    </>
  );
};
export default Project;
