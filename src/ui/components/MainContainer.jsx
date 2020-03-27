import React, { useContext, useState } from 'react';
import './styles/MainContainer.scss';
import SingleCardCharacter from './SingleCardCharacter';
import GlobalState from '../../api/GlobalState';
import { Link } from 'react-router-dom';

const MainContainer = () => {
    const charactersState = useContext(GlobalState);
    const { query, _characters } = charactersState;
    const [filterSearchedCharacter, setFilterSearchedCharacter] = useState(_characters);
    
    React.useMemo(() => {
        const result = _characters.filter(character => {
            return character.name.toLowerCase().includes(query.toLowerCase());
        });
        
        setFilterSearchedCharacter(result);
    }, [_characters, query]);
        
    return (
        <section className="main-container">
            <div className="character-wrapper">
                {
                    (!!filterSearchedCharacter.length &&
                    filterSearchedCharacter.map((character, i, arr) => {
                            return( 
                            <Link
                                className="link-character"
                                to={`characters/${character.id}`}
                                key={character.id}
                            >
                                <SingleCardCharacter data={character} />
                            </Link>
                            )
                    })) || (!!query.length && <div className="loading-cards">No existe un Personaje con ese nombre</div>)
                }
            </div>
        </section>
    )
};

export default MainContainer;