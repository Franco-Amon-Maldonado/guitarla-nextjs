import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers";

function Post({post}) {
    const { titulo, contenido, publishedAt, url, imagen } = post;
    return ( 
        <article className={styles.container}>
            <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen blog ${titulo}`} width={600} height={400}></Image>
            <div className={styles.contenido}>
                <h3 className="">{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`} className={styles.enlace}>Leer post</Link>
            </div>
        </article>
     )
}

export default Post;