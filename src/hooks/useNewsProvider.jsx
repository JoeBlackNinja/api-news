import { useContext } from "react";
import NewsProvider from "../context/NewsProvider";

const NewsUseContext = () => {
    return useContext(NewsProvider);
}

export default NewsUseContext;