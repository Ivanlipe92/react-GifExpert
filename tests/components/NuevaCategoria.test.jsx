import { fireEvent, render, screen } from "@testing-library/react"
import { NuevaCategoria } from "../../src/components/NuevaCategoria"

describe('Pruebas en <NuevaCategoria/>', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<NuevaCategoria agregarNuevaCategoria={()=>{}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Saitama'}})
        expect(input.value).toBe('Saitama');
    })
    test('Debe de llamar agregarNuevaCategoria si el input tiene un valor', () => { 
        render( <NuevaCategoria agregarNuevaCategoria={()=>{}}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        screen.debug();
        expect(input.value).toBe('')
     })
})