import React, { useContext } from 'react';
import GlobalState from '../../api/GlobalState';
import './styles/LoadMoreCharacters.scss';

function LoadMoreCharacters() {
    const contextState = useContext(GlobalState);
    const { _characters, setCharacters, pagesInfo, setPagesInfo } = contextState;
    const fetchMoreCharacters = () => {
        fetch(pagesInfo.next)
            .then(res => res.json())
            .then(data => {
                setCharacters(_characters.concat(data.results));
                setPagesInfo(data.info);
            });
    }
    return <button className="bt-load-more" onClick={fetchMoreCharacters}>Load more</button>
}

export default LoadMoreCharacters;