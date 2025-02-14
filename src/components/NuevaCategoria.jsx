import { useState } from "react"


export const NuevaCategoria = ({agregarNuevaCategoria}) => {
    const [valorEntrada, setValorEntrada] = useState('')
    const onEscribir = ({target}) => {
        setValorEntrada(target.value);
    }
    const onSubir = (event) => {
        event.preventDefault();
        const valorEntradaTrimed = valorEntrada.trim();
        if(valorEntradaTrimed <= 1) return;
        agregarNuevaCategoria(valorEntradaTrimed);
    }

  return (
    <form onSubmit={onSubir}>
        <input type="text" placeholder="Buscar Gifs" value={valorEntrada} onChange={event => onEscribir(event)}/>
    </form>
  )
}
