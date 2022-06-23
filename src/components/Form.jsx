import { 
    FormControl, 
    InputLabel,
    Select, 
    MenuItem, 
 } from "@mui/material" 

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
        </FormControl>
    </form>
  )
}

export default Form