import React, { useState } from 'react';
import CategoriaAdd from './components/CategoriaAdd';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {


  const [categorias, setCategorias] = useState(['one Punch'])


  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoriaAdd setCategorias={setCategorias} />
      <hr />

      <ol>
        {categorias.map((elements) => <GifGrid key={elements} categoria={elements}/>)}

      </ol>
    </>

  )
}

export default GifExpertApp