import React, { useState, useEffect } from 'react';
import './styles/CharacterDetails.scss';
import axios from '../../helper/axios';
import Axios from 'axios';

const CharacterDetails = (props) => {
    const [ characterDetails, setCharacterDetails ] = useState({});
    const [ episodesName, setEpisodesName ] = useState([]);
    let idCharacter = props.match.params.characterId;
    
    useEffect(() => {
        const requestDetailsCharacter = async () => {
            try {
                const URL_CurrentCharacter = `/character/${idCharacter}`;
                const fetch = await axios.get(URL_CurrentCharacter);
                const response = fetch.data;
                return response;
            } catch (error) {
                console.log('error requesting a character', error);
            }
        };
        const requestEpisodes = episodes => {
            const promises = episodes.map(episodesUrl => {
                return Axios.get(episodesUrl);
            })
            return promises;
        };

        requestDetailsCharacter()
            .then(response => {
                setCharacterDetails(response);
                Promise.all(requestEpisodes(response.episode))
                    .then(episodes => {
                        episodes.forEach(episode => {
                            setEpisodesName(prevState => [...prevState, episode.data])
                        });
                    })
                
            });
        
        return () => { 
            setEpisodesName([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCharacter]);

    return(
        (!!Object.keys(characterDetails).length && 
            <div className="main-container character-profile-container">
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
                                    <li key={`${characterDetails.name}-${episode.name}`}>Episode {episode.id}: "{episode.name}"</li>
                                )) ) || 'Loading Episodes...'
                            }
                        </ul>
                    </div>
                </div>
            </div>) ||  <div className="main-container loading-text">Loading...</div>
    )
};

export default CharacterDetails;