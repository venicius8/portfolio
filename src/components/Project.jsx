import ProjectInfo from "./ProjectInfo.jsx";
import { useState } from "react";
import Styles from "../App.module.css";

function Project({ project }) {
  const [projectInfo, setProjectInfo] = useState(false);

  return (
    <div>
      <img
        onClick={() => {
          setProjectInfo(!projectInfo);
        }}
        src={project.img}
        alt={`Uma imagem do projeto ${project.title}`}
      />
      {projectInfo && (
        <>
          <div
            className={Styles.projectOverlay}
            onClick={() => setProjectInfo(false)}
          ></div>
          <ProjectInfo
            title={project.title}
            img={project.img}
            text={project.text}
            link={project.link}
          />
        </>
      )}
    </div>
  );
}

export default Project;
