import React, { useState, useEffect } from 'react';
import './styles/CharacterDetails.scss';
import axios from 'axios';

const CharacterDetails = (props) => {
    const [ characterDetails, setCharacterDetails ] = useState({});
    const [ episodesName, setEpisodesName ] = useState([]);
    let [ idCharacter ] = useState('');
    idCharacter = props.match.params.characterId;
    
    useEffect(() => {
        requestDetailsCharacter().then(response => {
            response.episode.forEach(episode => {
                const requestEpisodes = async () => {
                    let request = await axios.get(episode);
                    let response = request.data;
                    return response;
                }
                requestEpisodes().then(response => {
                    setEpisodesName(oldState => [...oldState, response])
                });
            });
            setCharacterDetails(response);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCharacter]);
    
    const requestDetailsCharacter = async () => {
        const URL_CurrentCharacter = `https://rickandmortyapi.com/api/character/${props.match.params.characterId}`;
        const fetch = await axios.get(URL_CurrentCharacter);
        const response = fetch.data;
        return response;
    }
    
    return(
        (!!Object.keys(characterDetails).length && 
            <div className="character-profile-container">
                <div className="character-image">
                    <div>
                        <img src={characterDetails.image} alt="Profile"/>
                    </div>
                </div>
                <div className="character-info">
                    <div>
                        <p>NAME: {characterDetails.name}</p>
                        <p>STATUS: {characterDetails.status}</p>
                        <p>ESPECIES: {characterDetails.species}</p>
                        {
                            characterDetails.type && 
                            <p>TYPE: {characterDetails.type}</p>
                        }
                        <p>GENRE: {characterDetails.gender}</p>
                        <p>ORIGIN: {characterDetails.origin.name}</p>
                        <p>Last location: {characterDetails.location.name}</p>
                        <p>EPISODE APPEARANCES: {characterDetails.episode.length}</p>
                    <ul>
                        { 
                            (!!episodesName.length && episodesName.map(episode => (
                                <li key={`epi-${episode.id}`}>Episode {episode.id}: "{episode.name}"</li>
                            )) ) || 'Cargando Episodios...'
                        }
                    </ul>
                
                    </div>
                </div>
            </div>) ||  <div className="loading-text">Loading...</div>
    )
};        

export default CharacterDetails;