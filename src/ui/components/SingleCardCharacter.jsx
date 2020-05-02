import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles/SingleCardCharacter.scss';

const SingleCardCharacter = (props) => {
    const styles = {cursor: 'pointer'}
    const {data} = props;
    const [imageLoaded, setImageLoaded] = useState(false);

    const updateImageStatus = () => {
        setImageLoaded(true);
    }
    const goToCharacterDetailsPage = () => {
        props.history.push(`characters/${data.id}`)
    }

    return(
        <div style={styles} onClick={goToCharacterDetailsPage} className="card-container">
            <div className="card-inner-container">
                <figure className={!imageLoaded ? "loading-mage" : null}>
                    <img src={data.image} alt="" onLoad={updateImageStatus} />
                </figure>
                <div className="character-name">
                    <h6>{data.name}</h6>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SingleCardCharacter);