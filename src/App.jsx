import Header from "./components/header.jsx"
import Styles from "./app.module.css";

function App() {

  return (
    <>
      <Header />

      <section className={Styles.main}>
        <h1>Olá, me chamo Venícius Miguel</h1>
        <h2>Sou desenvolvedor <span className={Styles.stack}></span></h2>
      </section>
    </>
  )
}

export default App
