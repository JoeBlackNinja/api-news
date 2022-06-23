import { Container, Grid, Typography } from "@mui/material";
import Form from './components/Form';
import ListNews from "./components/ListNews";

import {NewsProvider} from './context/NewsProvider';

function App() {

  return (
    <NewsProvider>
    <Container>
      <header>
        <Typography 
          align="center"
          marginY={5}
          component="h1"
          variant="h3"
          sx={{
            fontWeight:'bold'
          }}>
          Buscador de noticias
        </Typography>
      </header>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={4} md={4}>
          <Form/>
        </Grid>
      </Grid>

      <ListNews/>

    </Container>
    </NewsProvider>
  )
}

export default App
