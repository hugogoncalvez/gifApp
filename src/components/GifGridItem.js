import React from 'react'

const GifGridItem = ({ title, url }) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title}></img>
            <p>{title.length === 0 ? 'Sin Título' : title}</p>
        </div>
    )
}

export default GifGridItem