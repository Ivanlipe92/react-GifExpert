import { useState } from "react"
import PropTypes from "prop-types";


export const NuevaCategoria = ({agregarNuevaCategoria}) => {
    const [valorEntrada, setValorEntrada] = useState('');
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
    <form onSubmit={onSubir} aria-label="form">
        <input type="text" placeholder="Buscar Gifs" value={valorEntrada} onChange={event => onEscribir(event)}/>
    </form>
  )
}

NuevaCategoria.propTypes = {
  agregarNuevaCategoria: PropTypes.func.isRequired,
}



