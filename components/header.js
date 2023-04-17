import Image from "next/image";
import Link from "next/link";


function Header() {
    return ( 
        <header>
            <div className="contenedor">
                <Image src="img/logo.svg" width="300" height="300"alt="Logo"/>
            </div>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/tienda">Tienda</Link>

            </nav>
        </header>
     );
}

export default Header;