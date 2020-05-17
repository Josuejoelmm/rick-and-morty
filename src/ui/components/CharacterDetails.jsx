import React, { useState, useEffect } from 'react';
import './styles/CharacterDetails.scss';
import axios from 'axios';

const CharacterDetails = (props) => {
    const [ characterDetails, setCharacterDetails ] = useState({});
    const [ episodesName, setEpisodesName ] = useState([]);
    let [episodesLoaded, setEpisodesLoaded] = useState(false);
    let episodesPack = [];
    let idCharacter = props.match.params.characterId;
    
    useEffect(() => {
        const requestDetailsCharacter = async () => {
            try {
                const URL_CurrentCharacter = `https://rickandmortyapi.com/api/character/${idCharacter}`;
                const fetch = await axios.get(URL_CurrentCharacter);
                const response = fetch.data;
                return response;
            } catch (error) {
                console.log('error requesting a character', error);
            }
        };
        const requestEpisodes = async episodes => {
            try {
                episodes.map(async (url, i, array) => {
                    makeRequestEpisodes(url)
                        .then(response => {
                            episodesPack.push(response);
                            if(episodesPack.length === array.length) {
                                setEpisodesLoaded(true);
                            }
                    });
                });
                return episodesPack;
            } catch (error) {
                console.log(error);
            }
            
        };
        const makeRequestEpisodes = async episode => {
            try {
                let request = await axios.get(episode);
                let response = request.data;
                return response;
            } catch (error) {
                console.log('error requesting episodes', error);
            }    
        };

        requestDetailsCharacter()
            .then(response => {
                setCharacterDetails(response);
                requestEpisodes(response.episode)
                    .then(response => {
                        setEpisodesName(response);
                    }); 
            });
        
        return () => { setEpisodesLoaded(false); }
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
                            (episodesLoaded && episodesName.map(episode => (
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