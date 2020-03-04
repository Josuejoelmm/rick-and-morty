import React, { useState, useEffect } from 'react';
import './styles/MainContainer.scss';
import SingleCardCharacter from './SingleCardCharacter';
import Context from './Context'
import axios from 'axios'

const MainContainer = () => {
    const [characters, setCharacters] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        // axios.get('https://rickandmortyapi.com/api/character/')
        // .then(rest => setCharacters(rest.data.results))
        dummy();
    }, []);
    
    const dummy = async () => {
            const response = await axios.get('https://rickandmortyapi.com/api/character/');
            setCharacters(response.data.results);
    }
    return( characters.length === 0 && "Loading..." ||
        <section className="main-container">
            <div className="character-wrapper">
                {
                   characters && characters.map((character, index) => <SingleCardCharacter key={index} data={character} />)
                }
            </div>
        </section>
    )
};

export default MainContainer;