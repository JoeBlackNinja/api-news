import { 
    FormControl, 
    InputLabel, 

    Select, 
    MenuItem, 
    Button, Box } from "@mui/material" 

import CATEGORIAS from '../constants/categotias';
import UseNewsProvider from '../hooks/useNewsProvider';

const Form = () => {

    const { categoria, handleChangeCategoria } = UseNewsProvider();

  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select
                label="Categoria"
                onChange={handleChangeCategoria}
                value={categoria}
            >
                {CATEGORIAS.map(categoria => (
                    <MenuItem
                        id={categoria.value}
                        key={categoria.value}
                        value={categoria.value}
                    >{categoria.label}</MenuItem>
                ))}
            </Select>
            <Box sx={{marginTop:1}}>
                <Button
                    variant="contained"
                    fullWidth
                >
                    Buscar noticias
                </Button>
            </Box>
        </FormControl>
    </form>
  )
}

export default Form