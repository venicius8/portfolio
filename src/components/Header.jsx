import { useState } from 'react';

function Header({ Styles }) {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <header className={Styles.header}>
                <h1 className={Styles.name}>Venícius' Dev</h1>
                <nav>
                    <ul className={Styles.navList}>
                        <li><a className={Styles.navLink} href="#about">Sobre</a></li>
                        <li><a className={Styles.navLink} href="#projects">Projetos</a></li>
                        <li><a className={Styles.navLink} href="#contact">Contato</a></li>
                        <li><a className={Styles.navBurger} onClick={() => setMenu(!menu)}>☰</a></li>
                    </ul>
                </nav>
            </header>
            <aside className={menu ? Styles.active : Styles.aside}>
                <nav>
                    <ul className={Styles.menu}>
                        <li><button onClick={() => setMenu(!menu)}>&#x2715;</button></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </aside>
            <div
                className={menu ? Styles.exitAside : Styles.exitAsideOff}
                onClick={() => setMenu(!menu)}>
            </div>
        </>
    )
}

export default Header
