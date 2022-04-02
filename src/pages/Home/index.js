import React, { useState } from 'react';
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import TrendingSearches from 'components/TrendingSearches';

// const POPULAR_GIFS = ['Dragon Ball', 'Star wars', 'Marvel', 'Justice League'];

export default function Home () {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();

    const handleSubmit = evt => {
        evt.preventDefault();
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`);
    }
    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Buscar gif..." onChange={handleChange} value={keyword}></input>
            </form>    
            <h3 className="App-title">Ultima busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <div className="App-category">
                <TrendingSearches />
            </div>            
        </>
    )
}