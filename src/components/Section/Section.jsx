import './Section.css';

const Section = ({ id }) => {
  console.log(id);

  return (
    <section className="section" id={id}>
      Section {id}
    </section>
  );
};
export default Section;
