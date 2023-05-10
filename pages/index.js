import Guitarra from "@/components/guitarra"
import Layout from "@/components/layout"
import styles from "../styles/grid.module.css"
import Post from "@/components/post"



export default function Home({guitarras, posts}) {
  return (

    <>
    <Layout
      title={'Inicio'}
      description={'Tienda de guitarras, cursos, blog'}
    >
      <main className="contenedor">
          <h1 className="heading">Nuestra Collecion</h1>
          <div className={styles.grid}>

              {guitarras.map(guitarra => ((
                  <Guitarra
                      key={guitarra.id}
                      guitarra={guitarra.attributes}
                  />
                 )))}

              </div>

              <section className="contenedor">
                  <h2 className="heading">Blog</h2>
                  <div className={styles.grid}>
                    {posts?.map((post) =>(
                        <Post
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>
              </section>
      </main>
    </Layout>
    </>
  )
}

export async function getStaticProps(){
    const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
    const urlPosts = `${process.env.API_URL}/posts?populate=imagen`

    const [ resGuitarras, resPosts] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlPosts)
    ])

    const [ {data:guitarras}, {data:posts} ] = await Promise.all([
      resGuitarras.json(),
      resPosts.json()
    ])


    return {
      props:{
        guitarras,
        posts
      }
        
    }

}
