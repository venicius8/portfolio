import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.name}>Venícius' Dev</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><a className={styles.navLink} href="#home">Home</a></li>
                    <li><a className={styles.navLink} href="#projects">Projetos</a></li>
                    <li><a className={styles.navLink} href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
