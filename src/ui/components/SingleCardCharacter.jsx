import React from 'react';
import './styles/SingleCardCharacter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import Context from './Context';

const SingleCardCharacter = (props) => {
    const data = props.data;
    return(
        <div className="card-container">
            <div className="card-inner-container">
                <figure>
                    <img src={data.image} alt="" />
                </figure>
                <div className="character-name">
                    <h6>{data.name}</h6>
                </div>
                <div className="character-star">
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
    );
}


export default SingleCardCharacter;