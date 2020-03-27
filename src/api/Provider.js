import React, { useState, useEffect } from 'react';
import RequestCharacter from './utils/RequestCharacters';
import GlobalState from './GlobalState'
const Provider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        RequestCharacter().then((res)=> setCharacters(res));
    },[]);

    const value = {
        _characters: characters,
        setCharacters: setCharacters,
        query: query,
        setQuery: setQuery
    }

    return (
        <GlobalState.Provider value={value}>
            {children}
        </GlobalState.Provider>
    )
}

export default Provider;