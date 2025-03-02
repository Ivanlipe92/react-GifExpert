import { obtenerGifs } from "../../src/helpers/obtenerGifs"

describe('Pruebas en <obtenerGifs/>', () => { 
    test('Debe de retornar un arreglo de Gifs', async() => { 

        const gifs = await obtenerGifs('One Punch');

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
        
    });
});