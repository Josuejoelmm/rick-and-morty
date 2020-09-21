import React, { useState, useContext } from 'react';
import GlobalState from '../../api/GlobalState';

function LoadMoreCharacters() {
    const [characterPageToLoad, setCharacterPageToLoad] = useState(2);
    const contextState = useContext(GlobalState);
    const { _characters, setCharacters } = contextState;
    const fetchMoreCharacters = () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${characterPageToLoad.toString()}`)
            .then(res => res.json())
            .then(data => {
                setCharacters(_characters.concat(data.results));
                setCharacterPageToLoad(characterPageToLoad + 1);
            });
    }
    return <button onClick={fetchMoreCharacters}>Load more</button>
}

export default LoadMoreCharacters;