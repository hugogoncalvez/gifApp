import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CategoriaAdd = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategorias( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type={'text'} value={inputValue} onChange={handleInput}></input>
        </form>
    )
}

CategoriaAdd.propTypes = {
    setCategorias: PropTypes.func.isRequired
}



export default CategoriaAdd