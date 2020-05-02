import React, { useContext, useState } from 'react';
import './styles/MainContainer.scss';
import SingleCardCharacter from './SingleCardCharacter';
import StarIconFav from './StarIconFav';
import GlobalState from '../../api/GlobalState';
import SingleSkeletonCard from './SingleSkeletonCard';

const MainContainer = (props) => {
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
                    (!_characters.length 
                        ? <SingleSkeletonCard />
                        : !!filterSearchedCharacter.length 
                        ? filterSearchedCharacter.map((character) => {
                            return(
                                <div className="inner-character" key={character.id}>
                                    <SingleCardCharacter 
                                        data={character} 
                                    />
                                    <StarIconFav
                                        key={character.id} 
                                        character={character}
                                    />
                                </div>
                            )
                          }) 
                        : <div className="loading-cards">There isn't a character with that name.</div>
                    )
                }
            </div>
        </section>
    )
};

export default MainContainer;