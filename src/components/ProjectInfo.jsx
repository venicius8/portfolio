import Styles from "../App.module.css";

function ProjectInfo({ title, img, text, link }) {
  return (
    <div className={Styles.projectInfo}>
      <h1>{title}</h1>
      <img src={img} alt={`Imagem do projeto ${title}`} />
      <p>{text}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Acessar o site
      </a>
    </div>
  );
}

export default ProjectInfo;
