
import { useState } from "react"
import { NuevaCategoria, GridDeGifs } from "./components";

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    const onAgregarNuevaCategoria = (newcat) => {
        const newcatMayus = newcat.toUpperCase();
        if(categorias.map( cat => cat.toUpperCase()).includes(newcatMayus)) return;
        setCategorias([newcat, ...categorias]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            < NuevaCategoria agregarNuevaCategoria={onAgregarNuevaCategoria}/>
            {
                categorias.map(cat => (
                    <GridDeGifs key={cat} categoria={cat}/>
                ))
            }
        </>
    )
    
}
