import ProjectInfo from "./ProjectInfo.jsx";
import { useState } from "react";
import Styles from "../App.module.css";

function Project({ title, img, text, link }) {
  const [projectInfo, setProjectInfo] = useState(false);

  return (
    <div>
      <img
        onClick={() => {
          setProjectInfo(!projectInfo);
        }}
        src={img}
        alt={`Uma imagem do projeto ${title}`}
      />
      {projectInfo && (
        <>
          <div
            className={Styles.projectOverlay}
            onClick={() => setProjectInfo(false)}
          ></div>
          <ProjectInfo title={title} img={img} text={text} link={link} />
        </>
      )}
    </div>
  );
}

export default Project;
