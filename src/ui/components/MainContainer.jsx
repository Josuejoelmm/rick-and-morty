import React, { useState, useEffect } from 'react';
import './styles/MainContainer.scss';
import SingleCardCharacter from './SingleCardCharacter';
import Context from './Context'
import axios from 'axios'

const MainContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [dispatch, setDispatch] = useState(1);
    let contador = 1;
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(rest => setCharacters(rest.data.results))
    }, []);

    useEffect(() => {
        // dummy();
        console.log('se ejecuta');
    }, [contador]);
    
    const dummy = async () => {
            const response = await axios.get('https://rickandmortyapi.com/api/character/');
            setCharacters(response.data.results);
    }
    return( characters.length === 0 && "Loading..." ||
        <section className="main-container">
            <div>Text in the body</div>
                {
                   characters && characters.map((character, index) => <SingleCardCharacter key={index} data={character} />)
                }
            <button onClick={() => {contador = contador + 1}}>traer personajes</button>
        </section>
    )
};

export default MainContainer;