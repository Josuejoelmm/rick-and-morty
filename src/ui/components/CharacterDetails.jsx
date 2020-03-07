import React, { useState, useEffect } from 'react';
import RequestCharacter from '../../api/utils/RequestCharacters'
import './styles/CharacterDetails.scss';
import axios from 'axios';

const CharacterDetails = (props) => {
    const [ characterDetails, setCharacterDetails ] = useState({});
    let [ idCharacter ] = useState('');
    idCharacter = props.match.params.characterId;
    
    useEffect(() => {
        requestDetailsCharacter().then(response => {
            setCharacterDetails(response);
        });
    }, [idCharacter]);

    const requestDetailsCharacter = async () => {
        const URL_CurrentCharacter = `https://rickandmortyapi.com/api/character/${props.match.params.characterId}`;
        const fetch = await axios.get(URL_CurrentCharacter);
        const response = fetch.data;
        return response;
    }
    console.log(characterDetails, 'FINAL');
    return(
        !!Object.keys(characterDetails).length && 
            <div className="character-profile-container">
                <div className="character-image">
                    <div>
                        <img src={characterDetails.image} alt="Profile Image" />
                    </div>
                </div>
                <div className="character-info">
                    <div>
                        <p>NAME: {characterDetails.name}</p>
                        <p>STATUS: {characterDetails.status}</p>
                        <p>ESPECIES: {characterDetails.species}</p>
                        <p>TYPE: {characterDetails.type}</p>
                        <p>GENRE: {characterDetails.gender}</p>
                        <p>ORIGIN: {characterDetails.origin.name}</p>
                        <p>Last location: {characterDetails.location.name}</p>
                        <p>EPISODE APPEARANCES: {characterDetails.episode.lenght}</p>
                    </div>
                </div>
            </div> ||  "...Loading"
    )
};

        

export default CharacterDetails;