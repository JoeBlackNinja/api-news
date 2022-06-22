import { createContext, useEffect, useState } from "react";

const NewsContext = createContext();

const NewsProvider = ({children}) => {

  const [categoria,setCategoria] = useState('general');
  const [noticias,setNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const data = await fetch(url).
      then(res => res.json()).
      then(data => setNoticias(data.articles))
    }
    consultarApi();
  },[categoria])

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value)
  }
  
  return (
    <NewsContext.Provider
        value={{
          categoria,
          handleChangeCategoria
        }}
    >
        {children}
    </NewsContext.Provider>
  )
}

export {NewsProvider};

export default NewsContext;