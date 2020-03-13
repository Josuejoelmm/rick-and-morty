import React, { useContext } from 'react';
import './styles/MainContainer.scss';
import SingleCardCharacter from './SingleCardCharacter';
import GlobalState from '../../api/GlobalState';
import { Link } from 'react-router-dom';


const MainContainer = () => {
    const charactersState = useContext(GlobalState);
    const { query } = charactersState;

    const filterSearchedCharacter = charactersState._characters.filter(character => {
        return character.name.toLowerCase().includes(query.toLowerCase());
    })

    console.log(filterSearchedCharacter, 'filterSearch')

    console.log(charactersState, 'finalData');

    return (
        <section className="main-container">
            <div className="character-wrapper">
                {
                    !!filterSearchedCharacter.length &&
                    filterSearchedCharacter.map((character) => {
                            return( 
                            <Link
                                className="link-character"
                                to={`characters/${character.id}`}
                                key={character.id}
                            >
                                <SingleCardCharacter data={character} />
                            </Link>
                            )
                    })
                }
            </div>
        </section>
    )
};

export default MainContainer;