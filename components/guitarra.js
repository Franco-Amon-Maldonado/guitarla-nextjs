import Image from "next/image";
import Link from "next/link";


function Guitarra({guitarra}) {
   const {descripcion, nombre, precio, imagen, url} = guitarra
    return ( 
        <div>
           <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen de la guitarra ${nombre}`}/>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <Link href={`/guitarras/${url}`}>Ver producto</Link>
        </div>
     );
}

export default Guitarra;