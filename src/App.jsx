import Header from "./components/header.jsx"
import Styles from "./app.module.css";
import meImg from "./assets/meImg.jpg";
import Projects from "./components/Projects.jsx";
import PT from "./components/PrettyTag.jsx";

function App() {
  return (
    <>
      <Header Styles={Styles} />

      <section className={Styles.main}>
        <h1>Olá, me chamo Venícius Miguel</h1>
        <h2>Sou desenvolvedor <span className={Styles.stack}></span></h2>
        <div></div>
      </section>

      <section id="about" className={Styles.about}>
        <h1><PT>Sobre mim</PT></h1>
        <div className={Styles.justifyAboutMe}>
          <div className={Styles.aboutMe}>
            <p>
              Desde que comecei minha jornada como desenvolvedor full-stack, venho me dedicando a transformar ideias em projrtos reais.
              Em alguns meses, já criei portfólios, fóruns e aplicações web do zero, unindo lógica, código e propósito.
            </p>
            <img src={meImg} alt="Minha imagem" />
          </div>
        </div>
        <h2>Minhas ambições</h2>
        <p>
          Quero me tornar um desenvolvedor cada vez mais completo, tanto no front-end quanto no back-end, sempre buscando clareza, performance e boas práticas no que construo.
          Acredito que com consistência e curiosidade, é possível evoluir constantemente, e estou comprometido com esse caminho.
        </p>
      </section>

      <Projects Styles={Styles} PT={PT} />

    </>
  )
}

export default App
