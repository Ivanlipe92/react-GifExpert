// api  api.giphy.com/v1/gifs/search?api_key=yWYCQ99WdJh7noe8rYHGS2UgvFMXK1Jq
export const obtenerGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yWYCQ99WdJh7noe8rYHGS2UgvFMXK1Jq&q=${categoria}$&limit=${10}`;
    const resp = await fetch(url);
    
    const {data} = await resp.json(); 
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}
