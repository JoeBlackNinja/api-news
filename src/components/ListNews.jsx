import { Grid, Typography } from "@mui/material";
import UseNewsProvider from '../hooks/useNewsProvider';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import New from "./New";

const ListNews = () => {
    const { noticias, totalNews, handleChangePagina, pagina } = UseNewsProvider();
    const paginas = Math.ceil(totalNews/20);

  return (
   <>
    <Typography
        textAlign="center"
        marginY={5}
        variant="h3"
    >
        Ultimas noticias
    </Typography>

    <Grid container spacing={2}>
        {noticias.map(noticia => (
            <New
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </Grid>
    <Stack 
        margin={5}
        spacing={2}
        direction="row"
        justifyContent="center"
    >
      <Pagination 
        count={paginas ? paginas : 4} 
        color="primary" 
        onChange={handleChangePagina}
        page={pagina}
    />
    </Stack>
   </>
  )
}

export default ListNews