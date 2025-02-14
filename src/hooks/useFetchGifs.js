import { useState, useEffect } from "react";
import { obtenerGifs } from "../helpers/obtenerGifs";



export const useFetchGifs = (categoria) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async() => {
      const newImages = await obtenerGifs(categoria);
      setImages(newImages);
      setisLoading(false);
    }
  
    useEffect(() => {
      getImages();
    },[]);

    return {
        images,
        isLoading
    }
}
