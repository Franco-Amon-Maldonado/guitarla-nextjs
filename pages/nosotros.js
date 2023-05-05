
import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css"

function Nosotros() {
    return ( 
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros, guitarLA, tienda de musica'}
        >
        <main className="contenedor">
            <h1 className="heading">Nosotros</h1>

            <div className={styles.contenido}>
                <Image src='/img/nosotros.jpg' alt='Imagen nosotros' width='1000' height='800'/>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin ex. Phasellus non dignissim sapien, in molestie magna. Aenean rhoncus sit amet erat eu viverra. Nullam eget nibh metus. In non risus ultricies, sollicitudin magna vitae, sagittis velit. Suspendisse eu sapien lobortis, tempus ex vitae, pulvinar leo. Nam ornare eu mauris nec malesuada.</p>
                    <p>Praesent metus velit, hendrerit eget facilisis ut, efficitur quis odio. Proin fermentum, justo vel finibus tristique, justo mauris laoreet magna, vitae dictum enim dui sit amet magna. Donec vitae nisi sed nunc viverra sagittis. Curabitur volutpat arcu sapien, sit amet mattis elit fringilla porta. Nullam hendrerit ante quis felis sodales ornare. Donec interdum, lectus nec ornare laoreet, augue dui volutpat orci, at molestie odio libero vitae ex. Proin maximus rhoncus placerat. Sed metus metus, lobortis a nulla ut, aliquam varius velit. Mauris interdum aliquet semper</p>
                </div>
            </div>

        </main>
        </Layout>
        
     );
}

export default Nosotros;