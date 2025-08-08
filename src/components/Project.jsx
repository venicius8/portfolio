function Project({ srcImg, altImg, projectLink }) {
  return (
    <div>
      <img
        onClick={() =>
          window.open(projectLink, "_blank", "noopener,noreferrer")
        }
        src={srcImg}
        alt={altImg}
      />
    </div>
  );
}

export default Project;
