import "./ProjectSection.css";
import Arrow from "../../assets/icons/box-arrow.svg";

function ProjectSection() {
  const projects = [
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      title: "React Calculator",
      description: "A simple calculator built using React."
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      title: "React Calculator",
      description: "A simple calculator built using React."
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      title: "React Calculator",
      description: "A simple calculator built using React."
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      title: "React Calculator",
      description: "A simple calculator built using React."
    }
  ];

  return (
    <div className="project-section">
      <h1 className="project-section__heading">Projects</h1>
      <div className="project-section__content">
        {projects.map((project, index) => (
          <div className="project-section__item" key={index}>
            <img className="project-section__image" src={project.imgSrc} alt="" />
            <div className="project-section__text">
              <h1 className="project-section__title">{project.title}</h1>
              <p className="project-section__description">{project.description}</p>
              <a className="project-section__link" href="#">
                See more
                <img src={Arrow}/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
