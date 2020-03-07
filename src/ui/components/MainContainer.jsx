import React, { useContext } from 'react';
import './styles/MainContainer.scss';
import SingleCardCharacter from './SingleCardCharacter';
import GlobalState from '../../api/GlobalState';
import { Link } from 'react-router-dom';


const MainContainer = () => {
    const charactersState = useContext(GlobalState);

    console.log(charactersState, 'finalData');
    return (
        <section className="main-container">
            <div className="character-wrapper">
                {
                    !!charactersState._characters &&
                        charactersState._characters.map((character, index) => {
                            return( 
                            <Link
                                className="link-character"
                                to={`characters/${character.id}`}
                            >
                                <SingleCardCharacter key={index} data={character} />
                            </Link>
                            )
                        }
                        )
                }
            </div>
        </section>



        // characters.length === 0 && "Loading..." ||

    )
};

export default MainContainer;