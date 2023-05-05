import Image from "next/image";


function Guitarra({guitarra}) {
   const {descripcion, nombre, precio, imagen, url} = guitarra
    return ( 
        <div>
           <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen de la guitarra ${nombre}`}/>
        </div>
     );
}

export default Guitarra;