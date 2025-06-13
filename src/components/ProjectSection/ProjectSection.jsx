import "./ProjectSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: "Melodify: Next",
    description: "Modern music player built with PySide6, offering a seamless and personalized listening experience.",
    imageSource: "/thumbnails/music_player.png",
    link: "https://github.com/robraymundo/melodify-next"
  },
  {
    title: "Calculator",
    description: "A simple calculator app built with Python's Tkinter library. It supports basic arithmetic operations. ",
    imageSource: "/thumbnails/calculator.jpg", 
    link: "https://github.com/robraymundo/calculator"
  },
  {
    title: "Dividers",
    description: "A simulation game where you can spawn a paper, rock or scissor. The last standing team wins.",
    imageSource: "/thumbnails/dividers.png",
    link: "https://github.com/robraymundo/dividers"
  },
  {
    title: "PyDino",
    description: "My very first Python project, a simple game where the player controls a dinosaur to avoid obstacles",
    imageSource: "/thumbnails/pydino.jpg",
    link: "https://github.com/robraymundo/pydino"
  }
];

function ProjectSection() {
  return (
    <div className="project-section" id="projects">
      <h1 className="project-section__heading">Projects</h1>
      <div className="project-section__content">
        {projects.map(({ title, description, imageSource, link }, index) => (
          <div className="project-section__item" key={index}>
            <img className="project-section__image" src={imageSource} alt="" />
            <div className="project-section__text">
              <h2 className="project-section__title">{title}</h2>
              <p className="project-section__description">{description}</p>
              <a className="project-section__link" href={link} target="_blank" rel="noopener noreferrer">
                <p>See more</p>
                <FontAwesomeIcon icon={ faArrowRightLong } size="lg"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
