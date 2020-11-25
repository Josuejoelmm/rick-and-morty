import React, { useState, useEffect } from 'react';
import RequestCharacter from './utils/RequestCharacters';
import GlobalState from './GlobalState'
const Provider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [pagesInfo, setPagesInfo] = useState({});
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        RequestCharacter().then((res)=> {
            setCharacters(res.results);
            setPagesInfo(res.info);
        });
    },[]);

    const value = {
        _characters: characters,
        pagesInfo,
        setPagesInfo,
        setCharacters,
        query,
        setQuery
    }

    return (
        <GlobalState.Provider value={value}>
            {children}
        </GlobalState.Provider>
    )
}

export default Provider;