import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers";


function Post({posts}) {
    const {titulo, contenido, imagen, publishedAt} = posts[0].attributes;
    return ( 
        <Layout
            title={titulo}
        >
        <article className={`${styles.post} ${styles["mt-3"]}`}>
            <Image src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} width={1000} height={400}></Image>
            <div className={styles.contenido}>
                <h3 className="">{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
                <Link href={"/blog"} className={styles.enlace}>Volver</Link>
            </div>
        </article>
        </Layout>
        
     )
}

 export async function getServerSideProps({params: {url}}){
     const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
     const {data: posts} = await respuesta.json()
     return{
         props: {
             posts
         }
     }
 }

export default Post;