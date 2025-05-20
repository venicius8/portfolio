import { useState } from 'react';
import Styles from './header.module.css';

function Header() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <header className={Styles.header}>
                <h1 className={Styles.name}>Venícius' Dev</h1>
                <nav>
                    <ul className={Styles.navList}>
                        <li><a className={Styles.navLink} href="#home">Sobre</a></li>
                        <li><a className={Styles.navLink} href="#projects">Projetos</a></li>
                        <li><a className={Styles.navLink} href="#contact">Contato</a></li>
                        <li><a className={Styles.navBurger} onClick={() => setMenu(!menu)}>☰</a></li>
                    </ul>
                </nav>
            </header>
            <aside className={menu ? Styles.active : Styles.aside}>
                <nav>
                    <ul className={Styles.menu}>
                        <li><a onClick={() => setMenu(!menu)} href='#'>&#x2715;</a></li>
                        <li><a href="#home">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Header
