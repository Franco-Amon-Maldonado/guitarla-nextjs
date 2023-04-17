import Link from "next/link";
import styles from "../styles/footer.module.css"

function Footer() {
    return ( 
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">
                        Inicio
                    </Link>

                    <Link href="/nosotros">
                        Nosotros
                    </Link>

                    <Link href="/blog">
                        Blog
                    </Link>

                    <Link href="/tienda">
                        Tienda
                    </Link>
                </nav>

                <p>Todos los derechos reservados {new Date().getFullYear()} &copy;</p>

            </div>
        </footer>
     );
}

export default Footer;