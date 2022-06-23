import { createContext, useEffect, useState } from "react";

const NewsContext = createContext();

const NewsProvider = ({children}) => {

  const [categoria,setCategoria] = useState('general');
  const [noticias,setNoticias] = useState([]);
  const [pagina,setPagina] = useState(1);
  const [totalNews, setTotalNews] = useState();

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const data = await fetch(url).
      then(res => res.json()).
      then(data => data);
      setNoticias(data.articles);
      setTotalNews(data.totalResults)
      setPagina(1)
    }
    consultarApi();
/*     setTotalNews(noticias.length); */
  },[categoria])

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const data = await fetch(url).
      then(res => res.json()).
      then(data => data);
      setNoticias(data.articles);
      setTotalNews(data.totalResults)
    }
    consultarApi();
    setTotalNews(noticias.length);
  },[pagina])

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value)
  }

  const handleChangePagina = (e) => {
    setPagina(e.target.textContent);
  }
  
  return (
    <NewsContext.Provider
        value={{
          categoria,
          handleChangeCategoria,
          noticias,
          totalNews,
          handleChangePagina,
          pagina
        }}
    >
        {children}
    </NewsContext.Provider>
  )
}

export {NewsProvider};

export default NewsContext;