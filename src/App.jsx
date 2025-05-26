import Header from "./components/Header.jsx"
import Styles from "./App.module.css";
import meImg from "./assets/meImg.jpg";
import PT from "./components/PrettyTag.jsx";
import Project from "./components/Project.jsx"
import project01 from "./assets/project01.png"
import project02 from "./assets/project02.png"
import project03 from "./assets/project03.png"

function App() {
  return (
    <>
      <Header Styles={Styles} />

      <section className={Styles.main}>
        <h1>Olá, me chamo Venícius Miguel</h1>
        <h2>Sou desenvolvedor <br className={Styles.forSmall} /><span className={Styles.stack}></span></h2>
        <div className={Styles.mainHr}></div>
      </section>

      <section id="about" className={Styles.about}>
        <h1><PT>SobreMim</PT></h1>
        <div className={Styles.justifyAboutMe}>
          <div className={Styles.aboutMe}>
            <p>
              Desde que comecei minha jornada como desenvolvedor full-stack, venho me dedicando a transformar <u>ideias em projetos reais</u>.
              Em alguns meses, já criei portfólios, fóruns e aplicações web do zero, <u>unindo lógica, código e propósito</u>.
            </p>
            <img src={meImg} alt="Minha imagem" />
          </div>
        </div>
        <h2>Minhas ambições</h2>
        <p>
          Quero me tornar um desenvolvedor cada vez mais completo, tanto no front-end quanto no back-end, sempre buscando clareza, performance e boas práticas no que construo.
          Acredito que <u>com consistência e curiosidade, é possível evoluir constantemente</u>, e estou comprometido com esse caminho.
        </p>
      </section>

      <section id="projects" className={Styles.projects}>
          <h1><PT>Projetos</PT></h1>
          
          <Project srcImg={project01} altImg={"Técnicas Meditativas"} projectLink={"https://tecnicasmeditativas.netlify.app"} />
          <Project srcImg={project02} altImg={"Manipulador RGB"} projectLink={"https://manipuladorrgb.netlify.app"} />
          <Project srcImg={project03} altImg={"Veni's Fórum"} projectLink={"https://github.com/venicius8/venis-forum"} />
      </section>

      <section id="contact" className={Styles.contact}>
        <h1><PT>Contato</PT></h1>
        <label>
          Meu GitHub:
          <a
            href="https://github.com/venicius8"
            target="_blank" rel="noopener,noreferrer"> github.com<br className={Styles.forSmall} />/venicius8
          </a>
        </label>
        <label>
          Meu Email:
            <a
              href="mailto:miguelsilva8v@gmail.com"
              target="_blank" rel="noopener,noreferrer"> miguelsilva8v<br className={Styles.forSmall} />@gmail.com
            </a>
        </label>
      </section>

      <footer className={Styles.footer}>
        <p>Site criado por Venícius Miguel</p>
        <p>Feito com <span style={{color: "red"}}>♥</span> usando React</p>
      </footer>
    </>
  )
}

export default App
