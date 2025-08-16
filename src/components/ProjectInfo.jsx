import Styles from "../App.module.css";

function ProjectInfo({ title, img, text, siteLink, repoLink }) {
  return (
    <div className={Styles.projectInfo}>
      <h1>{title}</h1>
      <img src={img} alt={`Imagem do projeto ${title}`} />
      <p>{text}</p>
      <a href={siteLink} target="_blank" rel="noopener noreferrer">
        Acessar o site
      </a>
      <br />
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        Acessar o repositório
      </a>
    </div>
  );
}

export default ProjectInfo;
